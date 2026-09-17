# 8. Sınıf – Sayılar ve İşlemler: Hayattan Kaynaklı Örnek Havuzu

> Hedef: Diyarbakır / Dicle köy ortaokulu 8. sınıf öğrencisi. Telefonda okunacak.
> Kural: Her örnekte gerçek kaynak var (URL açılıp doğrulandı, Eylül 2026). Uydurma örnek yok.
> Not: Örnek içindeki "senin tarlan / senin telefonun" gibi kısımlar çocuğu içine çekmek için kurgu; SAYILAR ve FORMÜLLER kaynaktan.

---

## KONU 1 — ÜSLÜ İFADELER (M.8.1.2.1 – M.8.1.2.5)

### 1. Ayran mayası bir gecede nasıl bozuluyor? (Bakteri bölünmesi)
- **Durum:** Annen ayranı dışarıda unuttu. Sabah ekşimiş. Neden bu kadar hızlı? Bakteriler bölünerek çoğalır: 1 iken 2, 2 iken 4 olur. En çok incelenen bakteri *E. coli*, uygun sıcaklıkta her 20 dakikada bir ikiye bölünür.
- **Matematik nerede:** (M.8.1.2.1 – tam sayıların kuvvetleri)
  - 1 saat = 3 bölünme → 2³ = 8 bakteri
  - 6 saat = 18 bölünme → 2¹⁸ = 262.144 bakteri
  - 1 gece (12 saat) = 36 bölünme → 2³⁶ ≈ 68 milyar bakteri
  - Her bölünme sayıyı toplamıyor, **çarpıyor**. Bu yüzden 2·36 = 72 değil, 2³⁶ yazıyoruz.
- **Neden önemli / olmasa ne olurdu:** "2×36 = 72 bakteri" diye düşünsen "bir gece dursa ne olur" dersin. Üs olmadan bozulma hızını tahmin edemezsin; buzdolabının neden şart olduğunu anlayamazsın.
- **Kaynak:** BioNumbers (Harvard), "Minimal generation time – E. coli: 20 min" (Sezonov ve ark., J Bacteriol 2007) — https://bionumbers.hms.harvard.edu/bionumber.aspx?id=103514&ver=8
- **Mini soru:** 2 saatte kaç bölünme olur, 1 bakteri kaç olur? → 6 bölünme, 2⁶ = 64.

### 2. Ekmek hamuru neden 2 saatte kabarır? (Maya)
- **Durum:** Tandır ekmeği için hamura maya kattınız. Maya bir mantardır; o da bölünerek çoğalır ama bakteriden yavaş: her 90–120 dakikada bir ikiye katlanır.
- **Matematik nerede:** (M.8.1.2.1, M.8.1.2.2)
  - 100 dakikada bir katlansın: 5 saat = 300 dk = 3 katlanma → 2³ = 8 kat.
  - Bakteri aynı sürede 15 kez katlanır → 2¹⁵ = 32.768 kat.
  - Karşılaştırma: 2¹⁵ ÷ 2³ = 2¹² = 4.096. (Üsleri çıkarıyoruz, bölmüyoruz.)
- **Neden önemli / olmasa ne olurdu:** Aynı "ikiye katlanma" kuralı ama süre farklı → sonuç 4.000 kat farklı. Üs kuralı olmadan "ikisi de katlanıyor, aynı iştir" dersin.
- **Kaynak:** BioNumbers, "Typical population doubling time – S. cerevisiae: 90–120 min" — https://bionumbers.hms.harvard.edu/bionumber.aspx?s=n&v=1&id=110545
- **Mini soru:** 2⁷ ÷ 2⁴ kaçtır? → 2³ = 8.

### 3. Bir kâğıdı 42 kez katlasan Ay'a ulaşır mı?
- **Durum:** Defter yaprağını ikiye katla, sonra bir daha... 7-8 kattan sonra katlanmaz. Ama düşün: her katlamada kalınlık ikiye katlanıyor. Bilim dergisi hesapladı: 42 katlama Ay'a (384.000 km) yetiyor.
- **Matematik nerede:** (M.8.1.2.1, M.8.1.2.5) Kâğıt kalınlığı ≈ 0,1 mm = 10⁻⁴ m.
  - 10 katlama: 2¹⁰ = 1.024 → 1.024 × 0,1 mm ≈ 10 cm
  - 20 katlama: 2²⁰ ≈ 10⁶ → 100 m
  - 42 katlama: 2⁴² ≈ 4,4 × 10¹² → 4,4 × 10¹² × 10⁻⁴ m = 4,4 × 10⁸ m = 440.000 km > 384.000 km ✔
- **Neden önemli / olmasa ne olurdu:** "42 kere katlasam 42 kat kalınlaşır" mantığı 4 mm verir. Gerçek cevap Ay mesafesi. Üs, sezgimizin yanıldığı yerde bizi kurtarır.
- **Kaynak:** Scientific American, "How Many Paper Folds Would Get You to the Moon?" — https://www.scientificamerican.com/article/how-many-paper-folds-would-get-you-to-the-moon/
- **Mini soru:** 2¹⁰ yaklaşık kaçtır? → 1.024 (yaklaşık 10³ = 1.000).

