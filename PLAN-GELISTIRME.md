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

## 2026-09-18 — TUR 10: Olasılık — interaktif torba hesaplayıcı (commit 5279ad0, push BEKLIYOR)
Yapılan: olasilik.html'e k3b kartı: kırmızı/mavi/yeşil top sayısı slider'ları (0-8) + hedef renk
butonları; torba emoji ile çiziliyor (hedef renk parlak), P = n/t kesir + ondalık + yüzde ve
"çıkmama = 1 − P" canlı hesaplanıyor; 0 → "imkânsız", 1 → "kesin", boş torba uyarısı.
"Takıldım, göster" düğmesi kuralı açıklıyor. Yeni id'ler `ob` önekli; kullanılan tüm CSS
sınıfları tanımlı. Yeni localStorage anahtarı YOK. sw.js cache 18p→18q.
Test: `node test/dogrula.js` → CLEAN; 4 script vm.Script ile derlendi; araç mantığı Node'da DOM
taklidiyle denendi: 3/10=0,3=%30; 1/3≈0,33≈%33,3 (çıkmama 2/3≈0,67); 0/8→imkânsız;
3/3→kesin; 0 top→uyarı; 2/9≈0,22≈%22,2 (Python ile karşılaştırıldı).
Yapılamayan: gerçek Chrome/390px testi (Chrome crashpad "Permission denied", sandbox);
`git push origin main` "Claude requested permissions to use Bash" ile reddedildi → origin/main'e
gitmedi, canlı doğrulama yapılamadı. Elle `git push origin main` gerekiyor (TUR 7-10 bekliyor).

## 2026-09-18 — TUR 11: Üslü ifadeler — interaktif taban ve üs aracı (commit d58f2a5, push BEKLIYOR)
Yapılan: uslu-ifadeler.html'e k3b kartı: taban slider'ı (2–9) + üs slider'ı (−3..5). Pozitif üs
açılımla (3×3×3×3=81), 0 üs "= 1", negatif üs "1/3² = 1/9 ≈ 0,111" olarak canlı gösteriliyor.
"Takıldım, göster" düğmesi 81→27→9→3→1→1/3→1/9 örüntüsünü açıklıyor. Yeni id'ler `ub` önekli;
kullanılan CSS sınıfları sayfada tanımlı (ueSlider/ueEtiket/ubIfade bu turda eklendi).
Yeni localStorage anahtarı YOK. sw.js cache 18q→18r. Yeni konu sayfası açılmadı.
Test: `node test/dogrula.js` → CLEAN; ubHesapla Node'da denendi: 3^4=81, 2^0=1, 3^-2=1/9≈0,111,
9^5=59.049, 2^-3=1/8=0,125, 9^-3=1/729≈0,00137, 5^3=125 (Python ile eşleşti).
Yapılamayan: gerçek Chrome/390px testi (Chrome crashpad/ProcessSingleton "Operation not permitted");
`git push origin main` izin/ağ engeliyle yapılamadı, canlı doğrulama yok. Elle push gerekiyor (TUR 7-11).

## 2026-09-18 — TUR 12: Veri analizi — ortalama/ortanca/tepe değeri/açıklık aracı (commit df5ab86, push BEKLIYOR)
Yapılan: veri-analizi.html'e k4b kartı: 5 arkadaşın matematik neti (0–20) için 5 slider; sıralı çipler
(ortanca vurgulu), ortalama (toplam ÷ 5), ortanca (3. sıra), tepe değeri (yoksa "yok", çift tepe "3 ve 9")
ve açıklık canlı hesaplanıyor. Ortalama–ortanca farkı ≥2 ise uç değer uyarısı. "Takıldım, göster"
düğmesi tanımları ve 12,14,14,15,20 örneğini açıklıyor. Yeni id'ler `vb` önekli; kullanılan CSS sınıfları
(ueSlider, vbSatir, vbSira, vbChip, sonuc, btn2, gizli, kucuk, buyuk, hata) sayfada tanımlı.
Yeni localStorage anahtarı YOK. sw.js cache 18r→18s. Yeni konu sayfası açılmadı.
Test: `node test/dogrula.js` → CLEAN; araç mantığı Node'da DOM taklidiyle denendi, elle doğrulandı:
[12,14,14,15,20]→ort 15, ortanca 14, tepe 14, açıklık 8; [1..5]→3/3/yok/4; [0,0,20,20,20]→12/20/20/20;
[12,14,14,15,0]→11/14/14/15; [3,3,9,9,10]→6,8/9/"3 ve 9"/7.
Yapılamayan: gerçek Chrome/390px testi (crashpad/ProcessSingleton "Operation not permitted", HOME
değiştirilerek de denendi); push: `git push origin main` "Claude requested permissions to use Bash"
ile reddedildi → canlı doğrulama yapılamadı. Not: `git ls-remote` ile uzak main = b67d960 görüldü
(TUR 7-11 uzakta), yani yalnızca TUR 12 commit'leri bekliyor.

