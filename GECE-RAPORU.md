# Gece Raporu — 13 Eylül 2026

Sen uyurken yapılanlar. Hepsi gerçek tarayıcıda test edildi, ekran görüntüsüyle bakıldı.

---

## Yapılanlar

### 1. Kırık linkler düzeltildi
Ana sayfa iki sayfaya link veriyordu ama **ikisi de yoktu** — `nasil-calisilir.html` ve `ebob-ekok.html`.
Üstelik biten `1-carpanlar.html` ana sayfadan linkli değildi, çocuk hiç ulaşamıyordu.
Şimdi 8 iç linkin **8'i de çalışıyor**, kırık yok.

### 2. EBOB & EKOK sayfası yazıldı (yeni)
`ebob-ekok.html` — 28 KB, mobil.

Akış: fayans döşeme problemi → çocuk ölçü deneyip kesmeden döşenenleri buluyor →
"bunun adı EBOB'muş" → asal çarpan ağacı → servis otobüsü problemi → EKOK →
6 soruluk kendini test → nerede işe yarıyor (5 sekme).

### 3. Çalışma yöntemi sayfası yazıldı (yeni)
`nasil-calisilir.html` — 13 KB. "Çok çalış" demiyor, **neyin işe yaradığını** gösteriyor:
kendini test etme, aralıklı tekrar, karıştırarak çalışma. İki akademik kaynakla.

### 4. Kaynak URL'leri tek tek doğrulandı
93 URL tarandı. **91'i sağlam.** 10 tanesi curl'e kapalıydı ama gerçek Chrome'da
açılıp içeriği görüldü — sağlam çıktılar.
**2 tanesi gerçekten ölü** (Milli Piyango, plastik su tankı) — ikisi de sitede kullanılmıyor,
sadece kaynak havuzunda. Detay: `kaynak/URL-DOGRULAMA.md`

---

## İki ajan denetimden geçirdi — 4 gerçek hata buldular

**1. Müfredat etiketi yanlıştı.** Sayfa "8. SINIF" diyordu.
MEB'in kendi sitesinden (tymm.meb.gov.tr) doğruladım: EBOB/EKOK **6. sınıf** kazanımı, kodu **MAT.6.1.4**.
→ Düzeltildi: artık "ORTAOKUL MATEMATİK · MEB kazanımı MAT.6.1.4" yazıyor.
*Not: Bu senin için önemli olabilir — 8. sınıfta bu konu tekrar/pekiştirme olarak işleniyor,
ilk öğretimi 6'da. Sayfayı 8'e "ait" gibi sunmak yanlış olurdu.*

**2. "Doğum günün 6 yılda bir aynı güne gelir" — yanlıştı.**
Python'la 3 ayrı doğum tarihi için hesapladım: örüntü 6 değil, **5/6/11** değişiyor.
29 Şubat doğumlu için 28 yıl. Sabit sayı yok.
→ Örnek tamamen çıkarıldı, yerine **tarla sulama sırası** kondu (4 günde bir / 6 günde bir → 12).
Bu hem doğru, hem köyde karşılığı olan bir örnek.

**3. "Çoğu şarkı 12'lik kalıplara oturur" — yanlıştı.** Çoğu şarkı 4/4.
→ İddia silindi, davul örneği bırakıldı, halay bağlantısı doğru şekilde yazıldı.

**4. "3/3 buldun" yanıltıcıydı.** 120 ve 90'ın gerçek ortak bölenleri **8 tane** (1,2,3,5,6,10,15,30).
Çocuk listedeki 3'ünü bulup "hepsini buldum" sanıyordu.
→ "Listedeki 3 ölçüyü de buldun" diye düzeltildi. Dürüst ifade.

**5. Kaynak sayısı yanlıştı.** "217 çalışmanın birleşik analizi" yazmıştım.
Denetçi 118 olduğunu söyledi. Ben de kendim doğrulamaya çalıştım: ERIC'te sayı yok,
Sage Cloudflare arkasında. **Doğrulayamadığım rakamı sayfada bırakmadım** — sayıyı
tamamen kaldırdım, yerine cilt/sayfa numarası yazdım (87(3), 659–701).
Bulgunun kendisi doğru, o ERIC'te birebir yazıyor.

**6. Vurgulanması gereken cümle vurgusuz kalmıştı.** "Telefon başka odada" cümlesi
`.sart` sınıfı kullanıyordu ama o sınıf hiç tanımlı değildi. Tanımı eklendi.

