/* Ασφάλεια: όχι μέσα σε πλαίσιο άλλης σελίδας */
if(window.top!==window.self){document.documentElement.textContent='';throw new Error('framed');}
const EN={
 name:'Mnimes for Life',
 whath:'What it does',
 w1:'<b>📥 Drop it all here.</b> One folder for everything: whatever you drop in goes by itself into Year / Month / Place, with a double check.',
 w2:'<b>📅 Calendar &amp; map.</b> Find every moment: when and where it was taken.',
 w3:'<b>🔍 Duplicates.</b> Finds only the 100% identical ones, always keeps one, and the others go to a bin — nothing is deleted without you.',
 w4:'<b>📱 From the phone, even without a cable.</b> With the Android app over Wi-Fi, and with “✔ Are they all on the computer?” you know when you can delete them from the phone.',
 w5:'<b>💽 On the drive itself.</b> Mnimes goes onto the drive: plug it into any computer, open it, and it is always the right library.',
 w6:'<b>🔄 Always in agreement.</b> Two computers with the same drive never spoil each other, and whatever you change by hand in the folder is fixed with one button.',
 h1:'All your photos, in order.',
 lead:'Drop all your photos and videos into one folder, and they go into order by themselves, by year, month and place. With a calendar and a map. Free, no account, and nothing is uploaded to the internet.',
 dl:'Download Mnimes for Life', online:'Open it online',
 meta:'One file · Windows, Mac, Linux · English &amp; Greek. “Online” also works on iPhone, for viewing.',
 watch:'See how it works', how:'How it works',
 s1:'<b>Download it and open it with Chrome or Edge</b><p>Double-click “Mnimes.html”. Nothing to install. (If another browser opens: right-click → Open with → Chrome.)</p>',
 s2:'<b>Choose the drive</b><p>e.g. the external one. A “Μνήμες” folder is made with the “Ρίξ’ τα όλα εδώ” (drop it all here) folder inside, and Mnimes is put on the drive too.</p>',
 s3:'<b>Drop it all in there</b><p>With File Explorer, as always: from a phone, a stick, an old drive. It sorts itself into Year/Month/Place, with a double check.</p>',
 safeh:'Built so nothing gets lost',
 f1:'<b>Copy only.</b> Same resolution, same quality, no compression, videos included.',
 f2:'<b>Triple check.</b> Every file is compared by digital fingerprint (SHA-256) after copying, again at the end, and before any deletion.',
 f3:'<b>Originals are deleted only if you ask</b>, and only after the copies are verified.',
 f4:'<b>Trash.</b> Anything you delete goes there first. It is gone for good only when you empty the trash.',
 f5:'<b>Duplicates and failing drives.</b> What is already there does not go in twice. If a drive shows errors, it stops.',
 f6:'<b>Private.</b> Your photos never leave your computer.',
 kh:'For the phone',
 kl:'The phone’s photos, <b>original with their location</b>, in two ways.',
 k1:'<b>📲 The «Mnimes for Life» app for Android</b><p>Plug a USB-C stick or a drive into the phone → “Put them on the stick”, with no computer. Or send them to the computer over Wi-Fi: in Mnimes “📥 Drop it all here” → “📱 From the phone without a cable” and scan the QR code. With “✔ Are they all on the computer?” you check before deleting them from the phone.</p>',
 k2:'<b>🔌 With a cable (Android and iPhone)</b><p>Connect the phone to the computer and copy the “DCIM” folder into “Ρίξ’ τα όλα εδώ” (drop it all here). For iPhone: Settings → Photos → “Keep Originals”.</p>',
 k3:'<b>Nothing is deleted</b><p>Nothing on the phone is changed or deleted. The drive the phone filled opens in Mnimes on the computer, with calendar and map.</p>',
 kdl:'Download the app (Android)',
 kn:'Android 8 or newer · free · 1.4 MB. If the phone asks about “install from unknown source”, tap “Allow” for this download only. SHA-256 fingerprint: 19936abddea3f851…',
 needh:'What you need',
 n1:'<td>Computer</td><td>Chrome or Edge (recent version): does everything, collecting, sorting, checking and deleting.</td>',
 n2:'<td>Safari, iPhone, Firefox</td><td>View only: calendar and map for the photos you choose. They cannot write to folders.</td>',
 n3:'<td>Internet</td><td>For the map, place names and capture dates. Only rounded coordinates are sent, never photos.</td>',
 ch:'Found it useful?', cp:'Mnimes is free and will stay free. If you like, buy me a coffee.', cb:'Buy me a coffee',
 dh:'Thank you! ☕', dp:'Open your bank app → <b>IRIS</b> → send to mobile number, and enter:', cpy:'Copy', copied:'Copied ✓', dq:'Or scan the QR with your camera to get the number. (IRIS works with Greek banks.)', dc:'Close',
 foot:'Mnimes for Life 3.0 · The photos in the pictures are examples.', copy:'© 2026 Konstantinos Tsiminakis · All rights reserved', credit:'Created by Konstantinos Tsiminakis, son of Alexandros', terms:'Terms of use and licences',
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
  window.SLIDE_LANG=l;setSlides();
  try{localStorage.setItem('lang',l);}catch(e){}}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
