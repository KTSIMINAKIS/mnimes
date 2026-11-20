// © 2026 Κωνσταντίνος Τσιμινάκης · Με επιφύλαξη παντός δικαιώματος
// Μνήμες «Από κινητό»: this page runs on the PHONE. The computer shows a QR code with a pairing id and a secret key (in the
// part after #, which browsers never send to any server). The two meet through a tiny meeting point (only two short notes,
// sealed with that key), then the photos go phone → computer DIRECTLY over the home Wi-Fi (WebRTC, encrypted).
// Nothing on the phone is changed or deleted: files are only read. Every file is sent with its SHA-256 fingerprint, so the
// computer can prove it received exactly the same bytes.
'use strict';
if (window.top !== window.self) { document.documentElement.textContent = ''; throw new Error('framed'); }
const PAIR = 'https://mnimes-pair.ktsiminakis.workers.dev';
const $ = id => document.getElementById(id);
const q = new URLSearchParams(location.hash.slice(1));
const EN = (q.get('l') || (navigator.language || '').slice(0, 2)) === 'en';
const T = (en, el) => EN ? en : el;
const IMG = /\.(jpe?g|png|heic|heif|webp|gif|bmp|tiff?|dng|raw|arw|cr2|cr3|nef|orf|rw2|raf|srw|avif)$/i;
const VID = /\.(mp4|mov|m4v|3gp|3g2|avi|mkv|webm|mts|m2ts|wmv|mpg|mpeg)$/i;
const CHUNK = 64 * 1024, HIGH = 8 * 1024 * 1024, SMALL = 128 * 1024 * 1024;

// ---------- texts ----------
if (EN) {
  document.documentElement.lang = 'en'; document.title = 'Mnimes · From the phone';
  $('appName').textContent = 'Mnimes'; $('h1').textContent = 'Photos from the phone to the computer';
  $('pickDir').textContent = $('pickFolder').textContent = '📁 Choose a folder (e.g. DCIM)';
  $('pickFiles').textContent = '🖼️ Choose photos and videos';
  $('s1').innerHTML = '🔒 The photos go <b>directly</b> to your computer, encrypted. They are not uploaded to the internet.';
  $('s2').innerHTML = '📋 <b>Nothing is deleted</b> on the phone; files are only read.';
  $('s3').innerHTML = '📶 Phone and computer on the <b>same Wi-Fi</b>. Keep the screen on until it finishes.';
  $('foot').textContent = '© 2026 Konstantinos Tsiminakis · Created by Konstantinos Tsiminakis, son of Alexandros';
}
const status = (txt, cls) => { const s = $('status'); s.textContent = txt; s.className = 'status ' + (cls || ''); };
const hint = txt => { $('hint').textContent = txt || ''; };

