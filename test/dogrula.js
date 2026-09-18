#!/usr/bin/env node
// Kalıcı doğrulama betiği. Çalıştır: node test/dogrula.js
// Hata varsa exit 1 + Türkçe mesaj; her şey temizse "CLEAN" yazar.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const KOK = path.join(__dirname, '..');
const hatalar = [];

function hataEkle(msg) {
  hatalar.push(msg);
}

function htmlDosyalari() {
  return fs.readdirSync(KOK)
    .filter(f => f.endsWith('.html'))
    .sort();
}

// ---------- a) + b) soru-bankasi.js bütünlüğü ve API fonksiyonları ----------
function soruBankasiKontrol() {
  const dosyaYolu = path.join(KOK, 'soru-bankasi.js');
  if (!fs.existsSync(dosyaYolu)) {
    hataEkle('soru-bankasi.js bulunamadı.');
    return;
  }
  const kod = fs.readFileSync(dosyaYolu, 'utf8');
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  try {
    vm.runInContext(kod, sandbox, { filename: 'soru-bankasi.js' });
  } catch (e) {
    hataEkle('soru-bankasi.js çalıştırılamadı: ' + e.message);
    return;
  }

  const bank = sandbox.window.SORU_BANKASI;
  if (!Array.isArray(bank) || bank.length === 0) {
    hataEkle('soru-bankasi.js: window.SORU_BANKASI dizisi boş veya yok.');
    return;
  }

  // Konu başına dağılım
  const konuSayim = {};
  const soruMetinleri = new Set();
  bank.forEach((q, i) => {
    const yer = 'soru #' + (i + 1);
    if (!q.k || typeof q.k !== 'string' || !q.k.trim()) {
      hataEkle(yer + ': konu (k) alanı boş.');
    } else {
      konuSayim[q.k] = (konuSayim[q.k] || 0) + 1;
    }
    if (!q.s || typeof q.s !== 'string' || !q.s.trim()) {
      hataEkle(yer + ': soru metni (s) boş.');
    } else {
      if (soruMetinleri.has(q.s)) {
        hataEkle('Tekrar eden soru metni: "' + q.s + '"');
      }
      soruMetinleri.add(q.s);
    }
    if (!Array.isArray(q.c) || q.c.length < 2) {
      hataEkle(yer + ': şıklar (c) eksik veya yetersiz.');
    } else {
      q.c.forEach((sik, si) => {
        if (!sik || typeof sik !== 'string' || !sik.trim()) {
          hataEkle(yer + ': ' + (si + 1) + '. şık boş.');
        }
      });
      const benzersiz = new Set(q.c);
      if (benzersiz.size !== q.c.length) {
        hataEkle(yer + ' (' + (q.s || '?') + '): aynı soruda tekrar eden şık var.');
      }
    }
    if (typeof q.d !== 'number' || q.d < 0 || q.d > 2 || !Number.isInteger(q.d)) {
      hataEkle(yer + ': doğru şık indeksi (d) 0-2 aralığında değil (d=' + q.d + ').');
    }
    if (!q.a || typeof q.a !== 'string' || !q.a.trim()) {
      hataEkle(yer + ': açıklama (a) boş.');
    }
  });

  const konular = Object.keys(konuSayim);
  const sayilar = konular.map(k => konuSayim[k]);
  const esitMi = sayilar.every(n => n === sayilar[0]);
  if (!esitMi) {
    hataEkle('Konular arasında eşit dağılım yok: ' + JSON.stringify(konuSayim));
  }

  // a2) Doğru şık dağılımı — hepsi aynı şıkta olmamalı (öğrenci ezberler)
  const sikSayim = { 0: 0, 1: 0, 2: 0 };
  bank.forEach(q => { sikSayim[q.d] = (sikSayim[q.d] || 0) + 1; });
  const enCok = Math.max(sikSayim[0], sikSayim[1], sikSayim[2]);
  if (enCok > bank.length * 0.5) {
    hataEkle('Doğru şıklar tek konumda toplanmış (' + JSON.stringify(sikSayim) +
      '). Öğrenci soruyu okumadan aynı şıkkı işaretleyebilir; şıkları karıştır.');
  }

  // b) API fonksiyonları
  const gerekliFonksiyonlar = ['soruId', 'kutuOku', 'kutuYaz', 'kutuyaEkle', 'kutudanCikar', 'kutuSorulari'];
  gerekliFonksiyonlar.forEach(fn => {
    if (typeof sandbox.window[fn] !== 'function') {
      hataEkle('soru-bankasi.js: window.' + fn + ' fonksiyonu eksik.');
    }
  });
}

// ---------- c) Tag dengesi ----------
function yorumlariTemizle(html) {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

function tagDengesiKontrol(dosyaAdi, html) {
  const temiz = yorumlariTemizle(html);
  ['div', 'script', 'style'].forEach(tag => {
    const acilis = (temiz.match(new RegExp('<' + tag + '(\\s[^>]*)?>', 'gi')) || []).length;
    const kapanis = (temiz.match(new RegExp('</' + tag + '\\s*>', 'gi')) || []).length;
    if (acilis !== kapanis) {
      hataEkle(dosyaAdi + ': <' + tag + '> etiketi dengesiz (açılış=' + acilis + ', kapanış=' + kapanis + ').');
    }
  });
}

// ---------- d) Öksüz sayfa kontrolü ----------
function oksuzSayfaKontrol(dosyalar) {
  const indexYolu = path.join(KOK, 'index.html');
  const indexIcerik = fs.readFileSync(indexYolu, 'utf8');
  const muaf = ['index.html', '404.html'];
  dosyalar.forEach(f => {
    if (muaf.includes(f)) return;
    const regex = new RegExp('href=["\']' + f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '["\']');
    if (!regex.test(indexIcerik)) {
      hataEkle(f + ': index.html içinde bu dosyaya link yok (öksüz sayfa).');
    }
  });
}

// ---------- e) Inline <script> JS geçerliliği ----------
function inlineScriptKontrol(dosyaAdi, html) {
  const temiz = html; // scriptler yorumdan etkilenmez, orijinali kullan
  const scriptRegex = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi;
  let m;
  let sira = 0;
  while ((m = scriptRegex.exec(temiz)) !== null) {
    sira++;
    const ozellik = m[1] || '';
    if (/\bsrc\s*=/.test(ozellik)) continue; // harici script
    if (/type\s*=\s*["'](?!text\/javascript|module)[^"']*["']/i.test(ozellik)) continue; // js olmayan (ör. json)
    const kod = m[2];
    if (!kod.trim()) continue;
    try {
      new vm.Script(kod, { filename: dosyaAdi + '#script' + sira });
    } catch (e) {
      hataEkle(dosyaAdi + ': ' + sira + '. inline <script> geçersiz JS içeriyor: ' + e.message);
    }
  }
}

// ---------- Çalıştır ----------
soruBankasiKontrol();

const dosyalar = htmlDosyalari();
dosyalar.forEach(f => {
  const html = fs.readFileSync(path.join(KOK, f), 'utf8');
  tagDengesiKontrol(f, html);
  inlineScriptKontrol(f, html);
});
oksuzSayfaKontrol(dosyalar);

if (hatalar.length > 0) {
  console.error('HATA (' + hatalar.length + ' adet):');
  hatalar.forEach(h => console.error(' - ' + h));
  process.exit(1);
} else {
  console.log('CLEAN');
  process.exit(0);
}
