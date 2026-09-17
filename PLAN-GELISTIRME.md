# GELİŞTİRME PLANI — Tek Koşuda Otomatik (2026-09-18)

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
