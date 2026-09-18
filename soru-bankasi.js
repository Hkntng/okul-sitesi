// Ortak soru bankası — karisik-tekrar.html ve sinav.html birlikte kullanır.
// Her soru: k=konu, s=soru metni, c=şıklar, d=doğru şık indeksi, a=nedenli açıklama.
// Matematiksel doğruluk elle hesaplanarak doğrulanmıştır.
window.SORU_BANKASI = [
 {k:"Çarpanlar",s:"60 sayısının asal çarpan gösterimi hangisi?",c:["2²×3×5","2×3×10","4×15"],d:0,a:"60=2×2×3×5. 10 ve 15 asal değildir, dallanmaya devam edilir."},
 {k:"Çarpanlar",s:"EBOB(24,36) kaçtır?",c:["6","72","12"],d:2,a:"24=2³×3, 36=2²×3². Ortak asalların küçük üsleri: 2²×3=12. 72 ise EKOK'tur."},
 {k:"Üslü İfadeler",s:"2⁵ × 2³ işleminin sonucu hangisine eşittir?",c:["2¹⁵","2⁸","4⁸"],d:1,a:"Tabanlar aynıysa üsler toplanır: 5+3=8. Üsler çarpılmaz, tabanlar da çarpılmaz."},
 {k:"Üslü İfadeler",s:"0,00042 sayısının bilimsel gösterimi?",c:["42×10⁻⁵","4,2×10⁴","4,2×10⁻⁴"],d:2,a:"Katsayı 1≤a<10 olmalı: 4,2. Virgül 4 basamak sağa gitti → 10⁻⁴."},
 {k:"Karekök",s:"√50 ifadesinin a√b biçimi hangisi?",c:["5√2","2√5","25√2"],d:0,a:"50=25×2 → √50=√25×√2=5√2."},
 {k:"Karekök",s:"√30 hangi iki doğal sayı arasındadır?",c:["4 ile 5","5 ile 6","6 ile 7"],d:1,a:"5²=25 < 30 < 36=6². Yani 5 ile 6 arasında."},
 {k:"Veri Analizi",s:"5, 7, 7, 9, 12 verisinin medyanı (ortanca) kaçtır?",c:["9","7","8"],d:1,a:"Sıralı 5 elemanın ortasındaki (3.) değer 7'dir. 8 aritmetik ortalamadır."},
 {k:"Veri Analizi",s:"Hangi grafik, bütünün parçalarını göstermek için en uygundur?",c:["Daire grafiği","Çizgi grafiği","Histogram"],d:0,a:"Daire grafiği yüzde/pay gösterir. Çizgi zamana bağlı değişim, histogram gruplandırılmış veri içindir."},
 {k:"Olasılık",s:"Bir zar atılıyor. Asal sayı gelme olasılığı kaçtır?",c:["2/6","3/6","4/6"],d:1,a:"Zarda asallar: 2, 3, 5 → 3 tane. Olasılık 3/6=1/2. (1 asal değildir!)"},
 {k:"Olasılık",s:"Bir torbada 3 kırmızı, 5 mavi top var. Kırmızı çekme olasılığı?",c:["3/8","3/5","5/8"],d:0,a:"Toplam 8 top, istenen 3 → 3/8. Payda her zaman TÜM durumlardır."},
 {k:"Cebir",s:"(x+3)² özdeşliğinin açılımı hangisi?",c:["x²+9","x²+6x+9","x²+3x+9"],d:1,a:"(a+b)²=a²+2ab+b². Orta terim 2·x·3=6x unutulmaz!"},
 {k:"Cebir",s:"x²−16 ifadesinin çarpanlara ayrılmış hâli?",c:["(x−4)²","(x−8)(x+2)","(x−4)(x+4)"],d:2,a:"İki kare farkı: a²−b²=(a−b)(a+b). 16=4²."},
 {k:"Denklemler",s:"3x−7=8 denkleminde x kaçtır?",c:["5","3","15"],d:0,a:"3x=15 → x=5. Önce sabit karşıya atılır, sonra bölünür."},
 {k:"Denklemler",s:"y=2x+1 doğrusunun eğimi kaçtır?",c:["1","2","3"],d:1,a:"y=mx+n biçiminde m eğimdir → 2. Sabit terim 1, y eksenini kestiği yerdir."},
 {k:"Eşitsizlikler",s:"−2x > 6 eşitsizliğinin çözümü hangisi?",c:["x > −3","x < 3","x < −3"],d:2,a:"Negatifle bölünce eşitsizlik YÖN DEĞİŞTİRİR: x < −3. En sık yapılan hata!"},
 {k:"Eşitsizlikler",s:"'En az 12' ifadesinin matematik dili hangisi?",c:["x > 12","x ≥ 12","x ≤ 12"],d:1,a:"'En az' alt sınırı DAHİL eder → ≥. 'den fazla' olsaydı > olurdu."},
 {k:"Üçgenler",s:"Kenarları 3, 4, 5 olan üçgen için hangisi doğrudur?",c:["Eşkenar üçgendir","Dik üçgendir","Üçgen oluşmaz"],d:1,a:"3²+4²=9+16=25=5² → Pisagor sağlanır, dik üçgendir."},
 {k:"Üçgenler",s:"Bir üçgende iki kenar 5 ve 9 ise üçüncü kenar hangisi OLAMAZ?",c:["14","6","10"],d:0,a:"Üçüncü kenar |9−5|=4 ile 9+5=14 ARASINDA olmalı (uçlar hariç). 14 olamaz."},
 {k:"Benzerlik",s:"Benzerlik oranı 2/3 olan üçgenlerde küçüğün çevresi 12 ise büyüğünki kaç?",c:["8","18","24"],d:1,a:"Çevreler de benzerlik oranındadır: 12÷(2/3)=18."},
 {k:"Benzerlik",s:"Eş üçgenler için hangisi her zaman doğrudur?",c:["Sadece açıları eşittir","Kenarları orantılıdır ama eşit değildir","Alanları eşittir"],d:2,a:"Eşlik = tüm kenar ve açılar eşit → alanlar da eşit. Benzerlikte ise oran vardır."},
 {k:"Dönüşüm",s:"A(3,−2) noktasının x eksenine göre yansıması hangisi?",c:["(3,2)","(−3,−2)","(−3,2)"],d:0,a:"x eksenine göre yansımada x aynı kalır, y işaret değiştirir."},
 {k:"Dönüşüm",s:"Bir şekil 5 birim sağa ötelenirse hangisi değişir?",c:["Boyutu","Konumu","Açıları"],d:1,a:"Öteleme sadece konum değiştirir; boyut, açı ve biçim korunur."},
 {k:"Cisimler",s:"Taban yarıçapı 3, yüksekliği 5 olan silindirin hacmi kaç π'dir?",c:["45π","30π","15π"],d:0,a:"V=πr²h=π×9×5=45π. Önce yarıçapın KARESİ alınır."},
 {k:"Cisimler",s:"Bir dik prizmanın hacmi neye eşittir?",c:["Taban çevresi × yükseklik","Tüm yüzey alanları toplamı","Taban alanı × yükseklik"],d:2,a:"Hacim = taban alanı × yükseklik. Çevre×yükseklik yanal alanı verir."},
 {k:"Çarpanlar",s:"İki asal sayının EBOB'u kaçtır? (sayılar farklı)",c:["2","1","Kendileri"],d:1,a:"Farklı asalların ortak çarpanı yoktur → EBOB=1. Böyle sayılara aralarında asal denir."},
 {k:"Çarpanlar",s:"EKOK(12,18) × EBOB(12,18) çarpımı neye eşittir?",c:["12+18","12×18","EKOK²"],d:1,a:"İki sayının EKOK×EBOB çarpımı her zaman sayıların çarpımına eşittir: 36×6=216=12×18."},
 {k:"Üslü İfadeler",s:"(2³)⁴ işleminin sonucu hangisi?",c:["2¹²","2⁷","8⁴"],d:0,a:"Üssün üssü alınırken üsler ÇARPILIR: 3×4=12. Toplanmaz!"},
 {k:"Üslü İfadeler",s:"5⁰ + 3⁻¹ işleminin sonucu kaçtır?",c:["4/3","1/3","0"],d:0,a:"5⁰=1 (sıfırıncı kuvvet 1'dir), 3⁻¹=1/3 → 1+1/3=4/3."},
 {k:"Karekök",s:"3√2 + 5√2 işleminin sonucu hangisi?",c:["8√4","15√2","8√2"],d:2,a:"Kök içleri aynıysa katsayılar toplanır: 3+5=8 → 8√2. Kökler çarpılmaz!"},
 {k:"Karekök",s:"√12 × √3 işleminin sonucu kaçtır?",c:["√15","6","36"],d:1,a:"Çarpımda kök içleri çarpılır: √36=6. Toplama sanıp √15 yapma!"},
 {k:"Veri Analizi",s:"8, 3, 5, 12, 7 verisinin açıklığı kaçtır?",c:["5","7","9"],d:2,a:"Açıklık = en büyük − en küçük = 12−3 = 9."},
 {k:"Veri Analizi",s:"Bir sınıfın not ortalaması 70. Herkese 5 puan eklenirse ortalama ne olur?",c:["75","70","72,5"],d:0,a:"Her veriye sabit eklenirse ortalama da o kadar artar: 70+5=75."},
 {k:"Olasılık",s:"Bir madeni para 2 kez atılıyor. İkisinin de tura gelme olasılığı?",c:["1/2","2/4","1/4"],d:2,a:"Bağımsız olaylar çarpılır: 1/2 × 1/2 = 1/4. (TT, TY, YT, YY → 4 durumdan 1'i)"},
 {k:"Olasılık",s:"Kesin olayın olasılığı kaçtır?",c:["1","0","1/2"],d:0,a:"Kesin olay mutlaka gerçekleşir → olasılığı 1. İmkânsız olay 0'dır."},
 {k:"Cebir",s:"x²+8x+16 ifadesi hangisinin açılımıdır?",c:["(x+4)²","(x+8)²","(x+2)(x+8)"],d:0,a:"Tam kare: orta terim 2·x·4=8x, sabit 4²=16 → (x+4)²."},
 {k:"Cebir",s:"3(2x−4) ifadesinin eşiti hangisi?",c:["6x−4","5x−7","6x−12"],d:2,a:"Dağılma: 3 HER terimle çarpılır: 3·2x−3·4=6x−12."},
 {k:"Denklemler",s:"x/3 + 2 = 7 denkleminde x kaçtır?",c:["5","27","15"],d:2,a:"x/3=5 → x=15. Önce 2 karşıya, sonra 3 ile çarp."},
 {k:"Denklemler",s:"(2,5) noktası hangi doğrunun üzerindedir?",c:["y=x+2","y=3x","y=2x+1"],d:2,a:"x=2 koy: 2·2+1=5 ✓. Diğerlerinde 4 ve 6 çıkar, 5 değil."},
 {k:"Eşitsizlikler",s:"x ≤ 3 eşitsizliğinin sayı doğrusunda gösteriminde 3'te hangi işaret olur?",c:["Dolu nokta","Boş nokta","Ok işareti"],d:0,a:"≤ sınırı DAHİL eder → dolu (içi boyalı) nokta. < olsaydı boş nokta."},
 {k:"Eşitsizlikler",s:"5 − x > 2 eşitsizliğinin çözümü hangisi?",c:["x > 3","x < 3","x < −3"],d:1,a:"−x > −3 → negatifle çarpınca yön değişir: x < 3."},
 {k:"Üçgenler",s:"Dik üçgende dik kenarlar 6 ve 8 ise hipotenüs kaçtır?",c:["14","7","10"],d:2,a:"6²+8²=36+64=100 → √100=10. (3-4-5'in 2 katı)"},
 {k:"Üçgenler",s:"Bir üçgende büyük açının karşısında ne bulunur?",c:["En uzun kenar","En kısa kenar","Her zaman hipotenüs"],d:0,a:"Açı-kenar ilişkisi: büyük açının karşısında büyük kenar. Hipotenüs sadece dik üçgende var."},
 {k:"Benzerlik",s:"Benzerlik oranı 1/3 olan iki üçgende büyüğün bir kenarı 15 ise küçüğün karşılık kenarı?",c:["5","45","12"],d:0,a:"Küçük/büyük=1/3 → 15×1/3=5."},
 {k:"Benzerlik",s:"İki üçgenin benzer olması için en az kaç açısının eşit olması yeterlidir?",c:["3","2","1"],d:1,a:"AA benzerliği: 2 açı eşitse üçüncü de eşittir (iç açılar 180°)."},
 {k:"Dönüşüm",s:"A(−1,4) noktası orijin etrafında 180° döndürülürse görüntüsü?",c:["(−1,−4)","(4,−1)","(1,−4)"],d:2,a:"180° dönmede iki koordinat da işaret değiştirir: (1,−4)."},
 {k:"Dönüşüm",s:"A(2,3) noktası y eksenine göre yansıtılırsa görüntüsü hangisi?",c:["(2,−3)","(−2,−3)","(−2,3)"],d:2,a:"y eksenine göre yansımada y aynı kalır, x işaret değiştirir."},
 {k:"Cisimler",s:"Ayrıt uzunluğu 4 cm olan küpün yüzey alanı kaç cm²'dir?",c:["64","96","48"],d:1,a:"Küpün 6 eş kare yüzü var: 6×4²=6×16=96. 64 hacimdir!"},
 {k:"Cisimler",s:"Silindirin yanal yüzeyi açıldığında hangi şekil oluşur?",c:["Daire","Üçgen","Dikdörtgen"],d:2,a:"Yanal yüz açılınca dikdörtgen: bir kenarı taban çevresi (2πr), diğeri yükseklik."},
 {k:"Çarpanlar",s:"72 sayısının kaç tane pozitif tam sayı böleni vardır?",c:["12","10","8"],d:0,a:"72=2³×3². Bölen sayısı: (3+1)×(2+1)=4×3=12. Üslere 1 ekleyip çarparız."},
 {k:"Çarpanlar",s:"EKOK(8,12) kaçtır?",c:["4","96","24"],d:2,a:"8=2³, 12=2²×3. Ortak/farklı asalların BÜYÜK üsleri: 2³×3=24. 4 ise EBOB'tur."},
 {k:"Üslü İfadeler",s:"3² × 3⁴ ÷ 3³ işleminin sonucu hangisi?",c:["3⁹","3³","3⁵"],d:1,a:"Aynı tabanda çarpımda üsler toplanır, bölmede çıkarılır: 2+4−3=3 → 3³."},
 {k:"Üslü İfadeler",s:"(−2)⁴ işleminin sonucu kaçtır?",c:["−16","−8","16"],d:2,a:"Üs ÇİFT olunca sonuç pozitif: (−2)⁴=16. Tek üste negatif kalırdı."},
 {k:"Karekök",s:"√(144) − √(81) işleminin sonucu kaçtır?",c:["3","15","63"],d:0,a:"√144=12, √81=9 → 12−9=3. Kök içleri çıkarılmaz, önce kökler alınır."},
 {k:"Karekök",s:"2√18 ifadesinin en sade biçimi hangisi?",c:["2√18","36√2","6√2"],d:2,a:"√18=√(9×2)=3√2 → 2×3√2=6√2."},
 {k:"Veri Analizi",s:"4, 4, 6, 8, 8, 8, 10 verisinin tepe değeri (mod) kaçtır?",c:["4","8","6"],d:1,a:"Mod = en çok tekrar eden değer. 8 üç kez geçiyor, en fazlası."},
 {k:"Veri Analizi",s:"Bir daire grafiğinde bir dilim 90° ise bu, bütünün yüzde kaçıdır?",c:["%90","%50","%25"],d:2,a:"Tam daire 360°. 90/360=1/4=%25."},
 {k:"Olasılık",s:"52 kartlık desteden çekilen bir kartın kupa (13 kupa var) olma olasılığı?",c:["1/13","13/52 hariç","1/4"],d:2,a:"13/52=1/4. İstenen÷toplam ile sadeleştir."},
 {k:"Olasılık",s:"İmkânsız olayın olasılığı kaçtır?",c:["1","0","1/2"],d:1,a:"İmkânsız olay hiç gerçekleşmez → olasılığı 0. Kesin olay 1'dir."},
 {k:"Cebir",s:"a²−b²=24 ve a+b=6 ise a−b kaçtır?",c:["18","4","3"],d:1,a:"a²−b²=(a−b)(a+b) → 24=(a−b)×6 → a−b=4."},
 {k:"Cebir",s:"x²−5x+6 ifadesinin çarpanları hangisidir?",c:["(x−2)(x−3)","(x+2)(x+3)","(x−1)(x−6)"],d:0,a:"Çarpımı 6, toplamı −5 olan iki sayı: −2 ve −3 → (x−2)(x−3)."},
 {k:"Denklemler",s:"2(x−1)=x+4 denkleminde x kaçtır?",c:["6","3","2"],d:0,a:"2x−2=x+4 → x=6. Önce dağıt, sonra x'leri bir tarafa topla."},
 {k:"Denklemler",s:"Eğimi 3, y eksenini 2'de kesen doğrunun denklemi?",c:["y=2x+3","y=3x+2","y=3x−2"],d:1,a:"y=mx+n: m=eğim=3, n=kesişim=2 → y=3x+2."},
 {k:"Eşitsizlikler",s:"3x+1 < 10 eşitsizliğini sağlayan en büyük tam sayı x kaçtır?",c:["3","4","2"],d:2,a:"3x<9 → x<3. x<3 sağlayan en büyük tam sayı 2'dir (3 dahil değil)."},
 {k:"Eşitsizlikler",s:"'Bir sayının 4 katının 20'den küçük olması' hangisidir?",c:["4x < 20","4x ≤ 20","x+4 < 20"],d:0,a:"'4 katı'→4x, 'den küçük'→< (sınır dahil değil): 4x < 20."},
 {k:"Üçgenler",s:"Bir dik üçgende hipotenüs 13, bir dik kenar 5 ise diğer dik kenar?",c:["8","18","12"],d:2,a:"13²−5²=169−25=144 → √144=12. (5-12-13 üçlüsü)"},
 {k:"Üçgenler",s:"Bir üçgenin iki açısı 40° ve 65° ise üçüncü açı kaçtır?",c:["105°","75°","85°"],d:1,a:"İç açılar toplamı 180°: 180−40−65=75°."},
 {k:"Benzerlik",s:"Benzerlik oranı 2/5 olan iki üçgende alanlar oranı kaçtır?",c:["4/25","2/5","6/15"],d:0,a:"Alanlar oranı benzerlik oranının KARESİDİR: (2/5)²=4/25."},
 {k:"Benzerlik",s:"Boyu 1,5 m olan kişinin gölgesi 2 m iken, gölgesi 8 m olan ağacın boyu kaçtır?",c:["10,5 m","4 m","6 m"],d:2,a:"Aynı anda oranlar eşit: 1,5/2=x/8 → x=1,5×8/2=6 m."},
 {k:"Dönüşüm",s:"A(3,1) noktası 4 birim yukarı, 2 birim sola ötelenirse yeni konum?",c:["(5,5)","(1,5)","(1,−3)"],d:1,a:"Sola 2: 3−2=1. Yukarı 4: 1+4=5 → (1,5)."},
 {k:"Dönüşüm",s:"Aşağıdakilerden hangisi bir şeklin boyutunu değiştirir?",c:["Öteleme değil, hiçbiri (öteleme/yansıma/dönme boyut korur)","Öteleme","Dönme"],d:0,a:"Öteleme, yansıma ve dönme YALNIZ konum/yön değiştirir; boyut korunur. Boyutu değiştiren dönüşüm bu üçünde yoktur."},
 {k:"Cisimler",s:"Taban ayrıtları 2 ve 3, yüksekliği 5 olan dikdörtgenler prizmasının hacmi?",c:["10","30","25"],d:1,a:"V=en×boy×yükseklik=2×3×5=30 birimküp."},
 {k:"Cisimler",s:"Bir küpün hacmi 27 cm³ ise bir ayrıtı kaç cm'dir?",c:["3","9","6"],d:0,a:"V=a³=27 → a=∛27=3 cm."},
 {k:"Çarpanlar",s:"90 sayısının asal çarpanları çarpımı (her asal bir kez) kaçtır?",c:["90","15","30"],d:2,a:"90=2×3²×5. Farklı asallar 2, 3, 5 → 2×3×5=30."},
 {k:"Çarpanlar",s:"Bir çikolata 24, bir bisküvi 36 kişiye eşit dağıtılacak. En çok kaç kişilik grup?",c:["12","6","72"],d:0,a:"Eşit paylaşımda EBOB kullanılır: EBOB(24,36)=12. Bu tür 'en çok/en fazla eşit' soruları EBOB'tur."},
 {k:"Üslü İfadeler",s:"a=2³ ise a² kaçtır?",c:["2⁶","2⁵","4³"],d:0,a:"a²=(2³)²=2^(3×2)=2⁶=64. Üssün üssünde üsler çarpılır."},
 {k:"Üslü İfadeler",s:"10⁶ ÷ 10² işleminin sonucu kaçtır?",c:["10³","10⁸","10⁴"],d:2,a:"Aynı tabanda bölmede üsler çıkarılır: 6−2=4 → 10⁴ (=10000)."},
 {k:"Karekök",s:"√0,04 ifadesinin değeri kaçtır?",c:["0,2","0,02","0,4"],d:0,a:"0,04=4/100 → √(4/100)=2/10=0,2. Kontrol: 0,2×0,2=0,04."},
 {k:"Karekök",s:"√8 + √2 işleminin sonucu hangisidir?",c:["√10","4√2","3√2"],d:2,a:"√8=2√2 → 2√2+√2=3√2. Kök içi aynı olunca katsayılar toplanır."},
 {k:"Veri Analizi",s:"3, 6, 9, x sayılarının aritmetik ortalaması 6 ise x kaçtır?",c:["6","4","9"],d:0,a:"Toplam=4×6=24. 3+6+9=18 → x=24−18=6."},
 {k:"Veri Analizi",s:"Bir veride en büyük değer artarsa aşağıdakilerden hangisi kesin değişir?",c:["Medyan","Mod","Açıklık"],d:2,a:"Açıklık=enbüyük−enküçük olduğundan en büyük artınca açıklık artar. Medyan/mod ortadaki/tekrarlı değere bağlıdır, değişmeyebilir."},
 {k:"Olasılık",s:"1'den 10'a kadar sayılardan biri seçiliyor. Çift sayı gelme olasılığı?",c:["1/5","1/2","2/5"],d:1,a:"Çiftler: 2,4,6,8,10 → 5 tane. 5/10=1/2."},
 {k:"Olasılık",s:"Bir zar atılıyor. 4'ten büyük gelme olasılığı kaçtır?",c:["2/6","3/6","1/6"],d:0,a:"4'ten büyük: 5 ve 6 → 2 sonuç. 2/6=1/3. (4 dahil değil!)"},
 {k:"Cebir",s:"x=5 için 2x²−3 ifadesinin değeri kaçtır?",c:["97","47","7"],d:1,a:"Önce üs: 5²=25, sonra çarpma 2×25=50, sonra 50−3=47. İşlem önceliği: üs → çarpma → çıkarma."},
 {k:"Cebir",s:"9x²−1 ifadesinin çarpanlara ayrılmış hâli?",c:["(3x−1)(3x+1)","(3x−1)²","(9x−1)(x+1)"],d:0,a:"İki kare farkı: 9x²=(3x)², 1=1² → (3x−1)(3x+1)."},
 {k:"Denklemler",s:"5x−3=2x+9 denkleminde x kaçtır?",c:["4","2","6"],d:0,a:"5x−2x=9+3 → 3x=12 → x=4. x'liler bir tarafa, sayılar diğer tarafa."},
 {k:"Denklemler",s:"(0,4) ve (2,4) noktalarından geçen doğrunun eğimi kaçtır?",c:["2","4","0"],d:2,a:"Eğim=(y₂−y₁)/(x₂−x₁)=(4−4)/(2−0)=0/2=0. y sabit → yatay doğru, eğim 0."},
 {k:"Eşitsizlikler",s:"−3 ≤ x ≤ 1 aralığındaki tam sayıların toplamı kaçtır?",c:["−3","−5","0"],d:1,a:"Tam sayılar: −3,−2,−1,0,1 (iki uç da dahil). Toplam=(−3)+(−2)+(−1)+0+1=−5."},
 {k:"Eşitsizlikler",s:"2x−1 ≥ 7 eşitsizliğini sağlayan en küçük tam sayı x kaçtır?",c:["4","3","5"],d:0,a:"2x≥8 → x≥4. Sınır dahil (≥) olduğundan en küçük tam sayı 4."},
 {k:"Üçgenler",s:"İkizkenar üçgende taban açılarından biri 50° ise tepe açısı kaçtır?",c:["50°","100°","80°"],d:2,a:"İkizkenarda taban açıları eşit: 50°+50°=100°. Tepe=180−100=80°."},
 {k:"Üçgenler",s:"Kenarları 2, 3, 6 olan bir üçgen çizilebilir mi?",c:["Hayır, çizilemez","Evet, dar açılı","Evet, dik"],d:0,a:"Üçgen eşitsizliği: 2+3=5 < 6. İki kenar toplamı üçüncüden küçük → üçgen oluşmaz."},
 {k:"Benzerlik",s:"Benzer iki üçgenin çevreleri oranı 3/4 ise alanları oranı kaçtır?",c:["3/4","9/16","6/8"],d:1,a:"Çevreler oranı = benzerlik oranı = 3/4. Alanlar oranı bunun karesi: 9/16."},
 {k:"Benzerlik",s:"Bir haritada 1 cm gerçekte 5 km'yi gösteriyor. 4 cm gerçekte kaç km?",c:["20 km","9 km","1,25 km"],d:0,a:"Ölçek doğru orantı: 1 cm→5 km ise 4 cm→4×5=20 km."},
 {k:"Dönüşüm",s:"A(4,−3) noktasının orijine göre yansıması (simetriği) hangisidir?",c:["(4,3)","(−4,−3)","(−4,3)"],d:2,a:"Orijine göre yansımada iki koordinat da işaret değiştirir: (−4,3)."},
 {k:"Dönüşüm",s:"Bir kare saat yönünde 90° döndürülürse aşağıdakilerden hangisi korunur?",c:["Sadece konumu","Kenar uzunlukları","Köşe koordinatları"],d:1,a:"Dönme bir öteleme-benzeri katı hareket: uzunluk ve açı korunur, yalnız yön/konum değişir."},
 {k:"Cisimler",s:"Taban yarıçapı 2, yüksekliği 3 olan koninin hacmi kaç π'dir?",c:["12π","4π","6π"],d:1,a:"Koni hacmi V=(1/3)πr²h=(1/3)π×4×3=4π. Koni, aynı tabanlı silindirin 1/3'üdür."},
 {k:"Cisimler",s:"Bir dikdörtgenler prizmasının hacmi 60, taban alanı 12 ise yüksekliği kaçtır?",c:["5","48","72"],d:0,a:"V=taban alanı×yükseklik → 60=12×h → h=5."},
 {k:"Çarpanlar",s:"EKOK(12,18) kaçtır?",c:["6","36","216"],d:1,a:"12=2²×3, 18=2×3². Ortak ve ortak olmayan asalların büyük üsleri: 2²×3²=36. 6 ise EBOB'dur."},
 {k:"Çarpanlar",s:"72 sayısının kaç tane pozitif böleni vardır?",c:["12","10","24"],d:0,a:"72=2³×3². Üslerin 1 fazlası çarpılır: (3+1)×(2+1)=12."},
 {k:"Üslü İfadeler",s:"(3²)³ işleminin sonucu hangisine eşittir?",c:["3⁵","3⁶","3⁹"],d:1,a:"Üssün üssünde üsler çarpılır: 2×3=6, yani 3⁶=729. Üsler toplanmaz."},
 {k:"Üslü İfadeler",s:"2⁻³ ifadesinin değeri kaçtır?",c:["−8","1/8","−6"],d:1,a:"Negatif üs, tersini almak demektir: 2⁻³=1/2³=1/8. Sonuç negatif olmaz."},
 {k:"Karekök",s:"√18 × √2 işleminin sonucu kaçtır?",c:["√20","6","9"],d:1,a:"Kökler çarpılır: √(18×2)=√36=6. Kök içindekiler toplanmaz."},
 {k:"Karekök",s:"3√5 ifadesinin tamamı kök içine alınırsa hangisi olur?",c:["√15","√35","√45"],d:2,a:"3 kök içine 3²=9 olarak girer: √(9×5)=√45. Doğrulama: 45=9×5."},
 {k:"Veri Analizi",s:"4, 6, 8, 10, 12 verisinin aritmetik ortalaması kaçtır?",c:["10","8","6"],d:1,a:"Toplam 4+6+8+10+12=40, eleman sayısı 5: 40÷5=8."},
 {k:"Veri Analizi",s:"2, 3, 3, 4, 4, 4, 5 verisinin modu (tepe değeri) kaçtır?",c:["3","4","5"],d:1,a:"En çok tekrar eden değer 4'tür (3 kez). 3 ise 2 kez tekrar eder."},
 {k:"Olasılık",s:"Hilesiz bir zar atıldığında asal sayı gelme olasılığı kaçtır?",c:["1/3","2/3","1/2"],d:2,a:"Asal sayılar 2, 3, 5 olmak üzere 3 tanedir. Olasılık 3/6=1/2. 1 asal sayı değildir."},
 {k:"Olasılık",s:"Torbada 3 kırmızı ve 2 mavi bilye var. Rastgele çekilen bilyenin mavi olma olasılığı kaçtır?",c:["2/3","2/5","3/5"],d:1,a:"İstenen durum 2, tüm durumlar 3+2=5: olasılık 2/5. 2/3 hatası, mavileri kırmızılara oranlamaktan gelir."},
 {k:"Cebir",s:"3(x+4) ifadesinin açılımı hangisidir?",c:["3x+4","x+12","3x+12"],d:2,a:"Dağılma özelliği: 3 hem x ile hem 4 ile çarpılır → 3x+12."},
 {k:"Cebir",s:"2a+3a−a ifadesinin en sade hâli hangisidir?",c:["5a","6a","4a"],d:2,a:"Benzer terimlerin katsayıları toplanır: 2+3−1=4 → 4a. Tek başına yazılan a'nın katsayısı 1'dir."},
 {k:"Denklemler",s:"4x−7=13 denkleminin çözümü kaçtır?",c:["1,5","5","20"],d:1,a:"−7 karşıya +7 geçer: 4x=20. Sonra 4'e bölünür: x=5. Kontrol: 4×5−7=13."},
 {k:"Denklemler",s:"x/3+2=6 denkleminin çözümü kaçtır?",c:["4","24","12"],d:2,a:"2 karşıya geçer: x/3=4. Her iki taraf 3 ile çarpılır: x=12. Kontrol: 12/3+2=6."},
 {k:"Eşitsizlikler",s:"2x+3>11 eşitsizliğinin çözümü hangisidir?",c:["x > 7","x < 4","x > 4"],d:2,a:"3 karşıya geçer: 2x>8. Pozitif sayıya bölünce yön değişmez: x>4."},
 {k:"Eşitsizlikler",s:"−1 ≤ x < 5 aralığındaki tam sayıların toplamı kaçtır?",c:["10","9","8"],d:1,a:"Tam sayılar −1, 0, 1, 2, 3, 4'tür (5 dahil değil). Toplam −1+0+1+2+3+4=9."},
 {k:"Üçgenler",s:"Kenar uzunlukları 3 cm, 4 cm ve x cm olan üçgende x en çok kaç tam sayı olabilir?",c:["7","6","5"],d:1,a:"Üçgen eşitsizliği: |4−3|<x<4+3 → 1<x<7. En büyük tam sayı 6. x=7 olsa 3+4=7 üçgen oluşmaz."},
 {k:"Üçgenler",s:"Dik kenarları 6 cm ve 8 cm olan dik üçgenin hipotenüsü kaç cm'dir?",c:["10","14","12"],d:0,a:"Pisagor: 6²+8²=36+64=100, √100=10. Dik kenarlar toplanmaz."},
 {k:"Benzerlik",s:"Benzerlik oranı 1/2 olan iki üçgenden küçüğünün bir kenarı 5 cm ise büyüğünde karşılık gelen kenar kaç cm'dir?",c:["2,5","25","10"],d:2,a:"Büyük üçgenin kenarı küçüğün 2 katıdır: 5×2=10 cm."},
 {k:"Benzerlik",s:"İki benzer şeklin benzerlik oranı 3 ise alanları oranı kaçtır?",c:["3","6","9"],d:2,a:"Alanlar oranı, benzerlik oranının karesidir: 3²=9."},
 {k:"Dönüşüm",s:"A(2,3) noktasının x eksenine göre yansıması hangisidir?",c:["(2,−3)","(−2,3)","(−2,−3)"],d:0,a:"x eksenine yansımada x aynı kalır, y'nin işareti değişir: (2,−3). (−2,3) y eksenine yansımadır."},
 {k:"Dönüşüm",s:"A(1,4) noktası 3 birim sağa ve 2 birim aşağı ötelenirse yeni koordinatları ne olur?",c:["(3,6)","(4,2)","(−2,6)"],d:1,a:"Sağa 3 → x: 1+3=4. Aşağı 2 → y: 4−2=2. Yeni nokta (4,2)."},
 {k:"Cisimler",s:"Taban yarıçapı 3 cm ve yüksekliği 10 cm olan dik dairesel silindirin hacmi kaç π cm³'tür?",c:["30π","60π","90π"],d:2,a:"V=πr²h=π×3²×10=90π. Yarıçap kare alınmazsa 30π gibi yanlış sonuç çıkar."},
 {k:"Cisimler",s:"Bir kenarı 4 cm olan küpün yüzey alanı kaç cm²'dir?",c:["96","64","24"],d:0,a:"Küpün 6 yüzü vardır, her yüz 4×4=16: 6×16=96. 64 hacimdir."}
];
window.KONU_SAYFA = {"Çarpanlar":"1-carpanlar.html","Üslü İfadeler":"uslu-ifadeler.html","Karekök":"karekok.html","Veri Analizi":"veri-analizi.html","Olasılık":"olasilik.html","Cebir":"cebir.html","Denklemler":"denklemler.html","Eşitsizlikler":"esitsizlikler.html","Üçgenler":"ucgenler.html","Benzerlik":"benzerlik.html","Dönüşüm":"donusum.html","Cisimler":"cisimler.html"};