// ---------- the sealed notes (AES-GCM with the key from the QR) ----------
const b64u = {
  enc: b => btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
  dec: s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)), c => c.charCodeAt(0))
};
const room = q.get('r') || '', keyRaw = q.get('k') || '';
async function key() { return crypto.subtle.importKey('raw', b64u.dec(keyRaw), 'AES-GCM', false, ['encrypt', 'decrypt']); }
async function seal(slot, obj) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: new TextEncoder().encode(room + '|' + slot) }, await key(), new TextEncoder().encode(JSON.stringify(obj)));
  return b64u.enc(iv) + '.' + b64u.enc(ct);
}
async function open(slot, s) {
  const [iv, ct] = s.split('.');
  const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64u.dec(iv), additionalData: new TextEncoder().encode(room + '|' + slot) }, await key(), b64u.dec(ct));
  return JSON.parse(new TextDecoder().decode(pt));
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ---------- SHA-256 in pieces (for videos of many GB; small files use the browser's own) ----------
const K = new Uint32Array([0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
 0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
 0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
 0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2]);
class Sha256 {
  constructor() { this.H = new Uint32Array([0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19]); this.buf = new Uint8Array(64); this.bl = 0; this.len = 0; this.w = new Uint32Array(64); }
  update(d) { let i = 0; this.len += d.length;
    if (this.bl) { const n = Math.min(64 - this.bl, d.length); this.buf.set(d.subarray(0, n), this.bl); this.bl += n; i = n; if (this.bl === 64) { this.block(this.buf, 0); this.bl = 0; } }
    for (; i + 64 <= d.length; i += 64) this.block(d, i); if (i < d.length) { this.buf.set(d.subarray(i), 0); this.bl = d.length - i; } }
  block(b, o) { const w = this.w; for (let t = 0; t < 16; t++) w[t] = (b[o + 4 * t] << 24) | (b[o + 4 * t + 1] << 16) | (b[o + 4 * t + 2] << 8) | b[o + 4 * t + 3];
    for (let t = 16; t < 64; t++) { const x = w[t - 15], y = w[t - 2]; const s0 = ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3); const s1 = ((y >>> 17) | (y << 15)) ^ ((y >>> 19) | (y << 13)) ^ (y >>> 10); w[t] = (w[t - 16] + s0 + w[t - 7] + s1) | 0; }
    let a = this.H[0], bb = this.H[1], c = this.H[2], d = this.H[3], e = this.H[4], f = this.H[5], g = this.H[6], h = this.H[7];
    for (let t = 0; t < 64; t++) { const S1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7)); const ch = (e & f) ^ (~e & g); const t1 = (h + S1 + ch + K[t] + w[t]) | 0;
      const S0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10)); const mj = (a & bb) ^ (a & c) ^ (bb & c); const t2 = (S0 + mj) | 0; h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = bb; bb = a; a = (t1 + t2) | 0; }
    const H = this.H; H[0] += a; H[1] += bb; H[2] += c; H[3] += d; H[4] += e; H[5] += f; H[6] += g; H[7] += h; }
  hex() { const L = this.len, bits = L * 8, p = new Uint8Array((this.bl < 56 ? 56 : 120) - this.bl + 8), n = p.length; p[0] = 0x80; const hi = Math.floor(bits / 4294967296), lo = bits >>> 0;
    p[n - 8] = hi >>> 24; p[n - 7] = hi >>> 16 & 255; p[n - 6] = hi >>> 8 & 255; p[n - 5] = hi & 255; p[n - 4] = lo >>> 24; p[n - 3] = lo >>> 16 & 255; p[n - 2] = lo >>> 8 & 255; p[n - 1] = lo & 255;
    this.update(p); this.len = L; return Array.from(this.H, x => (x >>> 0).toString(16).padStart(8, '0')).join(''); }
}
const hex = b => Array.from(new Uint8Array(b), x => x.toString(16).padStart(2, '0')).join('');

// ---------- keep the screen on while sending ----------
let lock = null;
async function keepAwake() { try { if ('wakeLock' in navigator && document.visibilityState === 'visible') lock = await navigator.wakeLock.request('screen'); } catch {} }
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && sending) keepAwake(); });

// ---------- connection ----------
let pc = null, dc = null, sending = false, files = [];
const fmt = n => n >= 1e9 ? (n / 1e9).toFixed(1) + ' GB' : (n / 1e6).toFixed(0) + ' MB';