## 2026-09-18 — TUR 13: Karekök — a√b sadeleştirici aracı (araç + not tek commit, push BEKLIYOR)
Yapılan: karekok.html k4 kartına slider (2–200) ile çalışan sadeleştirici: en büyük tam kare böleni bulur,
"72 = 36 × 2 → 6√2", tam kareyse tam sonuç, sadeleşmiyorsa "sadeleşmez" der. "Takıldım, göster" düğmesi
yöntemi açıklar. Yeni id'ler `kb` önekli; CSS sınıfları tanımlı (kbEtiket eklendi). Yeni localStorage
anahtarı YOK. sw.js cache 18s→18t. Yeni konu sayfası açılmadı.
Test: `node test/dogrula.js` → CLEAN; script'ler vm.Script ile derlendi; mantık Node'da doğrulandı
(k√m ile √n farkı 0: 72→6√2, 50→5√2, 18→3√2, 200→10√2, 45→3√5, 180→6√5, 150→5√6; 16→4, 13/2→sadeleşmez).
Yapılamayan: gerçek Chrome/390px testi (crashpad "Operation not permitted", sandbox); push: izin verilmedi
("Claude requested permissions to use Bash"), github.com sandbox'ta kapalı → canlı doğrulama yapılamadı.
Elle `git push origin main` gerekiyor (TUR 12 + 13 bekliyor).

## 2026-09-18 — TUR 14: Cebir — (a+b)² interaktif alan aracı (commit 4494f06, push BEKLIYOR)
Yapılan: cebir.html'e k3b kartı: a ve b slider'ları (1–12); oranlı 2×2 alan gridi (a², iki ab, b²), canlı toplam
(a+b)² ve "a²+b² yanlış → 2ab eksik" karşılaştırması. "Takıldım, göster" düğmesi yöntemi a=6,b=3 örneğiyle açıklar.
Yeni id'ler `cb` önekli; kullanılan CSS sınıfları tanımlı (kontrol edildi). Yeni localStorage anahtarı YOK.
sw.js cache 18t→18u. Yeni konu sayfası açılmadı. Diğer 11 konuda zaten interaktif araç var; cebirde (a+b)² statikti.
Test: `node test/dogrula.js` → CLEAN; script'ler vm.Script ile derlendi; elle: a=6,b=3 → 36+18+18+9=81=9² (a²+b²=45, 36 eksik).
Yapılamayan: gerçek Chrome/390px testi (crashpad/ProcessSingleton "Operation not permitted", sandbox);
push: "Claude requested permissions to use Bash" ile reddedildi, github.com sandbox'ta kapalı → canlı doğrulama yok.
Elle `git push origin main` gerekiyor (TUR 12-14 bekliyor).

## 2026-09-19 — TUR 15: Soru bankası 120→144 (commit 9a0cf41, push BEKLIYOR)
Yapılan: soru-bankasi.js'e her 12 konuya 2 yeni soru (24 soru) eklendi; mevcut sorulara dokunulmadı
(soruId = konu|metin olduğundan öğrencilerin yanlisKutum kaydı korunur). Doğru şık dağılımı 48/46/50.
sinav.html (20 soru) ve karisik-tekrar.html (8 soru) bankadan rastgele çektiği için kod değişmedi.
Yeni localStorage anahtarı YOK. sw.js cache 18u→18v (soru-bankasi.js önbellekte; sürüm artmazsa
öğrenciler eski bankayı görür).
Test: `node test/dogrula.js` → CLEAN (konu başına eşit 12, tekrar eden soru/şık yok). Sayısal iddialar
Node'da yeniden hesaplandı: 36'nın 9 böleni, EBOB(30,45)=15, 4000+500, 75=25·3, 48÷3=16, ortalama farkı 2,
2100÷30=70, 6/10, iki zarda 12 → 1/36, 3(x+2)=21→5, −3..2 arası 6 tam sayı, 80°, 6-8-10 alan 24,
4·9=36, 12·50=6 m, koni 20, prizma yüzeyi 94, a²+b²=49−24=25.
Yapılamayan: gerçek Chrome/390px testi (crashpad "Permission denied", sandbox); push: "Claude requested
permissions to use Bash" ile reddedildi → canlı doğrulama yok. Elle `git push origin main` gerekiyor
(TUR 12-15 bekliyor olabilir).

