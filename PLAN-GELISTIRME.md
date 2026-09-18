# GELİŞTİRME PLANI — Tek Koşuda Otomatik (2026-09-18)

## TUR 7 (2026-09-18)
Yapılan: Karnem'e **Çalışma Serisi (streak)** kartı eklendi. Öğrenci art arda
kaç gün çalıştığını 🔥 alev sayacı, bu haftanın Pzt→Paz şerit görünümü (çalışılan
günler ✓ ve bugün mavi halka) ve "en uzun serin/rekor 🏆" ile görür. Bugün
çözmediyse "serin kopacak" uyarısı, kopmuşsa sönük alev + yeniden başlat mesajı.
index.html'deki Karnem öncü kartına da "🔥 N gün" rozeti eklendi.
Dayanak: günlük seri (habit streak) düzenli çalışmayı motive eden kanıtlı bir
mekanik; öğrenciye "bugün de gel" somut nedeni verir. Yeni localStorage anahtarı
YOK — mevcut `sinavGecmisi` + `karisikSkorlar` içindeki `t:Date.now()` zaman
damgalarından SALT OKUMA ile hesaplanır (kabul kuralı korundu).
Test: streak mantığı 6 senaryo Node ile doğrulandı (bugün+dün+önceki=3, dün var
bugün yok=henüz kopmadı, 2 gün boşluk=0, aynı gün çoklu=1, boşluk-atlama=1, boş=0).
Tarayıcıda enjekte veriyle: seri=3 + hafta şeridi doğru günlerde ✓, kopuk seri
sönük alev, index rozeti "🔥 3 gün", boş durumda rozet gizli. Tag/JS syntax temiz.
Commit: f6fc6ab


## TUR 6 (2026-09-18)
Yapılan: YENİ **karnem.html** — öğrencinin tüm ilerlemesini tek panelde
birleştiren gösterge sayfası. Salt okuma (yeni localStorage anahtarı YOK):
`okul_done_*` (bitirilen konular), `sinavGecmisi` ve `karisikSkorlar` okunur.
Gösterilenler: bitirilen konu sayısı + ilerleme çubuğu, sınav ve karışık tekrar
başarı ortalaması, son 5 denemenin mini spark grafiği, son 3 denemenin trendi
(↗/→/↘ + puan farkı), toplam çözülen soru/deneme sayısı ("emek" göstergesi),
ve bitmemiş ilk konuya + zayıf ortalamaya göre hedefli "sıradaki adım" önerisi.
index'e öncü kart, sw.js önbelleğe (v2026-09-18c) ve sitemap'e eklendi.
Dayanak: kendi ilerlemesini gören öğrenci daha iyi öz-düzenleme yapar; dağınık
üç ayrı skor kaynağı tek karnede toplanınca çalışma yönü netleşir.
Test: tarayıcıda boş durum + enjekte veriyle dolu durum (3 konu, sınav 10/13/16
→20, karışık 5/7→8): sınav ort %65, karışık %75, trend ↗+30, 76 soru/5 deneme,
sıradaki konu "Karekök" — hepsi doğru. Python bağımsız hesap eşleşti, tag
dengesi (32/32 div) ve node --check geçti.

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

## TUR 6 (2026-09-18) — commit c93ae41
Yapılan: Yanlış Kutum (yanlis-kutum.html YENİ). Sınav ve karışık tekrarda yanlış
yapılan sorular localStorage 'yanlisKutum' anahtarında birikir; öğrenci sadece
hatalarını çözer, doğru yapınca soru kutudan çıkar, yanlışta kalır (hedefli
spaced-retrieval). Ortak API soru-bankasi.js'e eklendi (soruId / kutuOku / kutuYaz /
kutuyaEkle / kutudanCikar / kutuSorulari); soru kimliği "konu|metin", banka
sırasından bağımsız. sinav.html ve karisik-tekrar.html değerlendirmeye kutu
entegrasyonu aldı; index'e Yanlış Kutum kartı + dinamik sayaç rozeti; sitemap ve
sw.js (cache ...d) güncellendi. Mevcut anahtarlar (okulDone*, karisikSkorlar,
sinavGecmisi) değiştirilmedi; yalnız yeni anahtar eklendi.
Test: node --check + tag dengesi + API varlık (CLEAN); tarayıcıda gerçek akış —
yanlış cevap kutuda kalır, doğru cevap kutudan çıkar (2→1→0), boş kutu ekranı,
bitiş 2/2, index rozeti "1 soru" render.