async function connect() {
  if (!/^[A-Za-z0-9_-]{22,44}$/.test(room) || b64u.dec(keyRaw).length !== 32) {
    status(T('Open «Mnimes» on the computer and scan its QR code with this phone.', 'Άνοιξε τις «Μνήμες» στον υπολογιστή και σκάναρε το QR τους με αυτό το κινητό.'), 'bad'); return;
  }
  if (!window.RTCPeerConnection) { status(T('This browser cannot do it. Open the link with Chrome or Safari.', 'Αυτός ο browser δεν μπορεί. Άνοιξε τον σύνδεσμο με Chrome ή Safari.'), 'bad'); return; }
  let offer = null;
  for (let i = 0; i < 40 && !offer; i++) {
    try { const r = await fetch(PAIR + '/p/' + room + '/o', { cache: 'no-store' }); if (r.ok) offer = await open('o', await r.text()); } catch {}
    if (!offer) await sleep(1500);
  }
  if (!offer) { status(T('The computer cannot be found. Press «📱 From the phone» again on the computer and scan the new QR.', 'Δεν βρίσκω τον υπολογιστή. Πάτα ξανά «📱 Από κινητό» στον υπολογιστή και σκάναρε το νέο QR.'), 'bad'); return; }
  pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.cloudflare.com:3478' }] });
  pc.ondatachannel = e => { dc = e.channel; dc.binaryType = 'arraybuffer'; dc.bufferedAmountLowThreshold = 1024 * 1024; dc.onopen = ready; dc.onmessage = onMsg; dc.onclose = lost; };
  pc.onconnectionstatechange = () => { if (pc.connectionState === 'failed') lost(); };
  await pc.setRemoteDescription(offer);
  await pc.setLocalDescription(await pc.createAnswer());
  await gathered(pc);
  const r = await fetch(PAIR + '/p/' + room + '/a', { method: 'PUT', body: await seal('a', pc.localDescription.toJSON()) });
  if (!r.ok) { status(T('This QR code was already used. Press «📱 From the phone» again on the computer.', 'Αυτό το QR χρησιμοποιήθηκε ήδη. Πάτα ξανά «📱 Από κινητό» στον υπολογιστή.'), 'bad'); return; }
  status(T('Connecting…', 'Συνδέομαι…'));
  setTimeout(() => { if (!dc || dc.readyState !== 'open') hint(T('Taking long? Check that the phone is on the SAME Wi-Fi as the computer (not on mobile data).', 'Αργεί; Δες ότι το κινητό είναι στο ΙΔΙΟ Wi-Fi με τον υπολογιστή (όχι με δεδομένα κινητής).')); }, 12000);
}
function gathered(p) {
  return new Promise(res => { if (p.iceGatheringState === 'complete') return res();
    const t = setTimeout(res, 5000); p.addEventListener('icegatheringstatechange', () => { if (p.iceGatheringState === 'complete') { clearTimeout(t); res(); } }); });
}
function ready() {
  status(T('✅ Connected to the computer', '✅ Συνδέθηκε με τον υπολογιστή'), 'ok');
  hint(T('Now choose what to send. The best: the camera folder (DCIM), so everything comes.', 'Τώρα διάλεξε τι θα σταλεί. Το καλύτερο: τον φάκελο της κάμερας (DCIM), για να έρθουν όλα.'));
  if (window.showDirectoryPicker) $('pickDir').hidden = false;
  else if ('webkitdirectory' in $('inFolder')) $('pickFolder').hidden = false;
  $('pickFiles').hidden = false;
}
function lost() {
  if (done) return;
  status(T('The connection was cut. Press «📱 From the phone» again on the computer and scan the new QR. What was sent is kept.', 'Η σύνδεση κόπηκε. Πάτα ξανά «📱 Από κινητό» στον υπολογιστή και σκάναρε το νέο QR. Όσα στάλθηκαν μένουν.'), 'bad');
  sending = false; try { lock && lock.release(); } catch {}
}