## 2026-09-19 — TUR 16: EBOB-EKOK — "Balon dağıtımı" gerçek hayat senaryosu (push BEKLIYOR)
Yön değişikliği: soru/araç yerine gerçek hayat senaryosu. ebob-ekok.html'in EN ÜSTÜNE 4 adımlı, "Devam et" düğmeli kart eklendi
(mevcut kartlar/araçlar aynen duruyor; yeni localStorage anahtarı YOK).
Senaryo: kermes sonrası 24 kırmızı + 36 sarı balon; her çocuğa aynı sayıda kırmızı ve sarı, hiç balon artmasın.
1) Hikâye + 5 çocuğu dene → kırmızıdan 4, sarıdan 1 artar (artanlar kırmızı yanıp söner).
2) 2–15 arası her sayıyı dene, tutan yeşil/tutmayan kırmızı; 5 tutan sayıyı (2, 3, 4, 6, 12) çocuk kendisi bulur (6 denemeden sonra "birini göster").
3) "En çok kaç çocuğa?" → 12 (her çocuğa 2 kırmızı + 3 sarı).
4) Terim EN SONDA: 24 ve 36'nın bölenleri yan yana, ortaklar yeşil, en büyük turuncu → "ortak bölen", EBOB(24,36)=12;
   sonra 5-ebob-ekok-secimi ve karışık tekrar linkleri.
Doğrulama (Node): ortak bölenler 1,2,3,4,6,12; 5→4/1, 7→3/1, 8→0/4, 13→11/10, 15→9/6 artar; EBOB=12.
DOM taklidiyle 4 adım akışı çalıştırıldı. Bulunan hata (düzeltildi): hepsi bulunduktan sonra tutmayan sayı yine
yeşil "hepsini buldun" gösteriyordu.
sw.js cache 18w→19a. `node test/dogrula.js` → CLEAN.
Yapılamayan: gerçek tarayıcı/390px görsel testi (sandbox); yerleşim CSS'ten kurgulandı, elle bakılmalı.
Push: Bash izni verilmedi → elle `git push origin main` gerekiyor.

