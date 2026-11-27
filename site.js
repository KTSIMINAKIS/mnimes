/* Ασφάλεια: όχι μέσα σε πλαίσιο άλλης σελίδας */
if(window.top!==window.self){document.documentElement.textContent='';throw new Error('framed');}
const EN={
 name:'Mnimes for Life',
 whath:'One library for your whole life',
 h1:'All your photos, <span class="gr">in order.</span>',
 lead:'Drop all your photos and videos into one folder, and they go into order by themselves, by year, month and place. With a calendar and a map. Free, no account, and nothing is uploaded to the internet.',
 dl:'Download Mnimes for Life', online:'Open it online',
 meta:'One file · Windows, Mac, Linux · English &amp; Greek. “Online” also works on iPhone, for viewing.',
 watch:'See how it works', how:'How it works',
 s1:'<b>Download it and open it with Chrome or Edge</b><p>Double-click “Mnimes.html”. Nothing to install. (If another browser opens: right-click → Open with → Chrome.)</p>',
 s2:'<b>Choose the drive</b><p>e.g. the external one. A “Μνήμες” folder is made with the “Ρίξ’ τα όλα εδώ” (drop it all here) folder inside, and Mnimes is put on the drive too.</p>',
 s3:'<b>Drop it all in there</b><p>With File Explorer, as always: from a phone, a stick, an old drive. It sorts itself into Year/Month/Place, with a double check.</p>',
 safeh:'Built so nothing gets lost',
 f3:'<b>Originals are deleted only if you ask</b>, and only after the copies are verified.',
 f5:'<b>Duplicates and failing drives.</b> What is already there does not go in twice. If a drive shows errors, it stops.',
 f6:'<b>Private.</b> Your photos never leave your computer. No account, no ads.',
 f7:'<b>Normal files.</b> Your photos stay plain files in folders: they open without Mnimes too, forever.',
 kh:'For the phone',
 kl:'The phone’s photos, <b>original with their location</b>, in two ways.',
 k1:'<b>📲 The «Mnimes for Life» app for Android</b><p>Plug a USB-C stick or a drive into the phone → “Put them on the stick”, with no computer. Or send them to the computer over Wi-Fi: in Mnimes “📥 Drop it all here” → “📱 From the phone without a cable” and scan the QR code. With “✔ Are they all on the computer?” you check before deleting them from the phone.</p>',
 k2:'<b>🔌 With a cable (Android and iPhone)</b><p>Connect the phone to the computer and copy the “DCIM” folder into “Ρίξ’ τα όλα εδώ” (drop it all here). For iPhone: Settings → Photos → “Keep Originals”.</p>',
 k3:'<b>Nothing is deleted</b><p>Nothing on the phone is changed or deleted. The drive the phone filled opens in Mnimes on the computer, with calendar and map.</p>',
 kdl:'Download the app (Android)',
 kn:'Android 8 or newer · free · 1.4 MB. If the phone asks about “install from unknown source”, tap “Allow” for this download only. SHA-256 fingerprint: e870029503be8c56…',
 needh:'What you need',
 n1:'<td>Computer</td><td>Chrome or Edge (recent version): does everything, collecting, sorting, checking and deleting.</td>',
 n2:'<td>Safari, iPhone, Firefox</td><td>View only: calendar and map for the photos you choose. They cannot write to folders.</td>',
 n3:'<td>Internet</td><td>For the map, place names and capture dates. Only rounded coordinates are sent, never photos.</td>',

 t1:'Nothing is uploaded', t2:'Triple check', t3:'Free forever',
 whatk:'What it does', spk:'Fast', safek:'Safety', gk:'Guide',
 b1h:'Drop it all here', b1:'One folder for everything. Whatever you drop in goes by itself into Year / Month / Place, with a double check. You press nothing else.',
 pdrop:'Drop it all here', pmon:'08-August', pplace:'Naxos',
 b2h:'Calendar &amp; map', b2:'Find every moment: when and where it was taken.',
 newb:'New', b3h:'Similar photos', b3:'Finds the same photo in another size (e.g. from Viber) and bursts of the same moment. It shows the best one with ⭐ and you choose.',
 b4h:'Duplicates', b4:'Finds only the 100% identical ones, always keeps one, and the others go to a bin. Nothing is deleted without you.',
 b5h:'From the phone', b5:'Even without a cable, with the Android app over Wi-Fi. Original, with their location.',
 b6h:'On the drive itself', b6:'Mnimes lives on the drive: plug it into any computer and it is always the right library.',
 b7h:'Always in agreement', b7:'Two computers with the same drive never spoil each other. Whatever you change by hand is fixed with one button.',
 sph:'Fast, even on an old computer', sps:'The work is done by a helper in the background, so the page never freezes, even with videos of many GB.',
 sec:'sec', inst:'Install as an app', dk:'stays', db:'to the bin',
 sp1:'the longest page freeze with huge videos (it was 4.7 sec)', sp2:'to notice by itself the new files you dropped in (it was 25 sec)', sp3:'to find the similar ones again among 841 photos (5.5 sec the first time)',
 spn:'Measured with real photos on a 2012 laptop with an old hard disk.',
 safes:'Every photo goes through these steps. If something differs by even one byte, it stops and deletes nothing.',
 v1:'<b>Copy</b><span>Same resolution, same quality, no compression.</span>', v2:'<b>Fingerprint</b><span>Every file gets a digital fingerprint (SHA-256).</span>',
 v3:'<b>2nd check</b><span>At the end it is read again and compared.</span>', v4:'<b>3rd check</b><span>Before any deletion, once more.</span>', v5:'<b>Trash</b><span>Whatever you delete goes there first and comes back.</span>',
 gh:'Step by step, for everything', gs:'Tap a topic to open it. You will find the same inside the app, in the «🙋 Helper».',
 g1h:'The first time', g1:'<li><span>Press <b>«Download Mnimes for Life»</b> up here. One file downloads, «Mnimes.html».</span></li><li><span>Open it with a double-click. It must open in <b>Chrome or Edge</b>. If another browser opens: right-click → «Open with» → Chrome.</span></li><li><span>Connect the drive where you want your photos to live (e.g. an external drive).</span></li><li><span>Press <b>«➕ Add photos»</b> and choose the drive. When Chrome asks, press <b>«Allow on every visit»</b>.</span></li><li><span>To «Put Mnimes on the drive too?» press <b>OK</b>. Then you open it from the drive on any computer.</span></li>',
 g1t:'💡 A «Μνήμες» folder is made, with the «Ρίξ’ τα όλα εδώ» (drop it all here) folder inside. That’s it.',
 g2h:'Adding photos from a stick or an old drive', g2:'<li><span>Connect the stick or the old drive.</span></li><li><span>Open <b>File Explorer</b> and find the photos.</span></li><li><span>Copy them (or whole folders) into <b>«Μνήμες › Ρίξ’ τα όλα εδώ»</b>.</span></li><li><span>With Mnimes open, it notices them by itself within seconds and sorts them into Year / Month / Place.</span></li><li><span>The bar shows how much is left. If you close it, it continues where it stopped.</span></li>',
 g2t:'💡 Documents and anything that is not a photo or video stay untouched. For an old or suspicious drive: «Settings & more» → «For experts» → «Take & sort» (it copies and leaves the originals alone).',
 g3h:'Bringing the phone’s photos', g3:'<li><span><b>Without a cable (Android):</b> download the «Mnimes for Life» app from this page. Phone and computer on the same Wi-Fi.</span></li><li><span>On the computer: «➕ Add photos» → <b>«📱 Show the QR»</b> → Android.</span></li><li><span>On the phone: <b>«💻 Send them to the computer»</b> and scan the QR. They arrive original, with their location.</span></li><li><span><b>With a cable (Android):</b> on the phone tap the «USB» notification → «File transfer». On the computer copy the <b>DCIM</b> folder into «Ρίξ’ τα όλα εδώ».</span></li><li><span><b>iPhone:</b> once, Settings → Photos → «Transfer to Mac or PC» → <b>«Keep Originals»</b>. Then cable, «Trust», and copy DCIM.</span></li>',
 g3t:'💡 Before you delete anything from the phone, do the «✔ Are they all on the computer?» check in the app. If the phone keeps a copy in the cloud, deleting from the phone deletes them there too.',
 g4h:'Finding a photo', g4:'<li><span><b>Calendar:</b> choose a year and month, and see the days with photos.</span></li><li><span><b>Map:</b> see where they were taken. The ones with a location (GPS) inside them appear.</span></li><li><span><b>Search</b> at the top: type a place (Naxos), a year (2019) or a month (August 2023).</span></li><li><span>Tap a photo to open it big. With the arrows you go to the next.</span></li>',
 g4t:'💡 The photos are also normal files in the «Μνήμες › Year › Month › Place» folder: they open without Mnimes too.',
 g5h:'Cleaning up similar photos', g5:'<li><span>Press <b>«⚙️ Settings & more»</b> → <b>«Similar photos»</b>.</span></li><li><span>Press <b>«Find similar photos»</b>. The first time it takes a few minutes for many thousands, then it is instant.</span></li><li><span>In each set, the photo with the <b>⭐</b> is the best quality one. With the magnifier you see it big.</span></li><li><span>Press <b>«Keep / To the Trash»</b> on the ones you want, or <b>«Keep only the ⭐»</b> for the whole set.</span></li><li><span>At the end press <b>«Ticked to the Trash»</b>.</span></li>',
 g5t:'💡 Nothing is deleted by itself, and whatever goes to the Trash comes back.',
 g6h:'Deleting and restoring', g6:'<li><span>Open the photo and press <b>🗑️</b>. For many at once: the select button at the top right.</span></li><li><span>It goes to the <b>Trash</b>, together with its originals. First the copy in the Trash is verified.</span></li><li><span>To restore: «⚙️ Settings & more» → <b>«Trash»</b> → «Restore».</span></li><li><span>It is gone for good <b>only</b> with «Empty Trash».</span></li>',
 g7h:'Making a 2nd backup copy', g7:'<li><span>Connect <b>another</b> drive or stick.</span></li><li><span>«⚙️ Settings & more» → «Settings» → <b>«💾 2nd copy on ANOTHER drive»</b>, and choose it.</span></li><li><span>It fills by itself and always stays up to date.</span></li>',
 g7t:'💡 It is the most important of all: if one drive fails, your photos are saved from the other.',
 g8h:'On another computer', g8:'<li><span>Connect the drive to the other computer.</span></li><li><span>Open the file <b>«Μνήμες › Μνήμες για Πάντα.html»</b> on the drive, with Chrome or Edge.</span></li><li><span>The first time press <b>«Choose the Μνήμες folder of this drive»</b>. After that everything loads by itself.</span></li>',
 g8t:'💡 Two computers with the same drive never spoil each other: the lists are merged.',
 g9h:'Something is not right', g9:'<li><span><b>Not sorting?</b> If the top says «🔓 … asks for permission again», press the button and choose «Allow on every visit».</span></li><li><span><b>Black squares or missing photos?</b> «Settings & more» → «For experts» → «Look at the library again».</span></li><li><span><b>«Already open in another tab»?</b> Close the second tab. Mnimes works in one at a time.</span></li><li><span><b>The drive shows errors?</b> Press «⛔ Stop». For precious photos, take the drive to a data recovery lab.</span></li><li><span><b>Wrong date?</b> It comes from inside the photo or from its name. If the camera had the wrong time, it goes in with that.</span></li>',

 nav1:'See it', nav2:'How it works inside', nav3:'Guide', nav4:'Helper',
 dk1:'See it from the inside', dh1:'The app, as you will see it',
 tb1:'Home', tb2:'Photos', tb3:'Calendar', tb4:'Map', tb5:'Similar', tb6:'Viewer', tb7:'Step by step',
 cp_home:'Home: how many photos you have, whether they are all safe, and the 5 buttons you need.',
 cp_all:'All photos and videos, newest first, by month.',
 cp_cal:'Calendar: year → month → day. Each year with one of its photos.',
 cp_map:'Map: where they were taken, from the location each photo carries inside it.',
 cp_similar:'Similar: the same photo in another size, or bursts. The ⭐ is the best one; you choose.',
 cp_photo:'Big view, with date and place. With the arrows you go to the next one.',
 cp_start2:'Step by step: «Where are the photos now?» and the app tells you exactly what to do.',
 demo:'The photos are examples (Pexels, free licence). The app is the real one, version 3.2.',
 hk:'How it works inside', hh:'What happens «inside», in plain words',
 h1h:'Everything stays with you', h1p:'Mnimes is one file that runs inside Chrome or Edge and writes straight to your drive, with your permission. There is no server, no account and no «cloud»: your photos never pass through the internet.',
 h2h:'Digital fingerprint (SHA-256)', h2b:'Change 1 byte', h2p:'Every file gives a «code» of 64 characters. If even one byte changes, the code changes completely (try it, live). This is how every copy is checked three times.',
 h3h:'Visual fingerprint (for Similar photos)', h3p:'The photo shrinks to 9×8 grey dots, and for each pair of neighbours it writes 1 if the second is brighter. That gives 64 «yes/no». The same photo from Viber differs in 2 of the 64, so it is the same. Another sunset differs in 7 and is another day, so it stays apart.',
 h4h:'A helper in the background', h4a:'Page', h4b:'Helper', h4p:'Big videos are checked by a «helper» (Web Worker) next to the page, so the screen always answers at once. On a slow computer it works more gently, so it does not overheat.',
 vk:'Helper', vh:'Have a question?', vs:'The same Helper the app has: you choose a question and see the answer step by step. No account, nothing is sent.',
 q1:'How do I bring the phone’s photos?', q2:'I have an iPhone. What do I do?', q3:'Is it safe? Is anything uploaded?', q4:'How do I make a 2nd copy?', vopen:'All the questions',
 ch:'Found it useful?', cp:'Mnimes is free and will stay free. If you like, buy me a coffee.', cb:'Buy me a coffee',
 dh:'Thank you! ☕', dp:'Open your bank app → <b>IRIS</b> → send to mobile number, and enter:', cpy:'Copy', copied:'Copied ✓', dq:'Or scan the QR with your camera to get the number. (IRIS works with Greek banks.)', dc:'Close',
 foot:'Mnimes for Life 3.2.2 · The photos in the pictures are examples.', copy:'© 2026 Konstantinos Tsiminakis · All rights reserved', credit:'Created by Konstantinos Tsiminakis, son of Alexandros', terms:'Terms of use and licences',
 shot:'The Mnimes home screen with tiles for Photos, Videos, Calendar and Map'
};
const EL={};document.querySelectorAll('[data-t]').forEach(e=>EL[e.dataset.t]=e.innerHTML);
document.querySelectorAll('[data-alt]').forEach(e=>EL[e.dataset.alt]=e.alt);
const TITLE={el:document.title,en:'Mnimes for Life · all your photos, in order'};
function setLang(l){const D=l==='en'?EN:EL;
  document.querySelectorAll('[data-t]').forEach(e=>{if(D[e.dataset.t]!=null)e.innerHTML=D[e.dataset.t];});
  document.querySelectorAll('[data-alt]').forEach(e=>{if(D[e.dataset.alt])e.alt=D[e.dataset.alt];});
  document.documentElement.lang=l;document.title=TITLE[l];
  document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l));
  document.querySelectorAll('a[href^="Mnimes.html"]').forEach(a=>{if(!a.hasAttribute('download'))a.href='Mnimes.html?lang='+l;});
  document.querySelectorAll('img[data-en]').forEach(im=>{if(!im.dataset.el)im.dataset.el=im.getAttribute('src');im.src=l==='en'?im.dataset.en:im.dataset.el;});
  if(window.__ready)updShots();
  try{localStorage.setItem('lang',l);}catch(e){}}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
