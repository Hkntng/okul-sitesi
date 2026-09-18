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

## Tur (2. seri) — 2026-09-18
- karekok.html Kart 3'e interaktif sayi dogrusu eklendi: kaydiricyla karekok(n)
  (n=2..99) secilir, nokta iki komsu tam kare arasina canli oturur, hangisine yakin
  oldugu ve tam kare durumu aciklanir. Vanilla JS, mevcut tit()/tema degiskenleri.
  Yeni localStorage anahtari yok.
- sw.js cache surumu 18g->18h.
- Test: JS parse OK, sayi dogrusu n=2..99 oran 0-1 gecerli; tarayicida
  karekok(30)=5,48 / (80)=8,94-9'a yakin / (49)=7 tam kare / (2)=1,41 davranisi
  dogrulandi, ekran goruntusuyle.

## 2026-09-18 — TUR 1: oksuz sayfa linki + kalici test + eksik Kaynak (commit bekliyor)
Yapilan:
1. index.html: 2-sayinin-parmak-izi.html ve 5-ebob-ekok-secimi.html icin cikan
   iki yeni fayans karti eklendi (carpanlar/ebob-ekok kartlarinin hemen yaninda,
   ayni --k rengiyle, yeni stil icat edilmedi). sitemap.xml ve sw.js onbellek
   listesi zaten onceki bir turda guncellenmisti (dogrulandi); sw.js cache
   surumu yine de 18h->18i'ye alindi (index degisti).
2. YENI test/dogrula.js: `node test/dogrula.js` tek komutla calisir. Kapsam:
   soru-bankasi.js butunlugu (96 soru, 12 konu x8 esit dagilim, d 0-2, tekrar
   soru/sik yok, bos alan yok), 6 API fonksiyonu (soruId/kutuOku/kutuYaz/
   kutuyaEkle/kutudanCikar/kutuSorulari), tum .html'lerde div/script/style tag
   dengesi, index.html'den linksiz sayfa kontrolu, inline <script> JS gecerliligi
   (vm.Script ile derleme). Hata varsa Turkce mesaj + exit 1, temizse "CLEAN".
   Sahte bozuk dosyayla (dengesiz div + syntax hatali script + linksiz sayfa)
   3 hatayi da yakaladigi ayrica dogrulandi.
3. Kaynak satiri eksik 5 dosyadan index.html ve 404.html muaf; kalan 3'ten
   sinav.html ve yanlis-kutum.html'e mevcut sitede zaten kullanilan (baska
   sayfalarda gercekten var olan, uydurulmamis) atiflar eklendi: sinav.html ->
   Adesope, Trevisan & Sundararajan (2017) practice-testing meta-analizi (ayni
   atif nasil-calisilir.html'de zaten var, sinav = pratik test oldugu icin
   doğrudan ilgili); yanlis-kutum.html -> Cepeda vd. (2006) / retrievalpractice.org
   (ayni atif karisik-tekrar.html'de zaten var, yanlis sorulari araliklarla
   tekrar etmek = spaced retrieval). karnem.html ATLANDI: sayfa sadece
   ogrencinin kendi verisini gosteren bir panel, disaridan dogrulanabilir bir
   kazanim/arastirma iddiasi yok — uydurma kaynak eklenmedi.
Test: `node test/dogrula.js` -> CLEAN. Sandbox local HTTP server dinlemeyi
reddettigi icin (nice/bind izni yok) canli tarayici/390px testi bu turda
YAPILAMADI — statik dogrulama (tag dengesi + JS syntax + link kontrolu) ile
sinirli kalindi, bu acikca belirtiliyor.