## 2026-09-19 — TUR 17: Benzerlik — "Fotoğraf büyütme" gerçek hayat senaryosu
Konu: TUR 16 EBOB-EKOK'u yaptığı için benzerlik.html seçildi (fotoğraf büyütme = en somut benzerlik karşılığı).
benzerlik.html'in EN ÜSTÜNE 4 adımlı, "Devam et" düğmeli kart eklendi (mevcut kartlar/araçlar aynen duruyor;
yeni localStorage anahtarı YOK; yeni sınıflar `fb*` aynı dosyada tanımlı).
Senaryo: 6×4 cm sınıf fotoğrafı, duvar için genişlik 18 cm olacak.
1) Arkadaş "yüksekliğe de 12 ekle" der → 18×16 çıkar, gülen yüz uzar (genişlik 3 katı, yükseklik 4 katı).
2) Yüksekliği 8/10/12/14/16 arasından çocuk seçer; yalnız 12 tutar (yeşil), diğerleri basık/uzamış (kırmızı). 3 yanlıştan sonra ipucu.
3) Genişlik 9/12/24/30 seç → yüksekliği 3 seçenekten TAHMİN et (asıl 4, doğru kat, "ekleme" tuzağı); doğru → ikisi aynı kat.
4) Terim EN SONDA: "her kenar aynı sayıyla çarpıldı" = benzerlik oranı/ölçek, benzer; #k6 soruları + karışık tekrar linkleri.
Çocuğun keşfi: toplayarak büyütmek şekli bozar; bozulmasın diye genişlik kaç katıysa yükseklik de o kat olmalı.
Doğrulama (Node): 6→18=3 kat; 4+12=16=4 kat (bozuk); 12=4×3; 9→6 (1,5), 12→8 (2), 24→16 (4), 30→20 (5), ekleme tuzakları 7/10/22/28.
Sahte DOM ile 4 adım akışı (kilit, ipucu, doğru/yanlış, geri dönüş) çalıştırıldı: hepsi geçti.
sw.js cache 19a→19b. `node test/dogrula.js` → CLEAN.
Yapılamayan: gerçek tarayıcı/390px görsel testi (sandbox); en geniş sahne ~306px hesaplandı (390px'te 310px kullanılabilir), elle bakılmalı.
Commit/push: Bash izni verilmedi → elle commit + `git push origin main` gerekiyor (commit hash'i bu nedenle yazılamadı).

## 2026-09-19 — TUR 18: Olasılık — "Kermes çekiliş kutuları" gerçek hayat senaryosu
Konu: EBOB-EKOK (TUR 16) ve benzerlik (TUR 17) yapıldığı için olasilik.html seçildi (çekiliş = çocuğun en somut şans deneyimi).
olasilik.html'in EN ÜSTÜNE (k1'in önüne) 4 adımlı, "Devam et" düğmeli kart eklendi (mevcut kartlar/araçlar aynen duruyor;
yeni localStorage anahtarı YOK; yeni sınıflar `sn*` aynı dosyada tanımlı).
Kutular (altın kağıt = hediye): A 12 kağıt/3 altın, B 5/2, C 20/4, D 8/6.
1) Üç kutudan "şansın en yüksek olan hangisi" tahmini (yanlış/doğru yok, tahmin kaydedilir).
2) "100 çocuk çeksin" → çubuklar dolar: A ≈25, B ≈40, C ≈20 kişi; B yeşil. En çok altın C'de ama şans B'de (tahmin tuttu/tutmadı geri bildirimi).
3) Yeni D kutusu (8 kağıt, 6 altın): 100 çocukta kaç kişi? 6 / 25 / 75 — tuzaklar: altın sayısı (6), boş oranı (25); her yanlışa özel ipucu.
4) Terim EN SONDA: 4 kutu tablosu (altın/tüm = sadeleşmiş = yüzde), "olasılık", 0 = imkânsız, 1 = kesin; #k6 soruları + karışık tekrar linkleri.
Çocuğun keşfi: şans altın kağıdın sayısına değil, tüm kağıtlar içindeki oranına bağlı (C'de en çok altın var ama şans en düşük).
Doğrulama (Node): 3/12=%25, 2/5=%40, 4/20=%20, 6/8=%75. Sahte DOM ile akış (tahmin, 100 çocuk, 2 yanlış + doğru, ileri/geri, kilitler) çalıştırıldı.
sw.js cache 19b→19c. `node test/dogrula.js` → CLEAN.
Yapılamayan: gerçek tarayıcı/390px görsel testi (sandbox); 3 kutu ≈98px genişlikte, 4 sütun×16px ızgara sığacak şekilde hesaplandı, elle bakılmalı.
Commit/push: Bash izni verilmedi → elle commit + `git push origin main` gerekiyor (hash yazılamadı).

## 2026-09-19 — TUR 19: Denklemler — "Kumbara ve kulaklık" gerçek hayat senaryosu
Konu: EBOB-EKOK, benzerlik, olasılık daha önce yapıldığı için denklemler.html seçildi (harçlık/kumbara = sabit + haftalık artış, y = mx + n'in çocuk dili).
denklemler.html'in EN ÜSTÜNE (k1'in önüne) 4 adımlı, "Devam et" düğmeli kart eklendi (mevcut kartlar/araçlar aynen duruyor;
yeni localStorage anahtarı YOK; yeni sınıflar `kb*` aynı dosyada tanımlı).
Senaryo: kumbarada 40 TL, her cumartesi +15 TL, kulaklık 130 TL.
1) "Bir hafta geçsin" düğmesiyle haftaları çocuk geçirir; çubuk hafta hafta dolar, "kulaklığa X TL kaldı" yazar; 6. haftada 130 TL'de yeşil olur.
2) 10. hafta kaç TL? (150 / 190 / 550). 150 = 40'ı unutmak, 550 = 40'ı da 10 ile çarpmak; her yanlışa özel ipucu. Doğruda 1–10. hafta tablosu açılır.
3) Kumbara 100 TL: kaç hafta? Önce "ne yapmalısın" (100'ü böl / 40'ı çıkar / 40 ekle → yanlışlara ipucu), sonra 60 TL = kaç haftalık (3/4/5); çubuk 40 + 4 blok olur.
4) Terim EN SONDA: terazi dili (−40 iki taraftan, ÷15 iki taraftan) → "denklem çözmek", y = 15x + 40 (15 = her hafta artış, 40 = baştan); #k6 (5 soru) + karışık tekrar linkleri.
Çocuğun keşfi: başlangıçtaki para bir kez sayılır, haftalık para her hafta eklenir; hafta sayısını bulmak için önce başlangıcı ayırıp sonra haftalığa bölmek gerekir.
Doğrulama (Node): 40+15h = 55,70,85,100,115,130,145,160,175,190 (h=1..10); (130−40)/15=6; (100−40)/15=4; tuzaklar 15×10=150, (40+15)×10=550; 3 hf=45, 5 hf=75.
Sahte DOM ile 4 adım akışı (kilitler, her yanlış ipucu, doğrular, geri dönüş) çalıştırıldı: 34/34 kontrol geçti.
sw.js cache 19c→19d. `node test/dogrula.js` → CLEAN.
Yapılamayan: gerçek tarayıcı/390px görsel testi (Chrome sandbox'ta profil dizinine yazamadığı için açılmadı); 390px'te sahne ~310px, 15 TL bloğu ≈24px, 5 sütunlu tablo hücresi ≈58px olarak hesaplandı, elle bakılmalı.

## 2026-09-19 — TUR 20: Üslü ifadeler — "Sınav ertelendi! Mesaj zinciri" gerçek hayat senaryosu
Konu: EBOB-EKOK, benzerlik, olasılık, denklemler yapıldığı için uslu-ifadeler.html seçildi (mesajın yayılması = çocuğun en bildik "katlanarak büyüme" deneyimi; sayfadaki kâğıt katlama kartıyla çakışmaz: taban 3, farklı bağlam).
uslu-ifadeler.html'de kağıt katlama kartının (k1) ÖNÜNE 4 adımlı, "Devam et" düğmeli kart eklendi (mevcut kartlar/araçlar aynen duruyor;
yeni localStorage anahtarı YOK; yeni sınıflar `mz*` aynı dosyada tanımlı).
Senaryo: haberi ilk sen duydun, duyan herkes bir sonraki turda 3 yeni arkadaşına yazıyor.
1) "Bir tur geçsin" düğmesiyle çocuk 4 turu kendisi geçirir; nokta satırları 3, 9, 27, 81 kişi; her satırda "27 × 3 = 81".
2) 5. turda kaç kişi? (15 / 243 / 125). 15 = 3×5 tuzağı, 125 = 5³ tuzağı; her yanlışa özel ipucu. Doğruda 1–5. tur tablosu.
3) Herkes 2 kişiye yazsaydı 5. turda kaç kişi? (10 / 25 / 32). Aynı keşfi yeni tabanda uygular; tablo 2, 4, 8, 16, 32.
4) Terim EN SONDA: 3×3×3×3×3 = 3⁵ = 243, 2⁵ = 32; taban = herkes kaç kişiye yazıyor, üs = kaç kez çarpıldı; 3⁵ ≠ 3×5. #k7 (5 soru) + karışık tekrar linkleri.
Çocuğun keşfi: her turda sayı öncekinin katı olarak büyür; "kaç kez çarpıldığı" (üs) ile "kaçla çarpıldığı" (taban) ayrı şeyler.
Doğrulama (Node): 3^1..5 = 3, 9, 27, 81, 243; 2^1..5 = 2, 4, 8, 16, 32; tuzaklar 15, 125, 10, 25; 243 > 7×32 = 224.
Sahte DOM akış testi: 16 kontrol geçti, 1 başarısızlık test kodundaki sayaç hatasıydı (nokta sayısı 121 elle doğrulandı).
sw.js cache 19d→19e. `node test/dogrula.js` → CLEAN.
Yapılamayan: gerçek tarayıcı/390px görsel testi (sandbox), elle bakılmalı. Commit/push: Bash izni reddedildi → elle yapılmalı.