### 4. WhatsApp "iletme" sınırı neden 5 kişi?
- **Durum:** Köy grubuna bir "yarın okul tatil" mesajı geldi, yalan çıktı. Herkes 5 kişiye iletse kaç kişiye ulaşır? WhatsApp bu yüzden "en fazla 5 sohbete ilet" sınırı koydu; sonra çok iletilen mesajları 1 sohbete indirdi.
- **Matematik nerede:** (M.8.1.2.1, M.8.1.2.5)
  - 1. adım 5¹ = 5, 2. adım 5² = 25, 3. adım 5³ = 125, 5. adım 5⁵ = 3.125
  - 10. adım: 5¹⁰ = 9.765.625 ≈ 9,8 × 10⁶ kişi. On adımda neredeyse 10 milyon.
  - Sınır 20 olsaydı: 20⁵ = 3.200.000 — sadece 5 adımda.
- **Neden önemli / olmasa ne olurdu:** Sınırı 20'den 5'e indirmek "4 kat azaltma" değil; 5. adımda 3,2 milyon yerine 3 bin demek (1.000 kat fark). Üs kavramı olmadan bu kararın ne kadar büyük olduğunu göremezsin.
- **Kaynak:** WhatsApp Blog, "More changes to forwarding" (2018, 5 sohbet sınırı) — https://blog.whatsapp.com/more-changes-to-forwarding ; "Keeping WhatsApp Personal and Private" (2020, 1 sohbet sınırı) — https://blog.whatsapp.com/Keeping-WhatsApp-Personal-and-Private
- **Mini soru:** Herkes 3 kişiye iletse 4. adımda kaç kişi? → 3⁴ = 81.

