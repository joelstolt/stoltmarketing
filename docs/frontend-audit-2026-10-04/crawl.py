"""Read-only sequential audit of public sitemap pages. No form submissions."""
import json, re, time, urllib.request, urllib.error, xml.etree.ElementTree as ET
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, urljoin

BASE = Path(__file__).parent
class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack=[]; self.text=[]; self.headings=[]; self.links=[]; self.images=[]
        self.meta={}; self.canonical=[]; self.title=''; self.ids=[]; self.schemas=[]
        self.current_h=None; self.current_a=None; self.script=None; self.in_main=0; self.main=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.append(a['id'])
        if tag=='main': self.in_main+=1
        if tag in ['script','style']: self.stack.append(tag)
        if tag=='script' and a.get('type')=='application/ld+json': self.script=''
        if tag=='title': self.stack.append('title')
        if tag=='meta': self.meta[a.get('name',a.get('property',''))]=a.get('content','')
        if tag=='link' and a.get('rel')=='canonical': self.canonical.append(a.get('href'))
        if re.fullmatch(r'h[1-6]',tag): self.current_h={'level':tag,'text':''}
        if tag=='a': self.current_a={'href':a.get('href',''),'text':'','aria':a.get('aria-label','')}
        if tag=='img': self.images.append(a)
    def handle_endtag(self,tag):
        if tag=='main': self.in_main=max(0,self.in_main-1)
        if tag in ['script','style','title'] and tag in self.stack:
            self.stack.remove(tag)
        if tag=='script' and self.script is not None:
            try: self.schemas.append(json.loads(self.script))
            except: self.schemas.append({'parse_error':True})
            self.script=None
        if self.current_h and tag==self.current_h['level']:
            self.headings.append(self.current_h); self.current_h=None
        if tag=='a' and self.current_a:
            self.links.append(self.current_a); self.current_a=None
    def handle_data(self,data):
        if self.script is not None: self.script+=data
        if 'script' in self.stack or 'style' in self.stack:return
        if 'title' in self.stack: self.title+=data; return
        t=re.sub(r'\s+',' ',data).strip()
        if not t:return
        self.text.append(t)
        if self.in_main:self.main.append(t)
        if self.current_h:self.current_h['text']+=t+' '
        if self.current_a:self.current_a['text']+=t+' '

if __name__ == '__main__':
    urls=[x.text for x in ET.parse(BASE/'sitemap.xml').findall('.//{*}loc')]
    extra=['/lp/hemsida-foretag','/lp/wordpress','/serviceavtal']
    urls+=['https://www.stoltmarketing.se'+x for x in extra]
    (BASE/'pages').mkdir(exist_ok=True)
    out=[]
    for i,url in enumerate(urls):
        slug=urlparse(url).path.strip('/').replace('/','__') or 'start'
        req=urllib.request.Request(url,headers={'User-Agent':'StoltMarketing-readonly-content-audit/1.0'})
        start=time.time()
        try:
            with urllib.request.urlopen(req,timeout=25) as r:
                html=r.read().decode('utf-8'); status=r.status; end=r.url; headers=dict(r.headers)
            p=Page();p.feed(html)
            data={'url':url,'status':status,'final_url':end,'seconds':round(time.time()-start,2),
              'html_bytes':len(html.encode()),'title':p.title,'meta':p.meta,'canonical':p.canonical,
              'headings':p.headings,'links':p.links,'images':p.images,'ids':p.ids,'schemas':p.schemas,
              'text':'\n'.join(p.main or p.text),'has_main':bool(p.main),'headers':headers}
            (BASE/'pages'/f'{slug}.txt').write_text(data['text'])
            (BASE/'pages'/f'{slug}.json').write_text(json.dumps(data,ensure_ascii=False,indent=2))
            out.append(data)
        except Exception as e:out.append({'url':url,'error':str(e)})
        (BASE/'crawl.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
        if (i+1)%10==0:print(f'{i+1}/{len(urls)} kontrollerade',flush=True)
        time.sleep(.1)
    print(json.dumps({'pages':len(out),'errors':[x for x in out if 'error'in x]},ensure_ascii=False),flush=True)