## TUR 8 (2026-09-18) — soru bankası 72→96
Yapılan: Ortak soru bankası (soru-bankasi.js) 72'den 96 soruya çıkarıldı — her 12
konuya +2 yeni LGS tarzı soru (Çarpanlar, Üslü, Karekök, Veri, Olasılık, Cebir,
Denklemler, Eşitsizlikler, Üçgenler, Benzerlik, Dönüşüm, Cisimler). Her soruda
nedenli açıklama (işlem önceliği, üçgen eşitsizliği, iki kare farkı, eğim, orana
göre alan gibi LGS tuzakları vurgulandı). Sınav Modu, Karışık Tekrar ve Yanlış
Kutum aynı bankayı kullandığından üçü birden zenginleşti. Yeni localStorage
anahtarı yok; mevcut anahtarlar değişmedi. sw.js cache sürümü d→e.
Test: node --check + bütünlük betiği — 96 soru, 12 konu×8 tam denge, tekrar soru 0,
tüm d indeksleri 0-2 aralığında geçerli, şık tekrarı 0, 6 API fonksiyonu mevcut
(SONUÇ: CLEAN); her yeni sorunun matematiği elle hesaplanarak doğrulandı. (Tarayıcı
davranış testi canlı URL'de doğrulandı — file:// göreli yol banka yüklemiyor.)


## TUR 9 (2026-09-18) — klavye + erisilebilirlik
Yapilan: Sinav Modu ve Karisik Tekrar'a klavye kisayolu + erisilebilirlik.
Siklara numara rozeti (1/2/3) ve aria-label eklendi; sure sayacina aria-live.
Klavye: 1-9 tuslari sik secer (karisikta cevap kilidine saygi duyar), Enter/ok
sonraki soru/onaylar, sol-ok onceki soru (sinavda). Fare gerekmeden hizli cozum,
erisilebilirlik faydasi. Yeni localStorage anahtari yok; mevcut anahtarlar
degismedi. sw.js cache e->f.
Test: node ile JS gecerliligi + tag/button dengesi (sinav 5/5, karisik 3/3, CLEAN);
gercek tarayicida (localhost, prod yolu /okul-sitesi/) — sinav: banka 96, 2 tusu
2. siki secti, Enter sonraki, sol-ok onceki; karisik: 1 tusu cevabi degerlendirdi
(dogru sik + aciklama acildi), Enter sonraki soru (1/8->2/8).


## TUR 10 (2026-09-18) - Karnem: zayif konular karti
Yapilan: Karnem'e "Zayif konularin" karti eklendi. Yanlis Kutum'daki (yanlisKutum
anahtari) bekleyen sorular konu bazinda sayilip bar grafikle siralanir; en cok soru
olan konu barin basinda gorunur. "Sonraki adim" onerisi en zayif konuyu dogrudan
Yanlis Kutum'a yonlendirir. Kutu bossa kart gizli. Salt okuma - yeni localStorage
anahtari yok, mevcut anahtarlar (okulDone*, karisikSkorlar, sinavGecmisi, yanlisKutum)
degismedi. sw cache f->g. Commit bc1dc26.
Test: div/script/style tag dengesi OK (49/49, 1/1, 1/1), node --check JS gecerli;
node ile sayim/siralama davranisi GECTI (Ucgenler3>Cebir2>Karekok1, bar %100/67/33,
enZayif dogru); gercek tarayicida (localhost, prod yolu) kart render + bar genislikleri
100/67/33 + oneri en zayif konuyu bagladi (ekran goruntusuyle dogrulandi).
