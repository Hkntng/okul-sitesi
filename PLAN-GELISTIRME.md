# GELİŞTİRME PLANI — Tek Koşuda Otomatik (2026-09-18)

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
