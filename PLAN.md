# BU NE İŞE YARIYOR — Proje Planı
**8. Sınıf Matematik · 1. Ünite · MEB 2025 kitabına birebir bağlı**

Hazırlayan: Hermes · Tarih: 4 Eylül 2026
Kaynak: `kaynak/MEB_matematik_8_2025.pdf` (367 s., MEB Yayınları 2025)

---

## 1. KAPSAM — NET SINIR

Kitabın **1. ünitesi** iki bölümdür (s.12–56):

| Bölüm | Konu | Kitap s. | Kazanım |
|---|---|---|---|
| 1.1 | Pozitif Tam Sayı Çarpanları | 12–18 | M.8.1.1.1 |
| 1.2 | **EBOB** | 19–21 | M.8.1.1.2 |
| 1.3 | **EKOK** | 22–32 | M.8.1.1.2, M.8.1.1.3 |
| 2.1 | Tam Sayıların Tam Sayı Kuvvetleri | 33–44 | M.8.1.2.1, M.8.1.2.2 |
| 2.2 | Ondalık Gösterimi Çözümleme | 45–46 | M.8.1.2.3, M.8.1.2.4 |
| 2.3 | Bilimsel Gösterim | 47–51 | M.8.1.2.5 |

**Kareköklü İfadeler bu üniteye DAHİL DEĞİL** — kitapta 2. ünite (s.58).
Öğretim programı onu M.8.1.3 diye aynı öğrenme alanına koyar ama kitap ayırır.
**Kitabı esas alıyoruz.** Kapsam: ~25 ders saati.

### Kapsam kilidi
1. ünite bitmeden 2. üniteye geçilmez. Bu kural tartışmaya kapalıdır.

---

## 2. NEDEN BU PROJE — kitabın açığı

Kitabın kendi "gerçek hayat" girişleri:

- **Çarpanlar** (s.12): 24 kişilik sınıf, masalara eşit dağılım → **iyi, kullanılabilir**
- **EBOB** (s.19): Gaziler Günü, 24 kırmızı + 36 beyaz karanfil gruplama → **zayıf**
- **EKOK** (s.22): Koronavirüs, iki dikiş makinesi 10 ve 8 dk → **zayıf, tarihi geçmiş**

Bunlar gerçek hayat değil, **problem kılıfı**. Çocuk hayatında karanfil gruplamaz.
Kitap "ne işe yarıyor" sorusunu sormuyor, sadece soruyu süslüyor.

**Sitenin varlık sebebi tam burası:** kitabın atladığı "neden" sorusunu cevaplamak.

---

## 3. TASARIM KURALLARI (araştırma temelli)

Kaynak: `/Users/hkn/matematik-sitesi-arastirma.md`