// ── Yanlış Kutum API'si ──────────────────────────────────────────────
// Yanlış yapılan soruların kimliği (konu|metin) localStorage 'yanlisKutum'da tutulur.
// Kimlik banka sırasından bağımsızdır; soru metni değişmedikçe stabildir.
// mevcut anahtarlar (okulDone*, karisikSkorlar, sinavGecmisi) ASLA değişmez; bu yeni bir anahtar.
window.soruId = function(q){ return q.k + "|" + q.s; };
window.kutuOku = function(){
  try{ return JSON.parse(localStorage.getItem('yanlisKutum')||'[]'); }catch(e){ return [];
}
};
window.kutuYaz = function(a){
  try{ localStorage.setItem('yanlisKutum', JSON.stringify(a.slice(0,200))); }catch(e){}
};
// Yanlış yapılan soruyu kutuya ekle (varsa yinelemez)
window.kutuyaEkle = function(q){
  var id=window.soruId(q), a=window.kutuOku();
  if(a.indexOf(id)===-1){ a.push(id); window.kutuYaz(a); }
};
// Doğru yapılan soruyu kutudan çıkar (öğrenildi sayılır)
window.kutudanCikar = function(q){
  var id=window.soruId(q), a=window.kutuOku(), i=a.indexOf(id);
  if(i!==-1){ a.splice(i,1); window.kutuYaz(a); }
};
// Kutudaki id'lere karşılık gelen TAM soru nesnelerini döndür (bankada hâlâ varsa)
window.kutuSorulari = function(){
  var set={}; window.kutuOku().forEach(function(id){ set[id]=1; });
  return window.SORU_BANKASI.filter(function(q){ return set[window.soruId(q)];
});
};