## 2026-09-18 — TUR: Dönüşüm interaktif aracı + uydurma MEB kazanım kodları temizliği (commit 01cc753)
Yapılan:
1. donusum.html'e yeni interaktif SVG koordinat-düzlemi kartı (k4b) eklendi:
   sabit mavi üçgen (A,B,C), sekmeyle seçilen moda (öteleme / x eksenine
   yansıma / y eksenine yansıma) göre canlı güncellenen turuncu üçgen
   (A',B',C'); öteleme modunda dx/dy slider; her modda kural formülü ve
   nokta bazlı koordinat dönüşümü metni.
2. Subagent statik kod incelemesiyle KRİTİK bug buldu: sayfa sonundaki genel
   `.sekme` seçici (Hayatta-nerede sekmeleri için yazılmış eski script) yeni
   aracın 3 butonunu da yakalayıp onların click handler'ını eziyordu — X/Y
   yansıma sekmelerine tıklamak hiçbir şey yapmıyordu (konsol hatası
   vermediği için sinsi bir bug). Düzeltme: yeni aracın butonları ayrı
   `.donSekme` sınıfına alındı (aynı CSS görünümü korunarak), JS seçicileri
   `#donMod .donSekme` olarak scope edildi. Bu ayrıca k5'teki eski
   "Hayatta nerede" sekmelerinin index kaymasını da düzeltti (4 buton -
   4 elemanlı sekmeler dizisi artık doğru hizalı).
3. 9 dosyada (1-carpanlar, cebir, benzerlik, ebob-ekok, donusum, denklemler,
   karekok, ucgenler, uslu-ifadeler) "Gerçek Hayat Örneği" kartlarındaki
   uydurma "Kaynak: MEB 8.x.x — ..." kazanım kodları ve doğrulanamayan sayfa
   numarası atıfları ("MEB Matematik 8, s.12–18" gibi) kaldırıldı. Bu kodlar
   gerçek MEB kazanım formatıyla (M.8.x.x.x) eşleşmiyordu, TUR 2'de toplu
   bir boilerplate geçişinde eklenmiş, doğrulanmamış uydurma atıflardı —
   proje kuralı "doğrulayamıyorsan kazanım kodu yazma" gereği kaldırıldı.
4. sw.js cache sürümü 18i→18j (donusum.html değişti).
Test: `node test/dogrula.js` → CLEAN. Node ile transformasyon matematiği elle
doğrulandı: öteleme (dx=3,dy=2) A(-5,-5)→A'(-2,-3); x eksenine yansımada y
işareti, y eksenine yansımada x işareti ters dönüyor (doğrulandı).
Sandbox bu ortamda socket bind'i reddettiği için (`python3 -m http.server`
ve headless Chrome ikisi de `Operation not permitted` ile başarısız oldu —
hem ana oturumda hem test subagent'ında ayrıca doğrulandı) gerçek tarayıcı/
390px testi bu turda da YAPILAMADI; yalnız statik DOM/JS incelemesi ve elle
matematik doğrulamasıyla sınırlı kalındı — bu açıkça belirtiliyor.
PUSH DURUMU: `git push origin main` bu ortamda izin sistemi tarafından
reddedildi ("Claude requested permissions to use Bash, but you haven't
granted it yet" — 4 kez denendi, aynı hata), muhtemelen non-interactive
oturumda push için canlı kullanıcı onayı beklendiğinden. Commit 01cc753
YALNIZCA yerelde mevcut, origin/main'e gitmedi. Kullanıcının elle
`git push origin main` çalıştırması veya izni onaylaması gerekiyor.

## 2026-09-18 — TUR 3: "Gerçek Hayat Örneği" kartlarındaki içerik hataları (commit 1ab8dc1, push BEKLIYOR)
Yapılan: Önceki turlarda toplu eklenmiş "Gerçek Hayat Örneği" mini-kartları taranırken
5 gerçek hata bulundu ve düzeltildi:
1. 5-ebob-ekok-secimi.html — El-Cezerî kartında mojibake: Çince karakter (考虑) ve
   bozuk kitap adı ("El-Câmi' Büßeâti'l-Hiyaleb"). Doğru eser adıyla
   ("el-Câmi' Beyne'l-İlm ve'l-Amel en-Nâfi' fî Sınâati'l-Hiyel", web ile doğrulandı)
   değiştirildi.
2. olasilik.html — "Zar atma: 6 yielding 1/6" (Türkçe cümleye sızmış İngilizce kelime,
   anlamsız) düzgün Türkçe açıklamayla değiştirildi.
3. veri-analizi.html — "standart sapma≈1.67" iddiası elle hesaplandı: gerçek değer
   (popülasyon std) ≈1,62. Sayı düzeltildi.
4. esitsizlikler.html — kart, kaçışsız "<" karakterleri içeriyordu ("2x+5 < 11") ve
   konuyla ilişkisi zayıf, sayfanın geri kalanındaki zengin içerikle tutarsızdı.
   3 yeni, doğrulanmış, konuya uygun eşitsizlik örneğiyle (asansör kapasitesi,
   sepet ağırlığı, indirim eşiği) değiştirildi.
5. nasil-calisilir.html — kart iç içe tekrarlanmış (bozuk div yapısı, başlık iki kez).
   Tek karta indirildi. Doğrulanamayan "Zeno vd. (2020)" atfı web aramasıyla
   bulunamadı, kaldırıldı. Cirillo (2018) atfı doğru yayınevi (Virgin Books, Londra)
   ile düzeltildi. "mentale yorunmayı" yazım hatası giderildi.
sw.js değişmedi (cache sürümü sabit kaldı — bu turda önbelleklenen bir dosya
değişmedi, hepsi zaten sw.js listesinde olan sayfalar).
Test: `node test/dogrula.js` → CLEAN. Sandbox'ta socket bind izni yine reddedildi
(`python3 -m http.server` → PermissionError: Operation not permitted, iki kez
denendi) — gerçek tarayıcı/390px testi bu turda da YAPILAMADI, statik
doğrulama + elle matematik/kaynak kontrolüyle sınırlı kalındı.
PUSH DURUMU: `git push origin main` bu ortamda "Claude requested permissions to
use Bash, but you haven't granted it yet" hatasıyla reddedildi (2 kez denendi,
aynı hata) — commit 1ab8dc1 YALNIZCA yerelde mevcut, origin/main'e gitmedi.
Kullanıcının elle `git push origin main` çalıştırması gerekiyor.

## 2026-09-18 — TUR 4: Cisimler interaktif hacim hesaplayıcı (commit c4bb4d8, push BEKLIYOR)
Yapılan: cisimler.html (386→486 satır, en az geliştirilmiş konu sayfasıydı) k4b kartına
yeni interaktif araç eklendi: Prizma/Silindir/Koni/Piramit sekmeleri + taban
kenarı(a)/yarıçap(r) ve yükseklik(h) slider'ları (2-20 cm). Seçime göre SVG gövde
(dikdörtgen/silindir/üçgen siluet) ve hacim canlı güncelleniyor; formül metni ve
sonuç (cm³ + litre) gösteriliyor. Koni/piramit modunda aynı r,h ile silindir/prizma
hacmi de hesaplanıp "üçte bir" kuralı somut sayıyla karşılaştırılıyor.
Bug önleme: sekme butonları yeni `.cismSekme` sınıfıyla scope edildi (donusum.html'de
TUR öncesinde bulunan `.sekme` genel seçici çakışması hatasından ders alınarak) —
`querySelectorAll('.sekme')` (k5 "Hayatta nerede" kartı) bu yeni butonları YAKALAMIYOR,
grep ile doğrulandı.
sw.js cache sürümü 18j→18k (cisimler.html değişti).
Test: `node test/dogrula.js` → CLEAN. Node ile hacim formülleri elle doğrulandı
(prizma a=10,h=12 → 1200 cm³; silindir → 3768,0; koni → 1256,0 = silindirin tam
1/3'ü; piramit → 400,0 = prizmanın tam 1/3'ü — hepsi beklenenle eşleşti). Ayrıca
node ile: id çakışması yok, 4 <script> bloğu da vm.Script ile sözdizimi hatasız
derlendi, yeni elementlerin tüm id referansları (cismFormul/cismSonuc/cismKiyas/
cismA/cismH/cismAprefix) HTML'de karşılıklı doğrulandı.
Sandbox bu ortamda socket bind'i yine reddetti (`python3 -m http.server` →
"nice(5) failed: operation not permitted") — gerçek Chrome/390px testi bu turda da
YAPILAMADI, statik DOM/JS analizi + elle matematik doğrulamasıyla sınırlı kalındı.
PUSH DURUMU: `git push origin main` bu ortamda "Claude requested permissions to
use Bash, but you haven't granted it yet" hatasıyla 3 kez reddedildi — commit
c4bb4d8 YALNIZCA yerelde mevcut, origin/main'e gitmedi (önceki iki turda da aynı
engel yaşanmıştı). Kullanıcının elle `git push origin main` çalıştırması gerekiyor.