let start='el';try{start=new URLSearchParams(location.search).get('lang')||localStorage.getItem('lang')||((navigator.language||'el').toLowerCase().startsWith('el')?'el':'en');}catch(e){}
/* (η γλώσσα εφαρμόζεται στο τέλος του αρχείου, αφού οριστούν όλα) */
const dlg=document.getElementById('coffee');
document.getElementById('coffeeBtn').addEventListener('click',()=>{if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','');});
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});
document.getElementById('copyBtn').addEventListener('click',async e=>{const b=e.currentTarget,en=document.documentElement.lang==='en';
  try{await navigator.clipboard.writeText('6936324466');b.textContent=en?EN.copied:'Αντιγράφηκε ✓';}
  catch(x){const r=document.createRange();r.selectNodeContents(document.getElementById('phoneNum'));const s=getSelection();s.removeAllRanges();s.addRange(r);}});

/* Εγκατάσταση σαν εφαρμογή: το κουμπί φαίνεται ΜΟΝΟ όταν ο browser το επιτρέπει (Chrome/Edge) */
let instEv=null;const ib=document.getElementById('installBtn');
addEventListener('beforeinstallprompt',e=>{e.preventDefault();instEv=e;ib.hidden=false;});
addEventListener('appinstalled',()=>{ib.hidden=true;instEv=null;});
ib.addEventListener('click',async()=>{if(!instEv)return;const e=instEv;instEv=null;ib.hidden=true;try{await e.prompt();}catch(x){}});

