"""Read-only check of the 100 public audit URLs on preview or production."""
import json, re, sys, time, urllib.request
from pathlib import Path
from urllib.parse import urlparse, urljoin, unquote
from collections import Counter
from crawl import Page

root=Path(__file__).parent
origin=sys.argv[1].rstrip('/')
label=sys.argv[2]
baseline=json.loads((root/'urls.json').read_text())
results=[]
for i,old in enumerate(baseline):
    path=urlparse(old).path
    url=origin+path
    try:
        request=urllib.request.Request(url,headers={'User-Agent':'StoltMarketing-deployment-verification/1.0'})
        with urllib.request.urlopen(request,timeout=30) as response:
            html=response.read().decode(); status=response.status; headers=dict(response.headers)
        page=Page(); page.feed(html)
        results.append({'path':path,'status':status,'title':page.title,'meta':page.meta,'canonical':page.canonical,'ids':page.ids,'headings':page.headings,'schemas':page.schemas,'links':page.links,'main_count':len(re.findall(r'<main(?:\s|>)',html)),'images':page.images,'text':'\n'.join(page.main or page.text),'headers':headers})
    except Exception as error:results.append({'path':path,'error':str(error)})
    (root/f'{label}-crawl.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
    if (i+1)%20==0: print(f'{i+1}/{len(baseline)}',flush=True)
    time.sleep(.08)
by_path={r['path'].rstrip('/') or '/':r for r in results}
def types(value):
    if isinstance(value,list): return sum((types(v) for v in value),[])
    if isinstance(value,dict): return ([value['@type']] if isinstance(value.get('@type'),str) else [])+sum((types(v) for k,v in value.items() if k!='@type'),[])
    return []
issues=[]
for r in results:
    path=r['path']
    if 'error'in r: issues.append([path,'fetch',r['error']]);continue
    robots=(r['meta'].get('robots','')+' '+next((v for k,v in r['headers'].items() if k.lower()=='x-robots-tag'),'')).lower()
    expected_noindex='preview' in origin or path in ['/lp/hemsida-foretag','/lp/wordpress','/serviceavtal']
    if ('noindex' in robots)!=expected_noindex:issues.append([path,'robots',robots])
    if r['main_count']!=1:issues.append([path,'main_count',r['main_count']])
    h1=[h for h in r['headings'] if h['level']=='h1']
    if len(h1)!=1:issues.append([path,'h1',len(h1)])
    if not r['meta'].get('description'):issues.append([path,'description','missing'])
    if 'main-content' not in r['ids']:issues.append([path,'skip_target','missing'])
    if path not in ['/lp/hemsida-foretag','/lp/wordpress','/serviceavtal']:
        expected='https://www.stoltmarketing.se'+('' if path=='/' else path)
        if len(r['canonical'])!=1 or r['canonical'][0].rstrip('/')!=expected.rstrip('/'):issues.append([path,'canonical',r['canonical']])
    counts=Counter(types(r['schemas']))
    for kind in ['FAQPage','BreadcrumbList','Article','BlogPosting']:
        if counts[kind]>1:issues.append([path,'duplicate_schema',kind])
    if any(s.get('parse_error') for s in r['schemas'] if isinstance(s,dict)):issues.append([path,'schema','invalid_json'])
    for link in r['links']:
        target=urlparse(urljoin(origin+path,link['href']))
        if target.netloc not in [urlparse(origin).netloc,'www.stoltmarketing.se','stoltmarketing.se']:continue
        target_path=target.path.rstrip('/') or '/'
        if target_path in by_path and target.fragment:
            if unquote(target.fragment) not in by_path[target_path].get('ids',[]):issues.append([path,'anchor',link['href']])
    bad=re.findall(r'[\u2013\u2014\u201c\u201d\u2190-\u21ff]',r['text'])
    if bad:issues.append([path,'copy_typography',sorted(set(bad))])
for field in ['title','description','twitter:title','twitter:description']:
    values=Counter(r.get('title') if field=='title' else r.get('meta',{}).get(field) for r in results if 'error'not in r)
    duplicates={str(value):count for value,count in values.items() if count>1 or not value}
    if duplicates:issues.append(['all','duplicate_or_missing_'+field,duplicates])
summary={'origin':origin,'pages':len(results),'ok':sum(r.get('status')==200 for r in results),'issues':issues}
(root/f'{label}-checks.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2))
print(json.dumps(summary,ensure_ascii=False,indent=2))
