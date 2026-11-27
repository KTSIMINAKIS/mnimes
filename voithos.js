/* © 2026 Κωνσταντίνος Τσιμινάκης · Με επιφύλαξη παντός δικαιώματος
   «Βοηθός» — the same small helper for all the owner's apps (owner 2026-11-22: "a helper for all the apps, NOT AI").
   Questions and answers written by us, searched right here on the device: no internet, no AI, nothing is sent anywhere.
   It understands Greek, English and greeklish ("pos fernw fotografies"), with or without accents.
   Use: Voithos.open({ lang:'el'|'en', app:'Μνήμες', ph:{el,en} (example in the search box), items:[{q:{el,en}, a:{el:[…],en:[…]}, k:{el,en}, go?:{el,en,fn}}],
                       email:'…', top:[indexes of the first questions] }) */
(function () {
  'use strict';
  const G = { 'α': 'a', 'β': 'v', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'i', 'θ': 'th', 'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': 'x', 'ο': 'o', 'π': 'p', 'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't', 'υ': 'i', 'φ': 'f', 'χ': 'x', 'ψ': 'ps', 'ω': 'o' };
  // everything (Greek, greeklish, English) becomes one simple Latin "skeleton", so «φωτογραφίες», «fotografies» and «fwtografies» meet
  function skel(s) {
    s = String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    s = s.replace(/αυ/g, 'av').replace(/ευ/g, 'ev').replace(/ηυ/g, 'iv').replace(/ου/g, 'u').replace(/αι/g, 'e').replace(/ει|οι|υι/g, 'i').replace(/μπ/g, 'b').replace(/ντ/g, 'd').replace(/γκ|γγ/g, 'g');
    s = s.replace(/[α-ω]/g, c => G[c] || c);
    s = s.replace(/au(?=[aeiouybdgzlmnrv])/g, 'av').replace(/eu(?=[aeiouybdgzlmnrv])/g, 'ev').replace(/au/g, 'af').replace(/eu/g, 'ef').replace(/ou/g, 'u').replace(/ai/g, 'e').replace(/ei|oi|yi/g, 'i').replace(/mp/g, 'b').replace(/nt/g, 'd').replace(/gk|gg/g, 'g')
      .replace(/ch|kh|h(?=[aeiou])/g, 'x').replace(/ks|cs/g, 'x').replace(/8/g, 'th').replace(/3/g, 'x').replace(/w/g, 'o').replace(/[yh]/g, 'i')
      .replace(/b/g, 'v').replace(/c/g, 'k').replace(/q/g, 'k').replace(/(.)\1+/g, '$1');
    return s.replace(/[^a-z0-9]+/g, ' ').trim();
  }
  const STOP = new Set(['to', 'ta', 'ti', 'tin', 'tis', 'tu', 'tus', 'o', 'i', 'oi', 'kai', 'na', 'me', 'se', 'apo', 'gia', 'pos', 'pu', 'an', 'den', 'ena', 'mia', 'the', 'a', 'an', 'how', 'do', 'i', 'my', 'is', 'to', 'of', 'in', 'on', 'and', 'can', 'what', 'mu', 'su', 'ine', 'thelo']);
  const toks = s => skel(s).split(' ').filter(t => t.length > 1 && !STOP.has(t));
  function score(item, L, qt) {
    if (!item._ix) item._ix = {};
    if (!item._ix[L]) { const t = [item.q[L], ...(item.a[L] || []), item.k && item.k[L] || ''].join(' '); item._ix[L] = { q: toks(item.q[L]), all: toks(t) }; }
    const ix = item._ix[L]; let s = 0;
    // a word matches if one of ours starts with it; a word of 5+ letters may also differ in its ending (σβήσω / σβήνω, χώρο / χώρος)
    const pre = (a, b) => { let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return i; };
    const near = (w, t) => w.startsWith(t) || (t.length >= 4 && w.length >= 4 && pre(w, t) >= Math.max(4, Math.min(w.length, t.length) - 2));
    for (const t of qt) {
      if (ix.q.some(w => w.startsWith(t))) s += 4; else if (ix.q.some(w => near(w, t))) s += 3;
      else if (ix.all.some(w => w.startsWith(t))) s += 2; else if (ix.all.some(w => near(w, t))) s += 1.5;
      else if (t.length > 3 && ix.all.some(w => w.includes(t))) s += 1;
    }
    return s;
  }
  const el = (tag, at, ...kids) => { const e = document.createElement(tag); for (const [k, v] of Object.entries(at || {})) { if (k === 'style') e.style.cssText = v; else if (k.startsWith('on')) e[k] = v; else e.setAttribute(k, v); }
    for (const c of kids.flat()) if (c != null && c !== false) e.append(c.nodeType ? c : document.createTextNode(String(c))); return e; };
  const CSS = `#voithos *{box-sizing:border-box}#voithos{position:fixed;inset:0;z-index:2147483000;background:rgba(10,12,18,.55);display:flex;align-items:flex-end;justify-content:center;font:16px/1.5 Inter,"Segoe UI",system-ui,-apple-system,Roboto,sans-serif}
#voithos .vb{background:#fff;color:#0e1014;width:100%;max-width:640px;max-height:92vh;display:flex;flex-direction:column;border-radius:20px 20px 0 0;box-shadow:0 -10px 40px rgba(0,0,0,.25)}
@media (min-width:700px){#voithos{align-items:center}#voithos .vb{border-radius:20px}}
#voithos .vh{display:flex;align-items:center;gap:10px;padding:16px 18px 8px}#voithos .vh b{font-size:20px;flex:1}
#voithos .vx{border:0;background:#f1f2f5;border-radius:12px;width:40px;height:40px;font-size:20px;cursor:pointer;color:inherit}
#voithos input{display:block;width:calc(100% - 36px);max-width:none;min-height:0;margin:6px 18px 10px;padding:13px 14px;border:1px solid #d0d4dc;border-radius:14px;font:inherit;font-size:17px;background:#fff;color:inherit}
#voithos .vl{overflow:auto;padding:0 18px 8px}#voithos .vs{font-size:13px;color:#5f6672;text-transform:uppercase;letter-spacing:.04em;margin:8px 0 4px}
#voithos details{border:1px solid #e3e5ea;border-radius:14px;margin:8px 0;background:#fafbfc}#voithos summary{cursor:pointer;padding:12px 14px;font-weight:600;list-style:none}
#voithos summary::-webkit-details-marker{display:none}#voithos summary{font-size:17px;padding:14px 16px;display:flex;gap:10px;align-items:flex-start}#voithos summary:hover{background:rgba(99,102,241,.07);border-radius:14px}#voithos .vnum{flex:none;min-width:28px;height:28px;border-radius:50%;background:#6366f1;color:#fff;display:grid;place-items:center;font-size:14px;font-weight:700}#voithos details[open] .vnum{background:#16a34a}#voithos details[open]{border-color:#16a34a}#voithos .vsearch{display:block;margin:6px 18px 4px;background:none;border:0;color:#6366f1;font:inherit;font-weight:600;cursor:pointer;padding:6px 0;text-align:left}
#voithos ol,#voithos ul{margin:0 14px 12px 34px;padding:0}#voithos li{margin:4px 0}#voithos .vgo{margin:0 14px 12px;border:0;border-radius:12px;padding:10px 14px;font:inherit;font-weight:600;cursor:pointer;color:#fff;background:linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)}
#voithos .vf{padding:10px 18px 16px;font-size:14px;color:#5f6672;border-top:1px solid #e3e5ea}#voithos .vf a{color:#5b5bf0}
#voithos .vn{padding:14px;border-radius:14px;background:#fff7ed;color:#7c2d12;margin:8px 0}
@media (prefers-color-scheme:dark){#voithos .vb{background:#14161c;color:#f3f4f6}#voithos input{background:#0e1014;border-color:#353a46}#voithos .vx{background:#252832}
#voithos details{background:#1b1e26;border-color:#2a2e38}#voithos .vf{border-color:#2a2e38;color:#9aa1ad}#voithos .vs{color:#9aa1ad}#voithos .vn{background:#3a2412;color:#fed7aa}}`;
  function open(o) {
    const L = o.lang === 'en' ? 'en' : 'el', T = (en, gr) => L === 'en' ? en : gr, items = o.items || [];
    const old = document.getElementById('voithos'); if (old) old.remove();
    if (!document.getElementById('voithos-css')) document.head.append(el('style', { id: 'voithos-css' }, CSS));
    const list = el('div', { class: 'vl' });
    const input = el('input', { type: 'search', placeholder: o.ph && o.ph[L] || T('Write what you need…', 'Γράψε τι χρειάζεσαι…'), autocomplete: 'off', 'aria-label': T('Search', 'Αναζήτηση') });
    const close = () => { box.remove(); document.removeEventListener('keydown', esc); if (o.onClose) o.onClose(); };
    let num = 0; const card = (it, openIt) => { const steps = it.a[L] || []; num++; const d = el('details', openIt ? { open: '' } : {}, el('summary', {}, el('span', { class: 'vnum' }, String(num)), el('span', {}, it.q[L])),
        steps.length > 1 ? el('ol', {}, steps.map(s => el('li', {}, s))) : el('p', { style: 'margin:0 14px 12px' }, steps[0] || ''));
      if (it.go && typeof it.go.fn === 'function') d.append(el('button', { class: 'vgo', onclick: () => { close(); it.go.fn(); } }, '→ ' + it.go[L]));
      d.addEventListener('toggle', () => { if (!d.open) return; list.querySelectorAll('details[open]').forEach(x => { if (x !== d) x.open = false; }); setTimeout(() => d.scrollIntoView({ block: 'nearest', behavior: 'smooth' }), 30); });
      return d; };
    function show() {
      const q = input.value.trim(); list.replaceChildren(); num = 0;
      if (!q) { list.append(el('div', { class: 'vs' }, T('Choose your question', 'Διάλεξε την ερώτησή σου')));
        const top = (o.top && o.top.length ? o.top.map(i => items[i]) : items).filter(Boolean); top.forEach(it => list.append(card(it, false)));
        if (o.top && o.top.length < items.length) { list.append(el('div', { class: 'vs' }, T('More questions', 'Κι άλλες ερωτήσεις'))); items.filter(it => !top.includes(it)).forEach(it => list.append(card(it, false))); }
        return; }
      const qt = toks(q); const r = items.map(it => [it, score(it, L, qt)]).filter(x => x[1] > 0).sort((a, b) => b[1] - a[1]).slice(0, 8);
      if (!r.length) { list.append(el('div', { class: 'vn' }, T('I did not find an answer to that. Try other words (e.g. «phone», «delete», «map»), or write to us below.', 'Δεν βρήκα απάντηση σε αυτό. Δοκίμασε άλλες λέξεις (π.χ. «κινητό», «σβήσιμο», «χάρτης») ή γράψε μας παρακάτω.'))); return; }
      r.forEach(([it], i) => list.append(card(it, i === 0)));
    }
    let t = null; input.oninput = () => { clearTimeout(t); t = setTimeout(show, 120); };
    // the typing box is hidden: it appears only if the person asks for it
    input.style.display = 'none';
    const findBtn = el('button', { class: 'vsearch', onclick: () => { findBtn.style.display = 'none'; input.style.display = ''; input.focus(); } }, '🔎 ' + T('Can’t see your question? Search with words', 'Δεν βλέπεις την ερώτησή σου; Ψάξε με λέξεις'));
    const mail = o.email ? el('a', { href: 'mailto:' + o.email + '?subject=' + encodeURIComponent((o.app || '') + ' — ' + T('question', 'ερώτηση')) }, o.email) : null;
    const box = el('div', { id: 'voithos', role: 'dialog', 'aria-modal': 'true', 'aria-label': T('Helper', 'Βοηθός'), onclick: e => { if (e.target === box) close(); } },
      el('div', { class: 'vb' },
        el('div', { class: 'vh' }, el('b', {}, '🙋 ' + T('Helper', 'Βοηθός') + (o.app ? ' · ' + o.app : '')), el('button', { class: 'vx', 'aria-label': T('Close', 'Κλείσιμο'), onclick: close }, '✕')),
        list, findBtn, input,
        el('div', { class: 'vf' }, T('Answers written by the creator, found right here on your device — nothing is sent anywhere. ', 'Απαντήσεις γραμμένες από τον δημιουργό, που βρίσκονται εδώ στη συσκευή σου — δεν στέλνεται τίποτα πουθενά. '),
          mail ? [T('Not found? Write to ', 'Δεν το βρήκες; Γράψε στο '), mail] : null)));
    const esc = e => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', esc);
    document.body.append(box); show();
    return { close, search: q => { findBtn.style.display = 'none'; input.style.display = ''; input.value = q; show(); } };
  }
  window.Voithos = { open, skel, toks, score };
})();