/* ---------- 3.3: αληθινές εικόνες της εφαρμογής (ελληνικά/αγγλικά, υπολογιστής/κινητό) ---------- */
const narrow=matchMedia('(max-width: 600px)');let TAB='home';
const CAP={el:{},en:{}};
function lang(){return document.documentElement.lang==='en'?'en':'el';}
const darkQ=matchMedia('(prefers-color-scheme: dark)');
function dk(){return darkQ.matches&&document.documentElement.dataset.theme!=='light'?'d-':'';}
function updShots(){const l=lang(),D=dk();
  document.querySelectorAll('img[data-shot]').forEach(im=>{const m=im.dataset.m==='1';im.src='shots/'+D+(m?'m-':'')+l+'-'+im.dataset.shot+'.webp';});
  const ti=document.getElementById('tabImg');if(!ti)return;const m=narrow.matches;
  ti.src='shots/'+D+(m?'m-':'')+l+'-'+TAB+'.webp';ti.width=m?430:1440;ti.height=m?932:900;ti.closest('.stagebox').classList.toggle('m',m);
  const cap=document.getElementById('tabCap');const key='cp_'+TAB;cap.dataset.t=key;cap.textContent=(l==='en'?EN[key]:CAPEL[key])||'';
  ti.alt=cap.textContent;}