// ---------- choosing ----------
const wanted = name => (IMG.test(name) || VID.test(name)) && !name.startsWith('.');
async function walk(dir, path, out) {
  for await (const [name, h] of dir.entries()) {
    if (name.startsWith('.')) continue;                      // hidden folders: thumbnails, trash
    if (h.kind === 'directory') { if (!/^(thumbnails|\.thumbnails|cache)$/i.test(name)) await walk(h, [...path, name], out); }
    else if (wanted(name)) out.push({ p: [...path, name], get: () => h.getFile() });
  }
}
$('pickDir').onclick = async () => {
  let d; try { d = await window.showDirectoryPicker({ mode: 'read' }); } catch { return; }
  status(T('Looking…', 'Ψάχνω…')); const out = []; await walk(d, [d.name], out); await chosen(out);
};
$('pickFolder').onclick = () => $('inFolder').click();
$('pickFiles').onclick = () => $('inFiles').click();
$('inFolder').onchange = e => chosen([...e.target.files].filter(f => wanted(f.name)).map(f => ({ p: (f.webkitRelativePath || f.name).split('/').filter(Boolean), get: async () => f })));
$('inFiles').onchange = e => chosen([...e.target.files].filter(f => wanted(f.name) || /^(image|video)\//.test(f.type)).map(f => ({ p: [T('Phone', 'Κινητό'), f.name], get: async () => f })));

async function chosen(list) {
  if (!list.length) { status(T('No photos or videos there. Choose another folder.', 'Δεν βρέθηκαν φωτογραφίες ή βίντεο εκεί. Διάλεξε άλλον φάκελο.'), 'bad'); return; }
  files = [];
  for (const x of list) { try { const f = await x.get(); files.push({ ...x, size: f.size, lm: f.lastModified }); } catch {} }
  const total = files.reduce((a, f) => a + f.size, 0);
  ['pickDir', 'pickFolder', 'pickFiles'].forEach(id => $(id).hidden = true);
  status(T(`Found ${files.length} files (${fmt(total)}). Sending…`, `Βρέθηκαν ${files.length} αρχεία (${fmt(total)}). Στέλνω…`), 'ok');
  hint(T('Keep this screen open. The computer decides what is new, copies it and checks every file.', 'Κράτα αυτή την οθόνη ανοιχτή. Ο υπολογιστής βλέπει ποια είναι νέα, τα αντιγράφει και ελέγχει κάθε αρχείο.'));
  $('progBox').hidden = false; prog(0, files.length, '');
  sending = true; keepAwake();
  const items = files.map((f, i) => ({ i, p: f.p, size: f.size, lm: f.lm }));
  for (let i = 0; i < items.length; i += 400) dc.send(JSON.stringify({ t: 'list', files: items.slice(i, i + 400), last: i + 400 >= items.length }));
}
function prog(n, of, note) { $('count').textContent = `${n} / ${of}`; $('barFill').style.width = (of ? Math.round(100 * n / of) : 0) + '%'; $('progNote').textContent = note || ''; }

// ---------- sending what the computer asks for (one file at a time, in pieces, with its fingerprint) ----------
let queue = Promise.resolve(), sentN = 0, done = false;
function onMsg(e) {
  let m; try { m = JSON.parse(e.data); } catch { return; }
  if (m.t === 'get' && Number.isInteger(m.i) && files[m.i]) queue = queue.then(() => sendFile(m.i, m.n)).catch(() => {});
  else if (m.t === 'prog') prog(m.done, m.of, m.note);
  else if (m.t === 'done') {
    done = true; sending = false; try { lock && lock.release(); } catch {}
    $('progBox').hidden = true;
    status(T('✅ Finished! You can close this page.', '✅ Τέλος! Μπορείς να κλείσεις αυτή τη σελίδα.'), 'ok');
    hint(m.note || '');
  }
}
async function room4(n) { while (dc.bufferedAmount > HIGH) await new Promise(r => { dc.onbufferedamountlow = r; }); }
async function sendFile(i, n) {
  const x = files[i]; const f = await x.get();
  dc.send(JSON.stringify({ t: 'hdr', n, size: f.size }));
  let h;
  if (f.size <= SMALL) {
    const buf = await f.arrayBuffer(); h = hex(await crypto.subtle.digest('SHA-256', buf));
    for (let o = 0; o < buf.byteLength; o += CHUNK) { await room4(); dc.send(buf.slice(o, o + CHUNK)); }
  } else {
    const hs = new Sha256(), r = f.stream().getReader();
    for (;;) { const { done: d, value } = await r.read(); if (d) break; hs.update(value);
      for (let o = 0; o < value.length; o += CHUNK) { await room4(); dc.send(value.slice(o, o + CHUNK)); } }
    h = hs.hex();
  }
  dc.send(JSON.stringify({ t: 'end', n, h }));
  sentN++;
}
connect().catch(e => status(T('Something went wrong: ', 'Κάτι πήγε στραβά: ') + (e && e.message || e), 'bad'));
