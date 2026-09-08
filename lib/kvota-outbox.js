import {createHash,randomUUID} from 'node:crypto';
const hash=s=>createHash('sha256').update(s).digest('hex');
export async function saveKvotaForm(env,data,mail){
 if(!env.DB||!env.KVOTA_FORM_KEY)throw new Error('KVOTA_FORM_UNAVAILABLE');
 const clean={name:String(data.name).trim().slice(0,160),email:String(data.email).trim().toLowerCase(),phone:String(data.phone||'').slice(0,60),title:String(data.service||data._subject||'Förfrågan om hemsidan').slice(0,160),description:[data.company?'Företag: '+data.company:'',data.message,data.chatHistory?'Tidigare chatt:\n'+data.chatHistory:''].filter(Boolean).join('\n\n').slice(0,6000),page_url:'https://www.stoltmarketing.se'},requestHash=hash(JSON.stringify(clean));
 const at=new Date().toISOString(),id=/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(data._requestId||'')?data._requestId:randomUUID();
 await env.DB.prepare(`INSERT OR IGNORE INTO kvota_form_outbox(id,request_hash,payload,mail_payload,created_at,updated_at)
  SELECT ?1,?2,?3,?4,?5,?5 WHERE NOT EXISTS(SELECT 1 FROM kvota_form_outbox WHERE request_hash=?2 AND created_at>=?6)`).bind(id,requestHash,JSON.stringify({...clean,operation:id}),JSON.stringify(mail),at,new Date(Date.now()-86400000).toISOString()).run();
 const saved=await env.DB.prepare('SELECT id,request_hash FROM kvota_form_outbox WHERE id=?1 OR(request_hash=?2 AND created_at>=?3) ORDER BY created_at DESC LIMIT 1').bind(id,requestHash,new Date(Date.now()-86400000).toISOString()).first();
 if(!saved||saved.request_hash!==requestHash)throw new Error('KVOTA_FORM_CONFLICT');return saved.id;
}
export async function deliverKvotaForms(env,transport=fetch){
 if(!env.DB||!env.KVOTA_FORM_KEY||!env.RESEND_API_KEY)return;
 await env.DB.prepare("DELETE FROM kvota_form_outbox WHERE state='received' AND mail_state IN('sent','failed','uncertain') AND created_at<?1").bind(new Date(Date.now()-30*86400000).toISOString()).run();
 const at=new Date().toISOString(),rows=await env.DB.prepare("SELECT id FROM kvota_form_outbox WHERE (state='pending' OR mail_state='pending') AND(lease_until IS NULL OR lease_until<?1) ORDER BY created_at LIMIT 5").bind(at).all();
 for(const item of rows.results){
  const lease=randomUUID(),r=await env.DB.prepare(`UPDATE kvota_form_outbox SET lease=?1,lease_until=?2,updated_at=?3 WHERE id=?4 AND(lease_until IS NULL OR lease_until<?3) RETURNING *`).bind(lease,new Date(Date.now()+90000).toISOString(),new Date().toISOString(),item.id).first();if(!r)continue;
  try{
   if(r.state==='pending'){try{
    const response=await transport('https://widget.stoltmarketing.se/suite/forms/stoltmarketing',{method:'POST',headers:{Authorization:'Bearer '+env.KVOTA_FORM_KEY,'Content-Type':'application/json'},body:r.payload,signal:AbortSignal.timeout(12000),redirect:'manual'});
    const body=await response.json().catch(()=>({}));
    if(response.ok&&typeof body.id==='string')await env.DB.prepare("UPDATE kvota_form_outbox SET state='received',lead_id=?1,last_error=NULL WHERE id=?2 AND lease=?3").bind(body.id,r.id,lease).run();
    else await env.DB.prepare('UPDATE kvota_form_outbox SET last_error=?1 WHERE id=?2 AND lease=?3').bind('KVOTA_'+response.status,r.id,lease).run();
   }catch{await env.DB.prepare("UPDATE kvota_form_outbox SET last_error='KVOTA_NETWORK' WHERE id=?1 AND lease=?2").bind(r.id,lease).run();}}
   if(r.mail_state==='pending'){
    if(r.mail_attempts>=8||r.mail_first_attempt_at&&Date.now()-Date.parse(r.mail_first_attempt_at)>18*3600000){await env.DB.prepare("UPDATE kvota_form_outbox SET mail_state='uncertain',last_error='MAIL_RETRY_WINDOW' WHERE id=?1 AND lease=?2").bind(r.id,lease).run();continue;}
    await env.DB.prepare('UPDATE kvota_form_outbox SET mail_attempts=mail_attempts+1,mail_first_attempt_at=coalesce(mail_first_attempt_at,?1) WHERE id=?2 AND lease=?3').bind(new Date().toISOString(),r.id,lease).run();
    const response=await transport('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+env.RESEND_API_KEY,'Content-Type':'application/json','Idempotency-Key':'stolt-kvota/'+r.id},body:r.mail_payload,signal:AbortSignal.timeout(12000),redirect:'manual'}),body=await response.json().catch(()=>({}));
    await env.DB.prepare('UPDATE kvota_form_outbox SET mail_state=?1,mail_provider_id=?2,last_error=?3 WHERE id=?4 AND lease=?5').bind(response.ok&&body.id?'sent':response.status===429||response.status>=500?'pending':'failed',body.id||null,response.ok?null:'MAIL_'+response.status,r.id,lease).run();
   }
  }catch{await env.DB.prepare("UPDATE kvota_form_outbox SET last_error='NETWORK_UNCERTAIN' WHERE id=?1 AND lease=?2").bind(r.id,lease).run();}
  finally{await env.DB.prepare('UPDATE kvota_form_outbox SET lease=NULL,lease_until=NULL,updated_at=?1 WHERE id=?2 AND lease=?3').bind(new Date().toISOString(),r.id,lease).run();}
 }
}