const CAPEL={cp_home:'Η αρχική: πόσες φωτογραφίες έχεις, αν είναι όλες ασφαλείς, και τα 5 κουμπιά που χρειάζεσαι.',
 cp_all:'Όλες οι φωτογραφίες και τα βίντεο, οι πιο πρόσφατες πρώτα, ανά μήνα.',
 cp_cal:'Ημερολόγιο: χρονιά → μήνας → μέρα. Κάθε χρονιά με μια φωτογραφία της.',
 cp_map:'Χάρτης: πού τραβήχτηκαν, από την τοποθεσία που έχει μέσα της κάθε φωτογραφία.',
 cp_similar:'Παρόμοιες: ίδια φωτογραφία σε άλλο μέγεθος ή ριπές. Η ⭐ είναι η καλύτερη· διαλέγεις εσύ.',
 cp_photo:'Μεγάλη προβολή, με ημερομηνία και μέρος. Με τα βελάκια πας στην επόμενη.',
 cp_start2:'Βήμα βήμα: «Πού είναι τώρα οι φωτογραφίες;» και η εφαρμογή σού λέει ακριβώς τι να κάνεις.'};
document.querySelectorAll('.tabs [role=tab]').forEach(b=>b.addEventListener('click',()=>{TAB=b.dataset.k;
  document.querySelectorAll('.tabs [role=tab]').forEach(x=>x.setAttribute('aria-selected',x===b));updShots();}));