## 2026-09-19 — TUR 21: Veri analizi — "Harçlık eşitleme ve Mert'in 200 TL'si" gerçek hayat senaryosu
Konu: EBOB-EKOK, benzerlik, olasılık, denklemler, üslü ifadeler yapıldığı için veri-analizi.html seçildi (harçlık = ortalama/ortanca farkının en bildik hayat karşılığı).
veri-analizi.html'de k1'in ÖNÜNE 4 adımlı, "Devam et" düğmeli kart eklendi (mevcut kartlar/araçlar aynen duruyor; yeni localStorage anahtarı YOK; yeni sınıflar `vs*` aynı dosyada tanımlı).
Senaryo: 5 arkadaşın harçlığı farklı, eşitlemek istiyorlar.
1) "10 TL aktar" düğmesi: en çoktan en aza 10 TL geçer (çubuklar hareket eder, veren kırmızı/alan yeşil yanıp söner); 20,30,30,40,80 → 4 aktarmada hepsi 40 TL. Toplam hep 200.
2) Yeni grup 30,40,50,60,70: eşitlenirlerse herkeste kaç TL? (30 / 50 / 250). 250 = toplam, 30 = en az tuzağı; her yanlışa özel ipucu.
3) Mert 200 TL aldı (20,30,30,40,200): eşit pay 64 TL; "64'ten fazlası olan kaç kişi?" (1/3/5), sonra "sınıfın genelde harçlığı?" (30 / 64). Ortadaki çubuk turuncu.
4) Terim EN SONDA: 5 kişide eşit pay 320÷5=64, ortadaki 30; Mert çıkınca 120÷4=30, ortadaki 30 → ortalama / ortanca adları; #k6, #k4b, karışık tekrar linkleri.
Çocuğun keşfi: eşit paylaşınca herkese düşen sayı = toplam ÷ kişi; tek bir uç değer bu sayıyı çok oynatır ama "ortadaki" değişmez.
Doğrulama (Node): 200/5=40; 250/5=50; 320/5=64; 120/4=30; 64'ten büyük sayı adedi=1; 4 aktarma simülasyonu ile 40 eşitliği. Sahte DOM akış testi (kilitler, yanlış ipuçları, geri dönüş): 16/16 kontrol geçti.
sw.js cache 19e→19f. `node test/dogrula.js` → CLEAN.
Yapılamayan: gerçek tarayıcı/390px görsel testi (sandbox); satır düzeni (52px ad + esnek çubuk + 52px değer) 390px'e göre hesaplandı, elle bakılmalı.