---

## Pedagojik düzeltmeler

**Takılan çocuk kilitleniyordu.** Sayfanın yarısı gizliydi ve açılması için doğru yerlerde
**14 tıklama** gerekiyordu. Bulamayan çocuk sayfanın yarısını hiç göremezdi.
→ 25 saniye boyunca ilerleyemezse **"Takıldım, cevabı göster"** butonu çıkıyor. Test ettim, çalışıyor.

**EBOB/EKOK karışıklığı.** Bu, öğrencilerin en çok karıştırdığı konu.
→ 6 soruluk test eklendi. Her yanlışta *neden* yanlış olduğu yazıyor.
→ Altın kural eklendi: *"Cevap sayılardan küçük çıktıysa EBOB, büyük çıktıysa EKOK."*

**"Baştan dene" butonu** eklendi (çarpanlar sayfasında vardı, burada yoktu).

**EKOK'un kısa yolu eksikti.** EBOB için asal çarpan yöntemi vardı, EKOK için yoktu —
çocuğa sadece "katları yaz" öğretiliyordu. O yöntem EKOK(24,36)'da çöker.
→ Yeni kart eklendi: aynı asal çarpanlar, yan yana iki kutu.
**EBOB = ortak olanların en azı (2×3=6)**, **EKOK = her tuğladan en çoğu (2×2×3×3=36)**.
Bu tek görsel, iki kavramın farkını tek bakışta gösteriyor.

**Özet kart eklendi** — sayfanın sonunda, **kilitsiz**. Sınav sabahı çocuk 14 tıklama
yapmadan bakabiliyor. İçinde cep hilesi de var: EBOB × EKOK = iki sayının çarpımı
(4 sayı çiftinde Python'la doğruladım).

**"Bisiklet dişlisi" → "motosiklet zinciri"** yapıldı. Dicle kırsalında bisiklet az,
motosiklet çok. Matematik aynı (EKOK(48,18)=144), örnek tanıdık oldu.

**72. dakika hatası düzeltildi.** Servis çizgisinde 36 ve 72'de iki çakışma var ama
etiket sadece "36. dakika" diyordu. Artık 72'ye gelince "36. ve 72. dakika" yazıyor.

**Çalışma sayfasındaki kilit kırıldı.** EBOB sayfasına giden link, 6 kutucuğun hepsi
işaretlenmeden görünmüyordu — ders çalışma sayfası öğrenciyi derse ulaşmaktan
alıkoyuyordu. Artık hep açık.

---

## Test kanıtı

Gerçek Chrome, telefon boyutu (390×844), gerçek tıklamalarla:

- Fayans: 8 ölçünün hepsi tek tek denendi, matematik doğru
- Asal çarpan ağacı: 6 adım sonuna kadar, **EBOB = 30** çıkıyor
- Zaman çizgisi: 12'nin ve 18'in katları doğru işaretleniyor, **EKOK = 36** yeşil yanıyor
- Test bölümü: doğru cevap yeşil, yanlış kırmızı + açıklama; çift tıklama skoru bozmuyor
- Yardım butonu: 25 sn sonra çıkıyor, basınca sayfayı açıyor
- **4 sayfada da yatay taşma yok** (390 = 390), JS hatası yok

**Bir görsel hata bulup düzelttim:** zaman çizgisi dikey yığılmıştı, yatay olması gerekiyordu.
Ekran görüntüsünde gördüm, CSS'i düzelttim, tekrar baktım.

---

## Sende kalan tek iş: yayın

Site hâlâ **sadece bu bilgisayarda**. Öğrenci telefonundan açamaz.

`YAYINA-ALMA.md` dosyasında tek komut hazır. Onu çalıştırınca adres:
**https://hkntng.github.io/okul-sitesi/**

Push etmedim — o kapı senin.

---

## Yapmadıklarım (bilerek)

- **Yayına almadım.** İzin istemiştin, vermedin.
- **Yeni konu yazmadım.** Sıradaki konular için örnek seçimi sana ait.
- **Arkada hiçbir şey çalışmıyor.** Servis, cron, daemon kurmadım.
  Tek çalışan şey `python3 -m http.server 8765` — onu da istediğin an kapatabilirsin.

---

## Dikkatini çekmek istediğim şey

Okul **bugün** açılıyor. Elinde 3 çalışan sayfa var ama öğrencinin erişebileceği bir link yok.
Bence ilk iş o komutu çalıştırmak — içerik zaten hazır.