document.querySelector('.tabs')?.addEventListener('keydown',e=>{if(!/Arrow(Left|Right)/.test(e.key))return;const bs=[...document.querySelectorAll('.tabs [role=tab]')];
  let i=bs.findIndex(x=>x.getAttribute('aria-selected')==='true');i=(i+(e.key==='ArrowRight'?1:-1)+bs.length)%bs.length;bs[i].focus();bs[i].click();});
document.querySelectorAll('.tabs [role=tab]').forEach(b=>b.tabIndex=b.getAttribute('aria-selected')==='true'?0:-1);
document.querySelector('.tabs')?.addEventListener('click',()=>document.querySelectorAll('.tabs [role=tab]').forEach(b=>b.tabIndex=b.getAttribute('aria-selected')==='true'?0:-1));
narrow.addEventListener('change',updShots);darkQ.addEventListener('change',()=>{updShots();turtle();});window.__ready=1;updShots();

/* ---------- ζωντανό: ψηφιακό αποτύπωμα (SHA-256) — αλλάζεις 1 byte, αλλάζει όλος ο κωδικός ---------- */
(async()=>{const out=document.getElementById('shaOut'),btn=document.getElementById('shaBtn');if(!out||!crypto.subtle)return;
  const data=new Uint8Array(4096);for(let i=0;i<data.length;i++)data[i]=(i*2654435761>>>13)&255;let prev='',flip=false;
  const hex=async()=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',data))].map(b=>b.toString(16).padStart(2,'0')).join('');
  const show=h=>{out.replaceChildren(...[...h].map((c,i)=>{if(prev&&prev[i]!==c){const b=document.createElement('b');b.textContent=c;return b;}return document.createTextNode(c);}));prev=h;};
  show(await hex());btn.addEventListener('click',async()=>{flip=!flip;data[2048]^=1;show(await hex());});})();