## 2026-09-19 — TUR 22: Cisimler — "Su sebilindeki koni bardak" gerçek hayat senaryosu
Konu: cisimler.html seçildi (sebil bardağı = koninin en bildik hayat karşılığı; "koni = silindirin üçte biri" elle deneyerek görülür). Eşitsizlikler sayfası radar oyunuyla zaten hayat odaklı olduğu için sona bırakıldı.
cisimler.html'de k1'in ÖNÜNE 4 adımlı, "Devam et" düğmeli kart eklendi (mevcut kartlar/araçlar aynen duruyor; yeni localStorage anahtarı YOK; yeni sınıflar `mk*` aynı dosyada tanımlı).
Senaryo: sebilin yanında koni kâğıt bardak ve normal bardak var, ikisi aynı genişlikte ve boyda.
1) "Sebil bardağını boşalt" düğmesi: su normal bardağa geçer (seviye 1/3, 2/3, tam); 3. boşaltmada bardak yeşil yanar. Çocuk kaç bardak gerektiğini kendisi sayar.
2) Normal bardak 300 mL: sebil bardağı kaç mL? (100 / 150 / 900). 150 ve 900 tuzak; her yanlışa özel ipucu. Doğruda bardakta üç dilim "100 mL".
3) Sürahide 900 mL: kaç kişiye birer sebil bardağı? (3 / 9 / 27). 3 = normal bardakla hesap, 27 = sürahiden çok su; doğruda 9 mini koni belirir.
4) Terim EN SONDA: normal bardak = silindir, sebil bardağı = koni; "aynı genişlik ve boyda koni silindirin üçte biri". #k6, #k4b, karışık tekrar linkleri.
Çocuğun keşfi: aynı genişlik ve boydaki koni silindirin üçte biri kadar su alır (3 koni = 1 silindir); bunu yeni bir sayıya (900 mL) kendisi uygular.
Doğrulama (Node): 300÷3=100; 900÷100=9; 900÷300=3; 27×100=2700; 3×3=9. Sahte DOM akış testi: 24/24 kontrol geçti. sw.js cache 19g→19h. `node test/dogrula.js` → CLEAN.
Yapılamayan: gerçek tarayıcı/390px görsel testi (sandbox); sahne ≈244px genişlik hesaplandı, elle bakılmalı. Bardak ölçüleri (aynı genişlik/boy, 300 mL) varsayımdır.
