# PLAN — Üslü İfadeler sayfası (uslu-ifadeler.html)

Tarih: 2026-09-14 · Durum: ONAY BEKLİYOR — onaysız kod yazılmaz.

## Müfredat doğrulaması
- **MAT.8.1.1** — "Farklı bağlamlardaki üslü ifadelere, özelliklerine ve üslü
  ifadelerle yapılan işlemlere ilişkin çıkarım yapabilme."
  Kaynak: tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/472 (8. Sınıf 1. Tema:
  Sayılar ve Nicelikler, 38 ders saati). Bu sefer etiket baştan doğru: bu konu
  gerçekten 8. sınıf.
- MEB sınırı: taban rasyonel, kuvvet tam sayı. Sayfa bu sınırda kalacak.
- MEB'in kendi önerisi: 3³→3⁰ örüntüsüyle sıfır/negatif üse gitmek → sayfada
  aynen bu örüntü interaktif olacak (27, 9, 3, ?).

## Sayfa felsefesi (kanıtlanmış kalıp — fayans/EBOB'dan)
Konu anlatılmaz. Çocuk önce GERÇEK bir işi yapar, kavramın adı SONRA gelir.
Kilit yok: özet kart ve ana bölümler baştan erişilebilir (nasil-calisilir
dersinden). Mobil 430px, koyu tema, aynı CSS dili.

## Akış (7 blok)

### 1. KANCA — Kağıt katlama (interaktif)
"Eline bir kağıt al. İkiye katla. Bir daha. 7'den fazla katlayamazsın —
kimse katlayamıyor, dene." Ekranda KATLA butonu: her basışta kat sayısı,
kalınlık ve karşılaştırma güncellenir:
- 7 kat → 1,3 cm (gerçek limit burası, çocuk kendi kağıdıyla denedi)
- 10 kat → ~10 cm (kalem boyu)
- 20 kat → ~105 m (Diyarbakır surlarından yüksek)
- 42 kat → ~439.805 km → **Ay'ı geçer** (Ay: 384.400 km) ✓ Python'la doğrulandı
Çocuk 2×2×2×... işleminin patlamasını KATLA'ya basarak yaşar. Kavram adı yok.

### 2. İSİM SONRA — "Bunun adı üslü ifade"
42 kat için 2×2×2… (42 tane) yazmak eziyet → 2⁴² kısaltması. Taban = ne
çarpılıyor, üs = kaç kere. Hesap makinesi tuzağı (MEB vurgusu): 5·5·5=125
ile 3·5=15 aynı şey değil; 2⁵ ≠ 2·5.

### 3. ÖRÜNTÜ — Sıfır ve negatif üs (interaktif, MEB'in kendi yöntemi)
27 → 9 → 3 → ? kutuları. Çocuk "her adımda 3'e bölünüyor" der, 3⁰=1'i ve
3⁻¹=1/3'ü KENDİ çıkarır. "Negatif üs eksi sayı değil, '1 bölü' demek."
Virüs bağlantısı: 10⁻⁹ m = nanometre; 1 mm'ye 10.000 virüs sığar ✓.

### 4. İŞLEM KURALLARI — Çarpımda üsler toplanır (keşfettirme)
2³×2² = (2·2·2)·(2·2) = 2⁵ görsel açılımı. Çocuk kuralı görür, sonra
genelleme: aᵐ·aⁿ=aᵐ⁺ⁿ, aᵐ÷aⁿ=aᵐ⁻ⁿ. Maya örneği: 2¹⁵÷2³=2¹²=4.096 ✓.

### 5. BÜYÜK SAYILAR — Bilimsel gösterim (Diyarbakır verisiyle)
TÜİK: Türkiye 85.664.944 ≈ 8,57×10⁷; Diyarbakır 1.833.684 ≈ 1,83×10⁶.
Oran ≈ 47 ✓. Telefon: 128 GB = 1,28×10¹¹ bayt → neden GB/MB diye
konuşuyoruz. Güneş ışığı 8 dk 20 sn (1,5×10¹¹ ÷ 3×10⁸ = 500 sn ✓).

### 6. SEKMELER — "Başka nerede?" (4 sekme, ebob'daki gibi)
- **Satranç:** 2⁶⁴−1 = 18,4 kentilyon buğday; ikinci yarı ilk yarının
  4 milyar katı ✓. "Kral üs bilmediği için kandı."
- **Deprem:** 6 Şubat 7,7 — büyüklük 2 artınca enerji ~1.000 kat ✓ (USGS +
  AFAD kaynaklı). Mesaj korkutma değil: "deprem yönetmeliği neden sert,
  çünkü ölçek üslü." → Diyarbakır'da yaşayan çocuğa en gerçek örnek bu;
  dozunda, tek sekme.
- **Baraj (GAP):** Atatürk Barajı 4,87×10¹⁰ m³ = 4,9 milyar köy deposu ✓.
- **Zincir mesaj:** "5 kişiye gönder" 10 adımda 5¹⁰ ≈ 9,8 milyon kişi ✓ —
  "o yüzden zincir mesajlar yasaklanıyor."

### 7. KENDİNİ DENE + CEBİNDE KALSIN
6 soruluk test (ebob kalıbı, 25 sn "Takıldım, göster" butonu dahil).
Kilitsiz özet kart: taban/üs tanımı, a⁰=1, negatif üs = 1 bölü,
çarpımda üsler toplanır, 10'un kuvvetleri tablosu (10³ bin → 10⁹ milyar).

## Doğrulama sözleşmesi
- Tüm sayılar Python'la hesaplandı (bu oturumda, çıktı kayıtlı) ✓
- Kaynaklar: TÜİK/AA, USGS, AFAD, NASA, eLife, MEB — hayattan-ornekler.md'de
  URL'li; sayfaya girecek her kaynak canlı kontrol edilecek.
- Kabul testi: gerçek tarayıcıda 390px, tam akış tıklanarak; taşma 0;
  JS hatası 0; canlı GitHub Pages adresinde de aynı test.
- Yayın: onay + test sonrası _yayin/'e kopya, commit, push (yetki alındı,
  aynı kapsam).

## Bilinçli dışarıda bırakılanlar
- Kareköklü ifadeler (MAT.8.1.2) → 4. konu, ayrı sayfa.
- Ondalık/rasyonel taban kuvvetleri → test sorusunda değil, sadece bir
  cümlede ("(1/2)² de olur") — sayfayı şişirmemek için.
- Faiz/borç örneği → satranç zaten aynı mantık; tekrar olurdu.
