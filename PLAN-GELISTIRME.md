# GELİŞTİRME PLANI — Tek Koşuda Otomatik (2026-09-18)

## TUR 4 (2026-09-18)
Yapılan: (1) 48 soruluk banka ortak `soru-bankasi.js` dosyasına çıkarıldı
(tek kaynak); karisik-tekrar.html artık bunu import ediyor (kod tekrarı silindi,
16KB→7KB). (2) YENİ **sinav.html**: 20 soru / 20 dakika süreli LGS provası —
canlı geri sayım, son 1 dk kırmızı yanıp söner, süre bitince otomatik biter,
soru arası geri/ileri, sonunda konu bazlı doğru/yanlış analizi (zayıftan güçlüye
sıralı) + zayıf konulara sayfa linki. Yeni localStorage anahtarı `sinavGecmisi`
(mevcut okul_done*/karisikSkorlar dokunulmadı). index'e öncü kart, sw.js önbelleğe
(v2026-09-18b) ve sitemap'e eklendi. Dayanak: süreli deneme = sınav kaygısı ve
zaman yönetimi pratiği; hedefli geri bildirim = konuya dönüş.
Test: tarayıcıda tam akış (başlat→sayaç 20:00→19:59→20 soru→bitir), skor 14/20
bilerek verilen cevaplarla birebir eşleşti, konu analizi + linkler doğrulandı;
Python tag/matematik doğrulama + node --check geçti.

## TUR 3
Tespit: Soru bankası 24 soruda kaldı (konu başına 2); yanlış yapılan konu
bitiş ekranında söylenmiyor, öğrenci hangi sayfaya döneceğini bilmiyor.
Araştırma dayanağı aynı (retrieval + interleaving): daha büyük havuz =
her sette daha az tekrar; hedefli geri bildirim = konuya dönüş oranını artırır.

Adımlar (hepsi bu koşuda):
1. Banka 24→48 soru (her konuya +2; LGS tarzı, nedenli açıklamalar).
2. Bitiş ekranı: yanlış yapılan konular sayfa linkiyle listelenir.
3. Tarayıcı testi + ad-hoc doğrulama + commit + push + canlı kontrol.

## TUR 2 (aynı gün, ikinci analiz)
Tespit: PWA yok (telefona kurulamıyor/offline yok), sitemap/robots/404/canonical yok,
LGS geri sayımı yok, 1-carpanlar ve 5-ebob-ekok-secimi'nde interaktif quiz yok.
LGS 2027 tarihi: 13 Haziran 2027 (NotasyoN/kitapsec sayaçları).

Adımlar (hepsi bu koşuda):
1. PWA: manifest.webmanifest + sw.js (tüm sayfalar önbelleğe → OFFLINE çalışır)
   + tüm sayfalara kayıt scripti + apple-touch meta + ikon (Python ile PNG üretimi).
2. SEO: sitemap.xml, robots.txt, 404.html, tüm sayfalara canonical.
3. index: LGS 2027 geri sayım şeridi (13.06.2027).
4. 1-carpanlar + 5-ebob-ekok-secimi: Kendini Dene quiz (nedenli açıklamalar).
5. Tarayıcı testi + duman testi + commit + push + canlı doğrulama.


Araştırma dayanağı:
- Retrieval practice + spaced practice: retrievalpractice.org/SpacingGuide, edresearch.edu.au (2026 güncel)
- Interleaving (karışık soru): blok tekrarından üstün (McGraw Hill / Cepeda 2006-08)
- LGS soru dağılımı 2020-2025: Köklü 3, Denklemler+Eğim 3, Üslü 2, Cebir 2, Eşitsizlik 2, Üçgen 2, diğerleri 1 (goynukortaokulu.meb.k12.tr)

## Adımlar (hepsi bu koşuda)
1. **karisik-tekrar.html** (YENİ): 24 soruluk karışık soru bankası (12 konudan 2'şer),
   her açılışta karıştırılır, anında geri bildirim + yanlışa açıklama, skor localStorage'a
   yazılır; index'ten linklenir. → retrieval + interleaving.
2. **index.html**: konu listesine LGS soru sayısı rozetleri (öncelik sinyali) +
   üstte ilerleme çubuğu (bitirilen konu / 13).
3. **11 sayfaya kaynaklı gerçek-hayat kartı** (uslu, karekok, veri, olasilik, cebir,
   denklemler, esitsizlikler, ucgenler, benzerlik, donusum, cisimler): konuya özgü
   örnek + MEB kazanım kodu satırı. Script ile nav bloğunun önüne eklenir.
4. **Duman testi**: tag dengesi, nav tekilliği, quiz bütünlüğü, link kontrolü,
   tarayıcıda karisik-tekrar davranış testi.
5. **Yayın**: commit + push + canlı curl doğrulaması.

## Ölçüt
- Tüm sayfalarda Kaynak: satırı ≥1
- karisik-tekrar canlıda çalışır (tarayıcı testi kanıtlı)
- index rozetleri canlıda görünür

## TUR 5 (2026-09-18)
Yapılan: Soru bankası 48→72 (her 12 konuya +2 LGS tarzı soru, nedenli açıklamalı).
Sınav modu ve karışık tekrar aynı bankayı kullandığı için ikisi de daha çeşitli oldu.
Test: node ile 72 soru / 12 konu×6 / d-indeks sınır / tekrar şık / eksik alan kontrolü (0 hata);
tarayıcıda gerçek akış — başlat → soru render → 20 soru → bitiş ekranı 11 konu linki;
şık karıştırma sonrası doğru cevap eşleşmesi 20/20.
