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
 ch:'Found it useful?', cp:'Mnimes is free and will stay free. If you like, buy me a coffee.', cb:'Buy me a coffee',
 dh:'Thank you! ☕', dp:'Open your bank app → <b>IRIS</b> → send to mobile number, and enter:', cpy:'Copy', copied:'Copied ✓', dq:'Or scan the QR with your camera to get the number. (IRIS works with Greek banks.)', dc:'Close',
 foot:'Mnimes for Life 3.2.1 · The photos in the pictures are examples.', copy:'© 2026 Konstantinos Tsiminakis · All rights reserved', credit:'Created by Konstantinos Tsiminakis, son of Alexandros', terms:'Terms of use and licences',
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

/* Εγκατάσταση σαν εφαρμογή: το κουμπί φαίνεται ΜΟΝΟ όταν ο browser το επιτρέπει (Chrome/Edge) */
let instEv=null;const ib=document.getElementById('installBtn');
addEventListener('beforeinstallprompt',e=>{e.preventDefault();instEv=e;ib.hidden=false;});
addEventListener('appinstalled',()=>{ib.hidden=true;instEv=null;});
ib.addEventListener('click',async()=>{if(!instEv)return;const e=instEv;instEv=null;ib.hidden=true;try{await e.prompt();}catch(x){}});