## 2026-09-18 — TUR 5: Üçgenler — interaktif üçgen eşitsizliği aracı (commit 58c5f67, push BEKLIYOR)
Yapılan: Konu taraması yapıldı, 12 konudan hangilerinin hâlâ statik SVG'yle
sınırlı kaldığı kontrol edildi (grep ile `<input type="range">` / interaktif
araç varlığı). ucgenler.html tamamen Pisagor'a odaklıydı; soru bankasında
("Üçgenler" konusu) sorulan "iki kenar 5 ve 9 ise üçüncü kenar hangisi
OLAMAZ?" sorusunun arkasındaki kural (üçgen eşitsizliği) sayfada HİÇ
öğretilmiyordu — quiz, hiç anlatılmamış bir konuyu ölçüyordu. k4 ile k5
arasına yeni k4b kartı eklendi: a/b/c için 3 ayrı slider (2-20 cm), SVG
üçgen canlı yeniden çiziliyor (kenar açısı kosinüs teoremiyle hesaplanıyor),
kural ihlal edilince (|a-b|<c<a+b sağlanmayınca) kenarlar birleşmiyor,
çizgi kırmızı/kesikli oluyor ve "Üçgen oluşmaz" mesajıyla izinli aralık
gösteriliyor. Özet kartına da kural eklendi.
Bug önleme: yeni id/class'lar (`ue` öneki: ueA/ueB/ueC/ueSvg/ueUcgen/
ueSlider/ueEtiket...) grep ile TAMAMEN benzersiz olduğu doğrulandı — k5'teki
eski genel `.sekme` seçicisiyle çakışma yok (donusum.html'de TUR'da bulunan
bug'dan ders alınarak kontrol edildi).
sw.js cache sürümü 18k→18l (ucgenler.html değişti).
Test: `node test/dogrula.js` → CLEAN. Node ile üçgen eşitsizliği/kosinüs
hesapları elle doğrulandı: a=5,b=9,c=10 → geçerli (aralık 4<c<14); a=5,b=9,
c=14 → sınırda geçersiz (cosA kenetlenip dejenere çizgi); a=5,b=9,c=6 →
geçerli; a=2,b=2,c=20 → geçersiz. Ayrıca node ile 4 `<script>` bloğu da
vm.Script ile sözdizimi hatasız derlendi.
Sandbox bu ortamda socket bind'i yine reddetti (`python3 -m http.server` →
"nice(5) failed: operation not permitted", hem shell arka planda hem Bash
`run_in_background` ile ayrıca denendi, ikisi de başarısız) — gerçek Chrome/
390px testi bu turda da YAPILAMADI, statik DOM/JS analizi + elle matematik
doğrulamasıyla sınırlı kalındı; bu açıkça belirtiliyor.
PUSH DURUMU: `git push origin main` bu ortamda "Claude requested permissions
to use Bash, but you haven't granted it yet" hatasıyla 2 kez reddedildi —
commit 58c5f67 YALNIZCA yerelde mevcut, origin/main'e gitmedi. Kullanıcının
elle `git push origin main` çalıştırması gerekiyor.