let start='el';try{start=new URLSearchParams(location.search).get('lang')||localStorage.getItem('lang')||((navigator.language||'el').toLowerCase().startsWith('el')?'el':'en');}catch(e){}
if(start==='en')setLang('en');
/* στο κινητό (στενή οθόνη): κάθετες διαφάνειες, που διαβάζονται άνετα */
function setSlides(){const l=window.SLIDE_LANG||document.documentElement.lang||'el',t=matchMedia('(max-width: 600px)').matches;document.getElementById('show').classList.toggle('tall',t);
  document.querySelectorAll('#show .frames img').forEach(im=>{im.src='slides/'+l+'_'+(t?'t':'')+im.dataset.n+'.jpg';im.width=t?720:1600;im.height=t?1280:900;});}
matchMedia('(max-width: 600px)').addEventListener('change',setSlides);
setSlides();
/* slideshow: αλλάζει μόνο του κάθε 3,5″ (όχι αν ο επισκέπτης έχει ζητήσει λιγότερη κίνηση) */
(()=>{const box=document.getElementById('show'),ims=[...box.querySelectorAll('.frames img')],dots=[...box.querySelectorAll('.sdots button')];
  let i=0,t=null,hover=false;const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const go=k=>{i=(k+ims.length)%ims.length;ims.forEach((im,j)=>im.classList.toggle('on',j===i));dots.forEach((d,j)=>{d.classList.toggle('on',j===i);d.setAttribute('aria-current',j===i);});
    const nx=ims[(i+1)%ims.length];if(nx.loading==='lazy')nx.loading='eager';};
  const play=()=>{clearInterval(t);if(!calm)t=setInterval(()=>{if(!hover&&!document.hidden)go(i+1);},3500);};
  box.querySelector('.prev').onclick=()=>{go(i-1);play();};box.querySelector('.next').onclick=()=>{go(i+1);play();};
  dots.forEach((d,j)=>d.onclick=()=>{go(j);play();});
  box.addEventListener('mouseenter',()=>hover=true);box.addEventListener('mouseleave',()=>hover=false);
  let x0=null;box.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
  box.addEventListener('touchend',e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>40){go(i+(dx<0?1:-1));play();}});
  go(0);play();})();
const dlg=document.getElementById('coffee');
document.getElementById('coffeeBtn').addEventListener('click',()=>{if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','');});
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});
document.getElementById('copyBtn').addEventListener('click',async e=>{const b=e.currentTarget,en=document.documentElement.lang==='en';
  try{await navigator.clipboard.writeText('6936324466');b.textContent=en?EN.copied:'Αντιγράφηκε ✓';}
  catch(x){const r=document.createRange();r.selectNodeContents(document.getElementById('phoneNum'));const s=getSelection();s.removeAllRanges();s.addRange(r);}});