/* ---------- ζωντανό: οπτικό αποτύπωμα από αληθινές φωτογραφίες (img/dhash.json) ---------- */
(async()=>{const box=document.getElementById('dhash');if(!box)return;let D;try{D=await (await fetch('img/dhash.json')).json();}catch(e){return;}
  const mk=(tag,cls)=>{const e=document.createElement(tag);if(cls)e.className=cls;return e;};
  const rows=[['a',null],['b','a'],['c','a']];
  const draw=()=>{const en=lang()==='en';box.replaceChildren();
    const T={a:[en?'Original photo':'Αρχική φωτογραφία','1600×1067'],b:[en?'Same, from Viber':'Η ίδια, από Viber','800×533 · '+(en?'smaller':'μικρότερη')],c:[en?'Another sunset':'Άλλο ηλιοβασίλεμα',en?'another day (2021)':'άλλη μέρα (2021)']};
    for(const [k,ref] of rows){const r=mk('div','dhrow'),im=mk('img');im.src='img/dh-'+k+'.webp';im.alt='';im.loading='lazy';
      const g=mk('div','dgrid');for(const v of D[k].g){const i=mk('i');i.style.background='rgb('+v+','+v+','+v+')';g.append(i);}
      const bg=mk('div','bgrid');let diff=0;[...D[k].bits].forEach((b,i)=>{const x=mk('i');const d=ref&&b!==D[ref].bits[i];if(d)diff++;x.className=d?'x':(b==='1'?'on':'');bg.append(x);});
      const t=mk('div'),b=mk('b'),s=mk('span');b.textContent=T[k][0];s.textContent=T[k][1];t.append(b,s);
      if(ref){const v=mk('span',k==='b'?'ok':'no');v.style.display='block';v.style.fontWeight='700';
        v.textContent=k==='b'?(en?`✓ ${diff} of 64 differ → the same photo`:`✓ διαφέρουν ${diff} από τα 64 → η ίδια φωτογραφία`):(en?`✕ ${diff} of 64 differ + another day → kept apart`:`✕ διαφέρουν ${diff} από τα 64 + άλλη μέρα → μένει χωριστά`);t.append(v);}
      r.append(im,g,bg,t);box.append(r);}};
  draw();document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setTimeout(draw)));})();