## 2026-09-18 — TUR 6: Benzerlik — interaktif gölge oranı hesaplayıcı (commit 3b5bb43, push BEKLIYOR)
Yapılan: 12 konu sayfası arasında hâlâ hiç `type="range"` interaktif aracı
olmayan sayfalar tarandı (grep); benzerlik.html (391 satır, en kısa konu
sayfası) tamamen statik soru-cevap kartlarından oluşuyordu. k1 (Thales gölge
yöntemi) kartından sonra yeni k1b kartı eklendi: çubuk boyu (0,5-3 m), çubuk
gölgesi (0,5-6 m) ve bina gölgesi (5-100 m) için 3 slider; oran = çubuk boyu
÷ çubuk gölgesi canlı hesaplanıp bina boyu = oran × bina gölgesi ile
gösteriliyor, SVG'de çubuk ve bina dikdörtgenleri orana göre yeniden
ölçekleniyor. Varsayılan slider değerleri (1,5 / 2 / 40) kasıtlı olarak k1
kartındaki statik örnekle aynı seçildi (sonuç 30 m, tutarlı).
Bug önleme: yeni id'ler `bo` önekiyle (boCubukBoy/boCubukGolgeS/boBinaGolgeS/
boSvg/boCubuk/boBina...) grep ile TAMAMEN benzersiz olduğu doğrulandı, sayfadaki
mevcut `.sekme`/`.oranSlider` genel seçicileriyle çakışma yok.
sw.js cache sürümü 18l→18m (benzerlik.html değişti).
Test: `node test/dogrula.js` → CLEAN. Node ile 4 `<script>` bloğu vm.Script
ile sözdizimi hatasız derlendi. Oran formülü elle doğrulandı: varsayılan
(1,5/2/40) → oran 0,75, bina 30 m (k1'deki statik örnekle eşleşiyor); uç
değerler (0,5/6/100) → oran 0,083, bina 8,33 m; (3/0,5/5) → oran 6, bina 30 m
— hepsi NaN/negatif üretmedi.
Sandbox bu ortamda socket bind'i yine reddetti (`python3 -m http.server` →
"PermissionError: Operation not permitted", $TMPDIR'a log yazarak ayrıca
denendi, aynı sonuç) — gerçek Chrome/390px testi bu turda da YAPILAMADI,
statik DOM/JS analizi + elle matematik doğrulamasıyla sınırlı kalındı.
PUSH DURUMU: `git push origin main` bu ortamda "Claude requested permissions
to use Bash, but you haven't granted it yet" hatasıyla 3 kez reddedildi
(git add/commit/status komutları çalıştı ama commit+push aynı çağrıda
birleştirilince TÜM komut bloke oldu; commit'i ayrı çağrıda tekrarlayınca
geçti, push tek başına yine reddedildi) — commit 3b5bb43 YALNIZCA yerelde
mevcut, origin/main'e gitmedi (son 6 turda aynı engel tekrarlanıyor).
Kullanıcının elle `git push origin main` çalıştırması veya izni onaylaması
gerekiyor.