1. **Düz metin yasak.** Her sayfada elle oynanan en az bir şey.
2. **Süs animasyon da yasak.** NN/g'nin 100 ergenle araştırması: gençler parlak/yanıp sönen tasarımdan hoşlanmıyor. Etkileşim **amaçlı** olacak.
3. **Uydurma örnek yasak.** Her gerçek-hayat bağı kaynağıyla doğrulanacak. Doğrulanmayan siteye girmez.
4. **0 KB kütüphane.** Düz HTML + inline SVG + CSS. p5.js/D3 yok (198 KB / 94 KB — ucuz Android'de gereksiz yük).
5. **Kaydırıcı yerine [−] 24 [+].** NN/g: dokunmatikte slider ile tam değer seçmek güvenilmez. Konu tam sayılarla çalışıyor.
6. **Eşzamanlı bağlama.** Çocuk sayıyı değiştirince görsel + sayı + sonuç aynı anda değişecek. (Moyer-Packenham 2013'te sanal manipülatiflerin en güçlü mekanizması.)

---

## 4. SAYFA PLANI

Her sayfa: **1 soru → 1 elle oynanan şey → 1 doğrulanmış gerçek hayat bağı**

### S0 · Nasıl Çalışılır
Konudan bağımsız. Sitenin ilk sayfası.
Sınava nasıl çalışılır, kitap nasıl okunur, tekrar ne zaman yapılır.
*Not: içerik Hakan'ın kendi öğretmenlik deneyiminden gelecek, ben taslak atarım.*

### S1 · Bir sayı neden "bölünmüyor"?
**Kitap bağı:** s.12, 24 kişilik sınıf
**Oyun:** Çocuk sınıf mevcudunu [−][+] ile değiştirir. Ekranda öğrenciler masalara dizilir.
24 → düzgün oturur (birçok seçenek). 23 → hiçbir şekilde oturmaz.
**Öğrenilen:** Asal sayı ne demek — kimse tanım söylemeden.
**Kazanım:** M.8.1.1.1

### S2 · Sayının parmak izi
**Kitap bağı:** s.14, bölen listesi yöntemi
**Oyun:** Sayı gir, asal çarpan ağacı dallanarak açılır.
**Gerçek hayat bağı:** ARAŞTIRILACAK (RSA/şifreleme yönü güçlü aday — Mathigon tr sürümünde işlenmiş)
**Kazanım:** M.8.1.1.1

### S3 · EBOB — en büyük ortak parça
**Kitap bağı:** s.19 (karanfil örneği DEĞİŞTİRİLECEK)
**Oyun:** İki kenarı [−][+] ile ayarlanan dikdörtgen zemin. Çocuk kare fayans döşemeye çalışır.
Sadece EBOB boyutunda kare tam oturur, artık kalmaz.
**Gerçek hayat bağı:** Fayans/karo döşeme — DOĞRULANACAK
**Kazanım:** M.8.1.1.2

### S4 · EKOK — ne zaman buluşurlar?
**Kitap bağı:** s.22 (maske örneği DEĞİŞTİRİLECEK)
**Oyun:** İki dişli çark, diş sayıları [−][+] ile değişir. Çocuk döndürür, işaretli dişler
kaç turda tekrar buluşur görür.
**Gerçek hayat bağı:** Dişli sistemleri — DOĞRULANACAK.
**Yerel bağ adayı:** El-Cezerî — Artuklu sarayının başmühendisi, **Diyarbakır'da** yaşamış,
dişli çark ve otomatik makine tasarlamış. DOĞRULANACAK.
**Kazanım:** M.8.1.1.2

### S5 · EBOB mu EKOK mu?
Çocukların en çok karıştırdığı yer. Ayırt etme sayfası.
**Oyun:** Problem gelir, çocuk "parçalıyor muyuz / buluşturuyor muyuz" diye karar verir.
**Kazanım:** M.8.1.1.2, M.8.1.1.3

### S6+ · Üslü İfadeler
1. bölüm bitip Hakan onayladıktan SONRA planlanacak.
Bilimsel gösterim için güçlü aday: ölçek karşılaştırması (atom ↔ evren).

---

## 5. AŞAMALAR

| # | Aşama | Çıktı | Durum |
|---|---|---|---|
| A | Kaynak toplama | Kitap + kazanımlar + teknoloji raporu | ✅ BİTTİ |
| B | Bu plan | PLAN.md | ✅ BİTTİ |
| C | Gerçek hayat örneklerini doğrulama | Kaynaklı liste | ⏳ SIRADA |
| D | Yayın kararı (GitHub Pages?) | Karar + kurulum | ⏳ |
| E | S1 pilot sayfa | Çalışan tek sayfa | ⏳ Hakan onayı bekler |
| F | Hakan değerlendirir | Şablon kesinleşir | ⏳ |
| G | S2–S5 çoğaltma | 1. bölüm tamam | ⏳ |
| H | Sınıfta deneme | Gerçek öğrenci | ⏳ |

**Kritik kural:** E aşamasına Hakan "başla" demeden geçilmez.

---

## 6. AÇIK RİSKLER

1. **Site yapılır, çocuk girmez.** En büyük risk. Site derse bağlanmazsa ölür —
   "bu hafta şu sayfayı aç, oradaki soruyu getir" gibi tetikleyici şart.
2. **Yanlış örnek güveni öldürür.** Bir tane uydurma bağ, tüm sitenin itibarını götürür.
3. **Bitmeme riski.** 40 konu planlanır, 4'te tükenir. Panzehir: kapsam kilidi.
4. **Tek kopya riski.** Site sadece Hakan'ın bilgisayarında durmamalı — yedek + devredilebilir olmalı.

---

## 7. ELDEKİ KAYNAKLAR

- `kaynak/MEB_matematik_8_2025.pdf` — resmi kitap, 367 s. (Hakan getirdi)
- `kaynak/bolum1_carpanlar_katlar.txt` — s.12–32 tam metin
- `kaynak/bolum2_uslu.txt` — s.33–52 tam metin
- `kaynak/prog2018.txt` — resmi öğretim programı, 16 kazanım tam metin
- `/Users/hkn/matematik-sitesi-arastirma.md` — 41 KB teknoloji/tasarım raporu

## 8. HENÜZ ELDE OLMAYAN

- Doğrulanmış gerçek-hayat örnekleri listesi (429 kota hatası, yarım kaldı)
- Yayın kararı — GitHub Pages vs Cloudflare Pages (yarım kaldı)
- Tailscale bu iş için uygun DEĞİL gibi görünüyor (VPN — öğrenci telefonuna uygulama
  kurulması gerekir), ama kesin doğrulanmadı.