/* ---------- «χελώνα» (Logo turtle graphics): η υπογραφή των Μνημών, ζωγραφίζεται ΜΙΑ φορά ---------- */
function turtle(){const c=document.getElementById('turtle');if(!c)return;const r=c.getBoundingClientRect(),dpr=Math.min(2,devicePixelRatio||1);
  if(!r.width)return;c.width=r.width*dpr;c.height=r.height*dpr;const g=c.getContext('2d');g.scale(dpr,dpr);g.clearRect(0,0,r.width,r.height);
  const dark=matchMedia('(prefers-color-scheme: dark)').matches&&document.documentElement.dataset.theme!=='light';
  // REPEAT 180 [FORWARD :n RIGHT 121 ; :n ← :n + 2.2] — η κλασική σπείρα της Logo, με το χρώμα να «κυλάει» από μωβ σε ροζ
  let x=r.width*.62,y=r.height*.5,a=0,n=4;const N=200,cols=[[99,102,241],[139,92,246],[236,72,153]];g.lineWidth=1.1;g.lineCap='round';
  for(let i=0;i<N;i++){const t=i/N,k=t<.5?0:1,u=t<.5?t*2:(t-.5)*2,cA=cols[k],cB=cols[k+1],col=cA.map((v,j)=>Math.round(v+(cB[j]-v)*u));
    const nx=x+Math.cos(a)*n,ny=y+Math.sin(a)*n;g.strokeStyle=`rgba(${col},${(dark?.34:.26)*(1-t*.55)})`;g.beginPath();g.moveTo(x,y);g.lineTo(nx,ny);g.stroke();
    x=nx;y=ny;a+=121*Math.PI/180;n+=2.2;}}
let tt;addEventListener('resize',()=>{clearTimeout(tt);tt=setTimeout(turtle,200);});turtle();

/* ---------- ο Βοηθός μέσα στη σελίδα (ίδιες ερωτήσεις με την εφαρμογή) ---------- */
function openHelp(q){if(!window.Voithos||!window.VOITHOS_ITEMS)return;const en=lang()==='en';
  const h=Voithos.open({lang:en?'en':'el',app:en?'Mnimes for Life':'Μνήμες για Πάντα',ph:{el:'Γράψε τι χρειάζεσαι, π.χ. «πώς φέρνω φωτογραφίες από το κινητό»',en:'Write what you need, e.g. «how do I bring photos from the phone»'},
    email:'ktsiminakis@gmail.com',items:VOITHOS_ITEMS.map(it=>it.go?Object.assign({},it,{go:Object.assign({},it.go,{fn:()=>{location.href='Mnimes.html?lang='+(en?'en':'el')+'#'+it.go.r;}})}):it)});
  if(q&&h&&h.search)h.search(q);return h;}
['helpOpen','helpOpen2'].forEach(id=>document.getElementById(id)?.addEventListener('click',()=>openHelp()));
document.querySelectorAll('.q[data-q]').forEach(b=>b.addEventListener('click',()=>openHelp(lang()==='en'?b.dataset.qen:b.dataset.q)));
if(start==='en')setLang('en');