## 2026-09-18 — TUR 7: Denklemler — interaktif terazi hesaplayıcı (commit e6f36c3, push BEKLIYOR)
Yapılan: 12 konu sayfası arasında hâlâ hiç `type="range"` interaktif aracı
olmayan sayfalar tarandı (grep): çarpanlar, veri-analizi, olasılık,
denklemler, eşitsizlikler, üslü-ifadeler — 6 sayfa. En kısası (405 satır)
olan denklemler.html seçildi. k2 ("Denklem bir terazidir") kartından sonra
yeni k2b kartı eklendi: a (1-9), b ve c (-15..15) slider'ları ile
"ax + b = c" denklemi canlı kuruluyor; adım 1'de b karşıya geçiriliyor
(ax = c−b), adım 2'de a'ya bölünüyor (x = (c−b)/a), sonuç ve
a×x+b=c kontrolü gösteriliyor. Ondalık x değerleri (örn. 3,33) virgüllü ve
gerekirse negatif işaretli (−) doğru biçimlendiriliyor.
Bug önleme: yeni id'ler `dz` öneki (dzA/dzB/dzC/dzAgoster/dzDenklem/
dzAdim1/dzAdim2/dzXSonuc/dzKontrol) grep ile TAMAMEN benzersiz olduğu
doğrulandı; slider CSS'i (.ueSlider/.ueEtiket) ucgenler.html'den aynen
alınıp bu sayfaya da eklendi (önceden yoktu).
sw.js cache sürümü 18m→18n (denklemler.html değişti).
Test: `node test/dogrula.js` → CLEAN. Node ile 4 `<script>` bloğu vm.Script
ile sözdizimi hatasız derlendi. Denklem çözümü elle doğrulandı: 3x+2=14→x=4;
5x−3=22→x=5; 7x+4=−10→x=−2; 9x−15=15→x=3,33 (ondalık) — hepsi a×x+b=c
kontrolüyle eşleşti, NaN/yanlış sonuç yok.
Sandbox bu ortamda socket bind'i yine reddetti (`python3 -m http.server` →
"nice(5) failed: operation not permitted", iki farklı şekilde denendi) —
gerçek Chrome/390px testi bu turda da YAPILAMADI, statik DOM/JS analizi +
elle matematik doğrulamasıyla sınırlı kalındı.
PUSH DURUMU: `git push origin main` bu ortamda "Claude requested
permissions to use Bash, but you haven't granted it yet" hatasıyla 2 kez
reddedildi — commit e6f36c3 YALNIZCA yerelde mevcut, origin/main'e gitmedi
(son 7 turda aynı engel tekrarlanıyor). Kullanıcının elle
`git push origin main` çalıştırması veya izni onaylaması gerekiyor.