### 5. Telefonun 128 GB'ı kaç fotoğraf alır?
- **Durum:** Galaxy A17 kutusunda "128 GB" yazıyor. Ama ayarlara girince "kullanılabilir 105,8 GB" görünüyor. GB ne demek? 1 GB = 1.000.000.000 bayt = 10⁹ bayt.
- **Matematik nerede:** (M.8.1.2.3, M.8.1.2.5 – 10'un kuvvetleri, bilimsel gösterim)
  - 128 GB = 128 × 10⁹ = 1,28 × 10¹¹ bayt
  - Bir fotoğraf ≈ 3 MB = 3 × 10⁶ bayt
  - 1,28 × 10¹¹ ÷ (3 × 10⁶) ≈ 0,43 × 10⁵ ≈ 43.000 fotoğraf
  - Kullanılabilir 105,8 GB ile ≈ 35.000 fotoğraf.
  - KB → MB → GB → TB: her basamak ×10³. (Bilgisayar bazen 2¹⁰ = 1.024 kullanır; bu yüzden "128 GB" telefonda biraz eksik görünür.)
- **Neden önemli / olmasa ne olurdu:** 128.000.000.000 gibi sayıyı sıfır sayarak karşılaştıramazsın; 10'un kuvveti ile "GB mi MB mi, 1.000 kat mı" bir bakışta görünür.
- **Kaynak:** Samsung Türkiye, Galaxy A17 teknik özellikler (Depolama 128 GB, kullanılabilir 105,8 GB) — https://www.samsung.com/tr/smartphones/galaxy-a/galaxy-a17-black-128gb-sm-a175fzkbtur/ ; Wikipedia "Gigabyte" (GB = 10⁹, GiB = 2³⁰) — https://en.wikipedia.org/wiki/Gigabyte
- **Mini soru:** 2 GB kaç MB? → 2 × 10⁹ ÷ 10⁶ = 2 × 10³ = 2.000 MB.

### 6. Bilgisayar neden 0 ve 1 ile 256 rengi biliyor? (Bit ve bayt)
- **Durum:** Telefon sadece "açık/kapalı" (1/0) bilir. Buna bit denir. 8 bit yan yana = 1 bayt. Bir bayt kaç farklı şey anlatabilir?
- **Matematik nerede:** (M.8.1.2.1, M.8.1.2.2)
  - 1 bit: 2 durum. 2 bit: 2² = 4. 3 bit: 2³ = 8.
  - 8 bit: 2⁸ = 256 farklı değer (0'dan 255'e). Bu yüzden renk kodları 0–255 arasında.
  - 16 bit: 2¹⁶ = 65.536. 2⁸ × 2⁸ = 2¹⁶ (üsler toplanır).
- **Neden önemli / olmasa ne olurdu:** 8 bit "8 durum" değil "256 durum". Bir bit eklemek sayıyı 1 artırmıyor, **ikiye katlıyor**. Bu yüzden 64-bit telefon 32-bit'ten "2 kat" değil, 2³² ≈ 4 milyar kat büyük sayıları tutar.
- **Kaynak:** Simple English Wikipedia, "Byte" (8 bit = 1 bayt, 256 değer) — https://simple.wikipedia.org/wiki/Byte
- **Mini soru:** 4 bit ile kaç farklı sayı yazılır? → 2⁴ = 16.

### 7. Türkiye'nin nüfusu bilimsel gösterimle
- **Durum:** TÜİK açıkladı: Türkiye 85.664.944 kişi, Diyarbakır 1.833.684 kişi. Bu sayıları telefonda okumak bile zor. Bilim insanları kısaltır.
- **Matematik nerede:** (M.8.1.2.5 – bilimsel gösterim ve karşılaştırma)
  - 85.664.944 ≈ 8,57 × 10⁷
  - 1.833.684 ≈ 1,83 × 10⁶
  - Oran: (8,57 × 10⁷) ÷ (1,83 × 10⁶) ≈ 4,7 × 10¹ ≈ 47. Yani Türkiye, Diyarbakır'ın yaklaşık 47 katı.
  - Üs 7 ile üs 6 arasındaki fark → hemen "10 kat civarı" olduğunu söyler.
- **Neden önemli / olmasa ne olurdu:** Sıfırları saymadan büyüklüğü karşılaştırmak için. 10⁷ mi 10⁶ mı → hangisi büyük anında görülür.
- **Kaynak:** Anadolu Ajansı, "Türkiye'nin nüfusu 292 bin 567 kişi artarak 85 milyon 664 bin 944 oldu" (6 Şubat 2025, TÜİK ADNKS 2024; il tablosunda Diyarbakır 1.833.684) — https://www.aa.com.tr/tr/ekonomi/turkiyenin-nufusu-292-bin-567-kisi-artarak-85-milyon-664-bin-944-oldu/3473437
- **Mini soru:** 1.833.684 sayısını bilimsel gösterimle yaz. → ≈ 1,83 × 10⁶.

### 8. Güneş ışığı sana 8 dakikada geliyor
- **Durum:** Tarlada güneşi görüyorsun. Aslında 8 dakika önceki güneşi görüyorsun! Işık hızı 299.792.458 m/s, Güneş 150 milyon km uzakta.
- **Matematik nerede:** (M.8.1.2.5 – çok büyük sayılarla işlem)
  - Işık hızı ≈ 3 × 10⁸ m/s
  - Uzaklık = 150.000.000 km = 1,5 × 10⁸ km = 1,5 × 10¹¹ m
  - Süre = (1,5 × 10¹¹) ÷ (3 × 10⁸) = 0,5 × 10³ = 500 saniye ≈ 8 dakika 20 saniye
- **Neden önemli / olmasa ne olurdu:** 150.000.000.000 ÷ 299.792.458 işlemini elle yapmak eziyet. Bilimsel gösterimde üsleri çıkar (11 − 8 = 3), sayıları böl (1,5 ÷ 3) → bitti.
- **Kaynak:** Wikipedia, "Speed of light" (299 792 458 m/s, tanım gereği tam) — https://en.wikipedia.org/wiki/Speed_of_light ; NASA Science, "Our Sun: Facts" (150 million km) — https://science.nasa.gov/sun/facts/
- **Mini soru:** (6 × 10⁹) ÷ (2 × 10⁴) kaç? → 3 × 10⁵.

### 9. Deprem 7,7 ile 6,7 arasında "1 fark" mı var? (Logaritmik ölçek)
- **Durum:** 6 Şubat 2023'te Pazarcık'ta 7,7, Elbistan'da 7,6 büyüklüğünde deprem oldu. Diyarbakır'da da binalar yıkıldı. Haberde "6,7 artçı" da geçti. 7,7 ile 6,7 arasında sadece 1 fark var gibi görünüyor ama öyle değil.
- **Matematik nerede:** (M.8.1.2.1, M.8.1.2.2) Deprem ölçeği 10'un kuvvetiyle çalışır:
  - Büyüklük 1 artınca yer sarsıntısı 10¹ = 10 kat, açığa çıkan enerji ≈ 32 kat artar.
  - 7,7 − 5,7 = 2 → sarsıntı 10² = 100 kat, enerji 32² ≈ 1.000 kat.
  - 7,7 − 4,7 = 3 → enerji 32³ ≈ 32.768 kat. Yani bir 7,7 depremi ≈ 33 bin tane 4,7 deprem.
- **Neden önemli / olmasa ne olurdu:** "5 ile 7 arasında az fark var" dersen binayı ona göre yaparsın. Ölçek üslü olduğu için 2 birim = 1.000 kat enerji. Bu, deprem yönetmeliğinin neden sert olduğunun cevabı.
- **Kaynak:** USGS, "Earthquake Magnitude, Energy Release, and Shaking Intensity" (10× amplitude, ~32× energy per unit) — https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity ; AFAD, "06 Şubat 2023 Pazarcık Mw 7.7 – Elbistan Mw 7.6 Ön Değerlendirme Raporu" — https://deprem.afad.gov.tr/assets/pdf/Kahramanmaras%20%20Depremleri_%20On%20Degerlendirme%20Raporu.pdf
- **Mini soru:** Büyüklük 6 deprem, büyüklük 4'ün kaç katı sarsar? → 10² = 100 kat.

### 10. Virüs ne kadar küçük? (Negatif üs)
- **Durum:** Korona virüsü elektron mikroskobuyla ölçüldü: çapı yaklaşık 60–140 nanometre. Nanometre = metrenin milyarda biri. Gözle görmek imkânsız; bu yüzden maske ve el yıkama.
- **Matematik nerede:** (M.8.1.2.1 – negatif üs, M.8.1.2.5)
  - 1 nm = 10⁻⁹ m. Virüs ≈ 100 nm = 100 × 10⁻⁹ = 10² × 10⁻⁹ = 10⁻⁷ m = 0,0000001 m
  - 1 mm = 10⁻³ m. Yan yana kaç virüs 1 mm eder? 10⁻³ ÷ 10⁻⁷ = 10⁴ = 10.000 virüs.
  - Negatif üs "eksi sayı" değil, "1 bölü" demek: 10⁻⁷ = 1/10.000.000.
- **Neden önemli / olmasa ne olurdu:** 0,0000001 yazarken sıfır sayısını şaşırırsın; 10⁻⁷ deyince şaşırmazsın. Küçük şeyleri karşılaştırmak (virüs ~10⁻⁷, bakteri ~10⁻⁶, saç ~10⁻⁴) negatif üsle kolay.
- **Kaynak:** Bar-On ve ark., "SARS-CoV-2 (COVID-19) by the numbers", eLife 2020 (PMC7224694; çap 60–140 nm, Zhu ve ark. 2020'den) — https://pmc.ncbi.nlm.nih.gov/articles/PMC7224694/
- **Mini soru:** 10⁻³ × 10⁻⁴ = ? → 10⁻⁷.

### 11. Atatürk Barajı'nda ne kadar su var? (GAP)
- **Durum:** GAP'ın kalbi Atatürk Barajı, Fırat üzerinde. Haberde "48,7 milyar metreküp su" yazıyor. Köydeki su deposu diyelim 10 m³. Barajdaki su kaç köy deposu eder?
- **Matematik nerede:** (M.8.1.2.5)
  - 48,7 milyar = 48.700.000.000 = 4,87 × 10¹⁰ m³
  - Depo 10 m³ = 10¹ m³
  - 4,87 × 10¹⁰ ÷ 10¹ = 4,87 × 10⁹ ≈ 4,9 milyar depo.
  - Türkiye'nin depolama kapasitesinin %26'sı bu baraj → toplam ≈ 4,87 × 10¹⁰ ÷ 0,26 ≈ 1,9 × 10¹¹ m³.
- **Neden önemli / olmasa ne olurdu:** Milyar, trilyon derken kafan karışır; 10¹⁰ ile 10¹¹ dediğinde "10 kat" hemen görünür. Su planlaması (kaç yıl sulama yeter) bu büyüklüklerle yapılır.
- **Kaynak:** Anadolu Ajansı, "Ekonomiye yıllık 1,7 milyar dolar katkı sağlayan Atatürk Barajı 32 yaşında" (48,7 milyar m³) — https://aa.com.tr/tr/ekonomi/ekonomiye-yillik-1-7-milyar-dolar-katki-saglayan-ataturk-baraji-32-yasinda/3284322
- **Mini soru:** 48,7 milyar sayısını bilimsel gösterimle yaz. → 4,87 × 10¹⁰.

### 12. Satranç tahtası ve buğday: 2⁶⁴ − 1
- **Durum:** Eski bir hikâye: Satrancı bulan bilge, kraldan ödül olarak "1. kareye 1 buğday, 2. kareye 2, 3. kareye 4... her karede iki katı" ister. Kral güler, "az istedin" der. 64 kare dolunca dünyanın bin yıllık buğdayı yetmez.
- **Matematik nerede:** (M.8.1.2.1, M.8.1.2.5)
  - Kare n'deki buğday: 2ⁿ⁻¹. 10. karede 2⁹ = 512. 21. karede 2²⁰ ≈ 1 milyon. 41. karede 2⁴⁰ ≈ 1 trilyon.
  - Toplam = 2⁶⁴ − 1 = 18.446.744.073.709.551.615 ≈ 1,8 × 10¹⁹ tane.
  - İlk 32 kare (tahtanın yarısı) sadece 2³² − 1 ≈ 4,3 milyar. İkinci yarı, ilkinin 4 milyar katı!
- **Neden önemli / olmasa ne olurdu:** Kral üs bilmediği için kandı. "Her adımda iki kat" küçük görünür ama 64 adımda 10¹⁹'a çıkar. Faiz, borç, salgın hep aynı mantık.
- **Kaynak:** Wikipedia, "Wheat and chessboard problem" (2⁶⁴ − 1 = 18.446.744.073.709.551.615) — https://en.wikipedia.org/wiki/Wheat_and_chessboard_problem
- **Mini soru:** 5. karede kaç buğday var? → 2⁴ = 16.

### 13. Türkiye 2035'te 120 bin megavat güneş+rüzgâr: kaç panel?
- **Durum:** Köydeki damlarda güneş paneli çoğalıyor. Enerji Bakanlığı 2035 hedefi: güneş + rüzgârda 120.000 MW kurulu güç. Bir çatı paneli 400 W. Kaç panel lazım (hepsi güneş olsa)?
- **Matematik nerede:** (M.8.1.2.3, M.8.1.2.5)
  - 1 MW = 10⁶ W. 120.000 MW = 1,2 × 10⁵ × 10⁶ = 1,2 × 10¹¹ W
  - Bir panel 400 W = 4 × 10² W
  - Panel sayısı = 1,2 × 10¹¹ ÷ (4 × 10²) = 0,3 × 10⁹ = 3 × 10⁸ = 300 milyon panel.
  - Türkiye nüfusu 8,6 × 10⁷ → kişi başı ≈ 3,5 panel.
- **Neden önemli / olmasa ne olurdu:** W, kW, MW, GW hepsi 10³ basamak. Üs olmadan "120 bin MW" ile "400 W" aynı cümlede karşılaştırılamaz; hedefin büyüklüğü anlaşılmaz.
- **Kaynak:** T.C. Enerji ve Tabii Kaynaklar Bakanlığı, "Yenilenebilir Enerjide 2035 Yol Haritası" (120 bin MW hedefi) — https://enerji.gov.tr/haber-detay?id=21380 ; Türksan Enerji, TommaTech 400 W monokristal panel ürün sayfası — https://www.turksanenerji.com/urun/400-watt-400w-black-monokristal-gunes-paneli-tommatech/
- **Mini soru:** 5 MW kaç W? → 5 × 10⁶ W.

### Üslü İfadeler – Sık yapılan 3 hata
1. **2⁵ = 10 sanmak.** Üs çarpma değil, tekrarlı çarpma: 2⁵ = 2·2·2·2·2 = 32. (Bakteri örneğini hatırla.)
2. **10⁻³'ü "eksi bin" sanmak.** Negatif üs "1 bölü" demek: 10⁻³ = 1/1000 = 0,001. Virüs küçük, ama negatif değil.
3. **Bilimsel gösterimde virgülü yanlış koymak.** Katsayı 1 ile 10 arasında olmalı: 48,7 × 10⁹ değil, 4,87 × 10¹⁰.

**Bir cümlelik özet:** Üs, "kaç kez katlandı"yı sayar; katlanan şeyler (bakteri, mesaj, para, deprem enerjisi) toplamaz çarpar, bu yüzden sezgimizin yanıldığı yerde bize doğru büyüklüğü gösterir.

---

## KONU 2 — KAREKÖKLÜ İFADELER (M.8.1.3.1 – M.8.1.3.8)

### 1. Bir dönüm kare tarlanın kenarı kaç metre?
- **Durum:** Baban "bir dönüm" tarla aldı. Dönüm = 1.000 m². Tarla kare olsa bir kenarı kaç metre? Etrafına tel çekmek için lazım.
- **Matematik nerede:** (M.8.1.3.1, M.8.1.3.2, M.8.1.3.3)
  - Kenar = √1000.
  - 31² = 961, 32² = 1.024 → 31 < √1000 < 32. Yaklaşık 31,6 m.
  - a√b yazımı: √1000 = √(100 · 10) = 10√10.
  - Çevre = 4 × 31,6 ≈ 126 m tel.
  - Eski dönüm 918 m² idi: kenarı 30,3 m (kaynakta 30,31 × 30,3 m) → 30² = 900 ✔ mantıklı.
- **Neden önemli / olmasa ne olurdu:** Alan biliniyor, kenar bilinmiyor → karekök. Karekök olmadan 126 m tel mi 200 m tel mi alacağını bilemezsin.
- **Kaynak:** Vikipedi, "Dönüm" (1.000 m²; eski dönüm 30,31 × 30,3 m = 918 m²) — https://tr.wikipedia.org/wiki/D%C3%B6n%C3%BCm
- **Mini soru:** 4 dönüm = 4.000 m² kare tarlanın kenarı hangi iki sayı arasında? → 63² = 3.969, 64² = 4.096 → 63 ile 64 arası.

### 2. 60×60 seramik: 1 m²'ye kaç tane gider? (Ondalık karekök)
- **Durum:** Eve fayans döşeniyor. Usta "60'lık seramik" diyor. 1 m²'ye kaç tane gider? 20 m²'lik odaya kaç tane?
- **Matematik nerede:** (M.8.1.3.7 – ondalık sayının karekökü, M.8.1.3.1)
  - Bir seramik 0,6 × 0,6 = 0,36 m². Tersi: √0,36 = 0,6 ✔ (√36 = 6, √0,36 = 0,6; virgül iki basamak sola gidince kök bir basamak gider).
  - 1 ÷ 0,36 ≈ 2,8 → 3 adet.
  - 20 m² ÷ 0,36 ≈ 56 adet (kaynağın verdiği rakam). Fire için %10 fazla → 62 adet.
- **Neden önemli / olmasa ne olurdu:** Ondalık karekökte "√0,36 = 0,06" dersen 1 m²'ye 278 seramik alırsın. Para gider.
- **Kaynak:** Çınar Yapı Market, "1 m²'ye Ne Kadar Seramik Gider?" (60×60 → 0,36 m², 20 m² için ≈56 adet) — https://www.cnryapimarket.com.tr/1-m%C2%B2ye-ne-kadar-seramik-gider/
- **Mini soru:** √0,25 kaç? → 0,5. (0,5 × 0,5 = 0,25)

### 3. "43 inç / 108 ekran" televizyon aslında ne kadar geniş?
- **Durum:** Pazarda TV bakıyorsunuz: "43 inç, 108 ekran". 108 cm köşegen demek, en değil. TV duvara sığacak mı? Genişliği lazım.
- **Matematik nerede:** (M.8.1.3.2, M.8.1.3.4)
  - 43 inç × 2,54 = 109,2 cm ≈ 108 cm köşegen ✔
  - Ekran oranı 16:9. Köşegen birimi = √(16² + 9²) = √(256 + 81) = √337.
  - 18² = 324, 19² = 361 → 18 < √337 < 19, yaklaşık 18,4.
  - 1 birim = 108 ÷ 18,4 ≈ 5,9 cm → Genişlik 16 × 5,9 ≈ 94 cm, yükseklik 9 × 5,9 ≈ 53 cm.
- **Neden önemli / olmasa ne olurdu:** "108 ekran" deyip 108 cm boşluk bırakırsan TV bol gelir; ama "43 inç = 43 cm" sanırsan sığmaz. Köşegen → kenar geçişi kareköksüz olmaz.
- **Kaynak:** Vestel, Televizyonlar (Vestel 43UG9750 43'' / 108 cm, 3840×2160) — https://www.vestel.com.tr/televizyonlar-c-26
- **Mini soru:** 32 inç TV köşegeni kaç cm? → 32 × 2,54 ≈ 81 cm.

### 4. Telefonun "6,7 inç" ekranı: cetvelle kontrol et
- **Durum:** Galaxy A17'nin ekranı "6,7 inç" diye yazıyor; Samsung "köşegen olarak ölçülür" diyor. Cetvelle ekranın enini ve boyunu ölç; köşegeni hesapla, doğru mu bak.
- **Matematik nerede:** (M.8.1.3.1, M.8.1.3.4 – Pisagor + karekök)
  - 6,7 inç × 2,54 = 17,0 cm köşegen olmalı.
  - Diyelim ölçtün: en 8 cm, boy 15 cm. Köşegen = √(8² + 15²) = √(64 + 225) = √289 = 17 cm ✔ tam kare çıktı.
  - En 7,5 cm, boy 15,5 cm olsaydı: √(56,25 + 240,25) = √296,5 → 17² = 289, 18² = 324 → 17 ile 18 arası, ≈17,2.
- **Neden önemli / olmasa ne olurdu:** Reklamın doğru olup olmadığını kendin kontrol edebilirsin. Köşegen iki kenardan sadece karekökle bulunur.
- **Kaynak:** Samsung Türkiye, Galaxy A17 (6,7 inç Super AMOLED; "çapraz olarak ölçüldüğünde") — https://www.samsung.com/tr/smartphones/galaxy-a/galaxy-a17-black-128gb-sm-a175fzkbtur/
- **Mini soru:** Kenarları 6 ve 8 cm olan ekranın köşegeni? → √(36+64) = √100 = 10 cm.

### 5. A4 kâğıdı neden 210 × 297 mm? (√2 sırrı)
- **Durum:** A4 kâğıdı ikiye katla → A5 çıkar. A5'in şekli A4'ün aynısı, sadece küçük. Bu tesadüf değil; kenar oranı özellikle √2 seçilmiş.
- **Matematik nerede:** (M.8.1.3.8 – irrasyonel sayı, M.8.1.3.2)
  - 297 ÷ 210 = 1,414… = √2 (1,41421356…)
  - Katla: 210 × 148,5 → 210 ÷ 148,5 = 1,414 yine √2. Oran bozulmuyor.
  - Başka oran olsa (mesela 3:2): katlayınca 2:1,5 = 4:3 olur, şekil değişir.
  - √2 tam sayı değil: 1² = 1, 2² = 4 → 1 < √2 < 2. Ondalığı hiç bitmez → irrasyonel.
- **Neden önemli / olmasa ne olurdu:** Fotokopide "A4'ten A5'e küçült" düğmesi bu yüzden çalışır. Oran √2 olmasa her küçültmede yazı kenardan taşardı.
- **Kaynak:** Wikipedia, "ISO 216" (tüm A serisi oranı √2:1; ikiye katlanınca oran korunur; A4 = 210 × 297 mm) — https://en.wikipedia.org/wiki/ISO_216
- **Mini soru:** A5'in kısa kenarı 148 mm. Uzun kenarı yaklaşık kaç? → 148 × 1,414 ≈ 209 ≈ 210 mm.

### 6. Futbol sahasının bir köşesinden öbür köşesine kaç metre?
- **Durum:** Profesyonel saha 105 m × 68 m. Kaleci köşeden köşeye uzun pas atacak. Top kaç metre gidecek?
- **Matematik nerede:** (M.8.1.3.2, M.8.1.3.4)
  - Köşegen = √(105² + 68²) = √(11.025 + 4.624) = √15.649
  - 125² = 15.625, 126² = 15.876 → 125 < √15.649 < 126. Yaklaşık 125,1 m.
  - Kenar boyunca koşsa 105 + 68 = 173 m; çapraz 125 m → 48 m kısa.
- **Neden önemli / olmasa ne olurdu:** "Köşegen, kenarların toplamı" değil; toplamdan kısa. Ne kadar kısa olduğunu karekök söyler. Aynı hesap tarlanın çaprazından su borusu çekerken de kullanılır.
- **Kaynak:** Wikipedia, "Football pitch" (tercih edilen ölçü 105 × 68 m) — https://en.wikipedia.org/wiki/Football_pitch
- **Mini soru:** 30 m × 40 m köy sahasının köşegeni? → √(900+1600) = √2500 = 50 m.

### 7. Fren izinden hız bulmak: v = √(2·μ·g·d)
- **Durum:** Yolda 20 metre fren izi var. Trafik polisi hızı nasıl tahmin ediyor? Fizik formülü: hız = √(2 × sürtünme × 9,8 × iz uzunluğu). Kuru asfaltta sürtünme ≈ 0,7.
- **Matematik nerede:** (M.8.1.3.2, M.8.1.3.4, M.8.1.3.5)
  - v = √(2 × 0,7 × 9,8 × 20) = √274,4
  - 16² = 256, 17² = 289 → 16 < v < 17, yaklaşık 16,6 m/s ≈ 60 km/h.
  - İz 80 m olsaydı: √(2 × 0,7 × 9,8 × 80) = √1.097,6 ≈ 33 m/s ≈ 120 km/h. İz 4 kat → hız 2 kat (√4 = 2).
- **Neden önemli / olmasa ne olurdu:** Karekök olmasa "iz 4 kat uzun, hız 4 kat" dersin; gerçek 2 kat. Kaza raporu bu formülle yazılır.
- **Kaynak:** Wikipedia, "Braking distance" (d = v²/(2μg) → v = √(2μgd)) — https://en.wikipedia.org/wiki/Braking_distance
- **Mini soru:** √(2 × 0,5 × 10 × 10) kaç? → √100 = 10 m/s.

### 8. Damdan ne kadar uzağı görürsün? (Ufuk formülü)
- **Durum:** Düz ovada ayakta durunca ufuk yaklaşık 4,7 km. Dama çıkınca daha uzağı görürsün. Formül: uzaklık (km) ≈ 3,57 × √(göz yüksekliği, metre).
- **Matematik nerede:** (M.8.1.3.2, M.8.1.3.4)
  - Ayakta göz 1,7 m: √1,7 → 1² = 1, 2² = 4 → 1 < √1,7 < 2 ≈ 1,30 → 3,57 × 1,30 ≈ 4,65 km (kaynak: 4,654 km).
  - Dam 4 m: √4 = 2 → 3,57 × 2 = 7,1 km.
  - Minare 16 m: √16 = 4 → 14,3 km.
  - Görüşü 2 katına çıkarmak için 4 kat yükselmek lazım.
- **Neden önemli / olmasa ne olurdu:** Kule, radyo vericisi, gözetleme yeri yüksekliği bu formülle planlanır. "2 kat yüksek = 2 kat uzak" sanmak yanlış; karekök çünkü Dünya yuvarlak.
- **Kaynak:** PhysicsCalcs, "Distance to Horizon Calculator" (d ≈ 3,57·√h km; 1,70 m için 4,654 km) — https://physicscalcs.com/physics-tools/optics/distance-to-horizon-calculator
- **Mini soru:** 25 m yükseklikten ufuk kaç km? → 3,57 × √25 = 3,57 × 5 ≈ 17,9 km.

### 9. Salıncak neden hep aynı hızda sallanır? (Sarkaç)
- **Durum:** Ağaca ip bağlayıp salıncak yaptın. Uzun ip yavaş, kısa ip hızlı sallanır. Fizik: bir gidiş-geliş süresi T = 2π × √(L ÷ 9,8). Ağırlık önemsiz, sadece ip uzunluğu.
- **Matematik nerede:** (M.8.1.3.4, M.8.1.3.7)
  - L = 1 m: √(1 ÷ 9,8) = √0,102 ≈ 0,32 → T = 2 × 3,14 × 0,32 ≈ 2,0 saniye.
  - L = 4 m: √(4 ÷ 9,8) = √0,408 ≈ 0,64 → T ≈ 4,0 saniye. İp 4 kat → süre 2 kat.
  - L = 2,45 m: √(2,45 ÷ 9,8) = √0,25 = 0,5 → T = π ≈ 3,14 s (tam kare çıktı!).
- **Neden önemli / olmasa ne olurdu:** Eski sarkaçlı saatler bu formülle yapıldı: ipi doğru uzunlukta kes, saat doğru gider. Karekök olmadan "ip 4 kat uzun, 4 kat yavaş" dersin; saat yanlış çalışır.
- **Kaynak:** OpenStax, College Physics 2e, "16.4 The Simple Pendulum" (T = 2π√(L/g)) — https://openstax.org/books/college-physics-2e/pages/16-4-the-simple-pendulum
- **Mini soru:** √(9 ÷ 9) kaç, T yaklaşık kaç? → √1 = 1 → T ≈ 6,28 s (ip ≈ 9,8 m için).

### 10. Dama tahtası: 64 kare neden 8 × 8?
- **Durum:** Köy kahvesinde dama oynanıyor. Tahtada 64 kare var. Kare biçimli tahtaya kaç sıra, kaç sütun? Bir de sen 100 taşla kare tahta yapmak istiyorsun.
- **Matematik nerede:** (M.8.1.3.1, M.8.1.3.3, M.8.1.3.6)
  - √64 = 8 → 8 sıra × 8 sütun. 64 tam kare.
  - 100 taş: √100 = 10 → 10 × 10 ✔ tam kare.
  - 50 taş: √50 = √(25 · 2) = 5√2 ≈ 7,07 → tam kare değil; 7 × 7 = 49 yapar, 1 taş artar.
  - 50'yi tam kare yapan en küçük çarpan: 50 × 2 = 100 → çarpan 2. (M.8.1.3.6)
- **Neden önemli / olmasa ne olurdu:** "Kare dizilim mümkün mü" sorusu tam kare sorusudur. Tam kare olmayan sayıyı tam kare yapmak için hangi çarpanı ekleyeceğini bilmek, eksik taşı hesaplamaktır.
- **Kaynak:** Wikipedia, "Checkerboard" (64 kare, 8×8) — https://en.wikipedia.org/wiki/Checkerboard
- **Mini soru:** 72 sayısını tam kare yapan en küçük doğal sayı çarpanı? → 72 = 36 × 2 → çarpan 2 (72 × 2 = 144 = 12²).

### 11. √2 için ölen adam: Hippasus ve irrasyonel sayılar
- **Durum:** 2.500 yıl önce Yunanistan'da Pisagor'un öğrencileri "her sayı kesirle yazılır" diyordu. Hippasus, kenarı 1 olan karenin köşegeninin (√2) hiçbir kesirle yazılamayacağını gösterdi. Efsaneye göre bunu açıkladığı için denize atıldı.
- **Matematik nerede:** (M.8.1.3.8 – gerçek sayılar, rasyonel/irrasyonel)
  - Kenar 1 → köşegen √(1² + 1²) = √2 = 1,41421356… sonsuza kadar, tekrar etmez.
  - Rasyonel: 1/2 = 0,5; 1/3 = 0,333… (tekrar eder). İrrasyonel: √2, √3, π (ne biter ne tekrar eder).
  - Babilliler 3.800 yıl önce kil tablete √2 ≈ 1,41421 yazmıştı (6 basamak doğru!). Tam değerini kimse yazamaz, sadece yaklaşık.
- **Neden önemli / olmasa ne olurdu:** Bazı uzunluklar (kare tarlanın köşegeni) hiçbir cetvelle "tam" ölçülemez. Bunu kabul etmeyen matematik, geometriyi açıklayamazdı.
- **Kaynak:** Wikipedia, "Hippasus" (irrasyonel sayıların keşfi, Pisagorcular) — https://en.wikipedia.org/wiki/Hippasus ; Wikipedia, "Square root of 2" (1,41421356…; Babil tableti YBC 7289) — https://en.wikipedia.org/wiki/Square_root_of_2
- **Mini soru:** √9, √10, 2/7, 0,75 — hangileri irrasyonel? → Sadece √10.

### 12. NASA π'nin kaç basamağını kullanıyor?
- **Durum:** π = 3,14159… sonsuza gider. Peki NASA uzay aracını gezegene gönderirken kaç basamak kullanıyor? Cevap: 15 basamak. Daha fazlası gereksiz.
- **Matematik nerede:** (M.8.1.3.8, M.8.1.3.7)
  - π = 3,141592653589793 (NASA-JPL'in kullandığı). İrrasyonel: ne biter ne tekrar eder.
  - Okulda 3 veya 3,14 kullanırız. Çemberin çevresi = 2πr. Çapı 1 m olan su deposunun çevresi ≈ 3,14 m.
  - 15 basamakla milyarlarca km'lik yolculukta hata birkaç cm. Yani "sonsuz basamak" gerçekte lazım değil, yaklaşık yeter.
- **Neden önemli / olmasa ne olurdu:** İrrasyonel sayı "hesaplanamaz" demek değil; "istediğin kadar yaklaş" demek. Köşegen için √2 ≈ 1,41, depo için π ≈ 3,14 alırsın, iş görür.
- **Kaynak:** NASA JPL, "How Many Decimals of Pi Do We Really Need?" (3,141592653589793) — https://www.jpl.nasa.gov/edu/news/how-many-decimals-of-pi-do-we-really-need/
- **Mini soru:** Çapı 2 m depo, çevresi yaklaşık kaç (π ≈ 3,14)? → 6,28 m.

### 13. Kareköklü sayılarla toplama: iki tarlayı birleştirmek
- **Durum:** Biri 50 m², biri 200 m² iki kare bahçe var (küçük sebze bahçeleri). Kenarlarını yan yana koyup tek tel çekeceksin. Kenarlar toplamı kaç?
- **Matematik nerede:** (M.8.1.3.3, M.8.1.3.4, M.8.1.3.5)
  - √50 = √(25·2) = 5√2 ; √200 = √(100·2) = 10√2
  - Toplam kenar = 5√2 + 10√2 = 15√2 ≈ 15 × 1,414 ≈ 21,2 m
  - Dikkat: √50 + √200 ≠ √250. (√250 ≈ 15,8 ≠ 21,2)
  - Çarpma: √50 × √200 = √10.000 = 100 (M.8.1.3.5) — iki kenarın çarpımı bir dikdörtgen alanı gibi.
- **Neden önemli / olmasa ne olurdu:** Kökleri "içeride toplarsan" tel 5 m eksik gelir. a√b yazımı, benzer kökleri elma-armut gibi ayırıp doğru toplamanı sağlar.
- **Kaynak:** Sayısal kural için Wikipedia "Square root of 2" (√2 ≈ 1,41421) — https://en.wikipedia.org/wiki/Square_root_of_2 ; dönüm/m² bağlamı için Vikipedi "Dönüm" — https://tr.wikipedia.org/wiki/D%C3%B6n%C3%BCm
- **Mini soru:** √18 + √8 kaç? → 3√2 + 2√2 = 5√2 ≈ 7,07.

### Kareköklü İfadeler – Sık yapılan 3 hata
1. **√(a + b) = √a + √b sanmak.** √(9 + 16) = √25 = 5; ama √9 + √16 = 7. Futbol sahası köşegeni kenarlar toplamı değil.
2. **Ondalık kökte virgülü kaydırmak.** √0,36 = 0,6 (0,06 değil). Kök alınca virgül yarıya iner: 2 basamak → 1 basamak.
3. **"Kök alınca sayı küçülür" sanmak.** √0,25 = 0,5 > 0,25. 1'den küçük sayıların kökü büyür. 1'den büyüklerin kökü küçülür.

**Bir cümlelik özet:** Karekök, "alanı/karesini biliyorum, kenarı istiyorum" sorusunun cevabıdır; tam kare çıkmazsa iki doğal sayı arasına sıkıştır, a√b ile sadeleştir, ve √2 gibi bitmeyen sayıların da gerçek uzunluklar olduğunu kabul et.

---

## Kaynak Doğrulama Notu
Tüm URL'ler 5 Eylül 2026'da web_extract ile açıldı; kullanılan sayılar sayfa metninden alındı. Şu bilgiler kaynaktan **alınmadı**, öğrenci için hesaplama varsayımı olarak açıkça belirtildi: kâğıt kalınlığı 0,1 mm (yaygın kabul), fotoğraf boyutu 3 MB, köy deposu 10 m³, sürtünme katsayısı 0,7, telefon en/boy ölçümü 8×15 cm, bahçe alanları 50/200 m².
Ulaşılamayan/kullanılmayan: AFAD basın bülteni sayfaları (çerez metni döndü → PDF rapor kullanıldı), TommaTech datasheet (panel boyutu metni çıkmadı → güneş paneli kare-dizilim örneği yazılmadı).