## 2026-09-18 — TUR 8: Soru bankası 96 → 120 (konu başına 8 → 10)
Yapılan: soru-bankasi.js'e her konuya 2 yeni soru (toplam +24) eklendi; tümü
d:0 formatında, nedenli açıklamalı. Tüm sayılar elle hesaplandı: EKOK(12,18)=36,
72'nin 12 böleni, (3²)³=3⁶, 2⁻³=1/8, √18×√2=6, 3√5=√45, ortalama 8, mod 4,
asal zar 1/2, mavi bilye 2/5, 3(x+4)=3x+12, 2a+3a−a=4a, 4x−7=13→x=5,
x/3+2=6→x=12, 2x+3>11→x>4, −1≤x<5 tam sayı toplamı 9, üçgen 1<x<7→6,
6-8-10, oran 1/2→10, alan oranı 9, (2,−3), (4,2), 90π, küp yüzey alanı 96.
Yeni localStorage anahtarı YOK (soru kimliği konu|metin, mevcut yanlisKutum bozulmadı).
sw.js cache 18n→18o.
Test: `node test/dogrula.js` → CLEAN (eşit dağılım, tekrar yok, şık/indeks kontrolleri geçti).
Yapılamayan: Chrome/390px testi — sandbox Chrome'u başlatmayı reddetti
(crashpad/ProcessSingleton "Operation not permitted"). Değişiklik yalnızca veri
olduğu için sinav.html/karisik-tekrar.html kodu değişmedi; tarayıcıda deneme YAPILMADI.

## 2026-09-18 — TUR 9: Eşitsizlikler — interaktif sayı doğrusu aracı (commit 5d13a11, push BEKLIYOR)
Yapılan: esitsizlikler.html'e k2b kartı: <, ≤, >, ≥ butonları + sınır slider'ı (-5..9)
+ "denenen sayı" slider'ı (-6..10). Sayı doğrusunda boş/dolu nokta ve boyalı yön
canlı çiziliyor; sarı deneme noktası "sağlar/sağlamaz" sonucunu veriyor. "Takıldım,
göster" düğmesi kuralı açıklıyor. Yeni id'ler `is` önekli; kullanılan tüm CSS
sınıfları (isSecim, isSecimler, isSonuc, dcDeneme, ueSlider, ueEtiket, dc*) sayfada
tanımlı. Yeni localStorage anahtarı YOK. sw.js cache 18o→18p.
Test: `node test/dogrula.js` → CLEAN; 4 script vm.Script ile derlendi; araç mantığı
DOM taklidiyle Node'da denendi (x>3/5 ✓, x>3/3 ✗, x≥3/3 ✓, x≤−2/−2 ✓, x<−2/0 ✗;
konum yüzdeleri elle: 3→55,75%, −2→27%).
Yapılamayan: gerçek Chrome/390px testi (Chrome crashpad/ProcessSingleton "Operation
not permitted"). Push: `git push origin main` "Claude requested permissions to use
Bash" ile reddedildi; github.com ağı da sandbox'ta kapalı → origin/main'e gitmedi,
canlı doğrulama yapılamadı. Elle `git push origin main` gerekiyor.
