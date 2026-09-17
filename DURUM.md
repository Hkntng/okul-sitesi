# DURUM — 4 Eylül 2026

> ## ⚠️ 13 EYLÜL 2026 GÜNCELLEMESİ — ayrıntı: `GECE-RAPORU.md`
> - Yeni sayfalar: `ebob-ekok.html`, `nasil-calisilir.html` — yazıldı, tarayıcıda test edildi.
> - Kırık linkler düzeltildi: 8 iç linkin 8'i çalışıyor (önce ana sayfa olmayan 2 sayfaya link veriyordu).
> - 93 kaynak URL doğrulandı: 91 sağlam, 2 ölü (`kaynak/URL-DOGRULAMA.md`).
> - Denetimde **4 olgusal hata** bulunup düzeltildi. En önemlisi: EBOB/EKOK MEB'de
>   **6. sınıf** kazanımı (MAT.6.1.4) — sayfada "8. sınıf" yazıyordu.
> - **Kalan tek iş: YAYIN.** `YAYINA-ALMA.md` içinde tek komut hazır. Push edilmedi.
>
> Aşağısı 4-5 Eylül tarihli eski notlardır.

## Proje
**Resmî adı yok.** Klasör: `/Users/hkn/okul-sitesi`
Ne: Dicle (Diyarbakır) köy ortaokulu 8. sınıf matematik — telefondan açılan, üyeliksiz, statik site.
Kim için: ~120 öğrenci, %95 Android, 20.000 TL sınıfı telefonlar.
Amaç: konu anlatmak değil **mantığı kavratmak**. Ölçüt: "20 yıl geçse de unutmayacak."

## Kural (Hakan'ın emri)
- Test edilmeden hiçbir şey teslim edilmez. Gerçek tarayıcıda, gerçek tıklamayla.
- Mevcut içerik silinmez, üstüne eklenir.
- Düz metin yasak. Her şey tıklamalı/oyunlaştırılmış.
- Örnekler 5. sınıf çocuğuna anlatır gibi, çok sayıda, açık.
- Uydurma örnek yok — kaynak gösterilecek.
- Plan onaylanmadan kod yazılmaz.

## BİTEN: 1. Konu — Çarpanlar (`1-carpanlar.html`)
35.5 KB, tek dosya, sıfır kütüphane. Baştan sona gerçek tıklamayla test edildi.

Akış:
1. `−` / `+` sayacı — **1'den başlar** (kritik düzeltme: 3'ten başlıyordu, 1 ve 2 bulunamıyordu)
2. İlerleme göstergesi: "3 / 6 bulundu · 3 tane daha var"
3. Yumurtalar dikdörtgen ızgara, tutan = yeşil çerçeve + kenar ölçüsü, tutmayan = kırmızı kesikli
4. "Tutan poşet sayıları" şeridi
5. `Parçala` → asal çarpan ağacı: 18 → 2×9 → 2×3×3
6. Tuğla butonları (2,3,3) → 6 sayı üretir
7. **DORUK: `İki listeyi yan yana koy →`** — turuncu ve mor sıralar süzülüp 6 kez kilitleniyor, her kilitte titreşim, sonda "Aynı şey. İki ayrı yoldan gittin, aynı yere çıktın."
8. 17 → asal kartı
9. "Bu ne işe yarıyor" — **6 sekme** (kaydırmalı)
10. "Kendini dene" — 3 soru, "kaç yaptın" değil "neden"

### 6 sekme ve kaynakları
- 📱 **Telefonda** — WhatsApp iki dev asalla kilitleniyor. *Kaynak: ABC Science 2018*
- 🌾 **Doğada** — 17 yıllık ağustosböceği, asal olduğu için kuşlara denk gelmiyor. *Kaynak: Scientific Reports (Nature) 2015, Yoshimura ve ark.*
- 🐄 **Ahırda** — 24 koyun ağıllara bölünür, 23 bölünmez
- ⚽ **Sahada** — 18 kişi 2/3/6/9 takıma bölünür, 4'e bölünmez
- 🐝 **Kovanda** — Diyarbakır'da 193.664 arı kovanı. *Kaynak: Tarım Bakanlığı 2024*
- 🎮 **Oyunda** — 8 sn ve 12 sn cooldown, 24. sn'de ikisi birden hazır → EKOK'a köprü

## Video kapasitesi (ölçüldü)
Manim kuruldu (`.venv-manim`). 25 sn video gerçekten üretildi → `ornek-video.mp4` (444 KB, 720p).
- **1 sn video ≈ 4 sn render**
- 5 dk video ≈ 20 dk render · 10 dk ≈ 40 dk
- Boyut: **1 dk ≈ 1 MB** (köy internetinde iner)
- Tarz: 3Blue1Brown (şekil/sayı/geçiş). Karakter, konuşan kişi YOK. Ses YOK.

## SIRADA: 2. Konu — EBOB (onay bekliyor)
Matematiksel doğrulama yapıldı (6 sayı çiftinde):
**EBOB = iki dikdörtgeni de tam kaplayan EN BÜYÜK kare.**
`24×36 → 12` · `18×12 → 6` · `20×30 → 10` — daha büyüğü hiçbirinde yok.

Plan (4 aşama):
1. **Kare döşeme oyunu** — iki tarla (24 ve 36 adım), çocuk kare boyutu seçer (5/7/8/10/12). 8 → birinde tutar öbüründe tutmaz. 12 → ikisi de dolar, yeşil, titreşim. "13 olur mu?" → Hayır. En büyüğü 12.
2. **Ortak tuğla** — 24=2·2·2·3, 36=2·2·3·3 → ortak olanlar 2,2,3 → çarp → 12. Sayfa 1'in çarpışma anının kardeşi.
3. **EBOB/EKOK ayrımı** — "EBOB: büyükten küçük parça yaparsın. EKOK: küçükten büyük şey yaparsın."
4. **6 sekme + Kendini dene**

Ayrıca: üstte sabit ilerleme çubuğu (sayfa 1'de eksikti).

**AÇIK SORU (Hakan cevaplayacak):** Ana örnek (a) iki tarla kare parsellere mi, (b) 24 keçi + 36 koyun eşit ağıllara mı?

Kitabın karanfil örneği (24 kırmızı + 36 beyaz) kullanılmayacak — ama sayılar aynı tutulacak ki kitap alıştırmaları uysun.

## Link
- Bilgisayar: `http://localhost:8765/1-carpanlar.html`
- Telefon (aynı wifi): `http://192.168.0.14:8765/1-carpanlar.html`
- Sunucu: `cd /Users/hkn/okul-sitesi && python3 -m http.server 8765` (arka planda, ayakta, 200 OK)
- **Kalıcı link YOK.** Sunucu kapanınca ölür. GitHub Pages ayrı iş, karar verilmedi.

## Takvim
Öğretmenler toplantısı **7 Eylül** · Okul açılışı **14 Eylül**

## Kaynak dosyalar
- `kaynak/MEB_matematik_8_2025.pdf` — 367 sayfa. EBOB kitapta s.19 (PDF s.18)
- `kaynak/prog2018.txt` — kazanımlar M.8.1.1.1 → M.8.1.3.6
- 1. ünite: Çarpanlar s.12-32 (EBOB s.19, EKOK s.22) + Üslü İfadeler s.33-56

## Çöp (silinebilir)
`index.html`, `stil.css` (onaysız eski taslaklar), `PLAN.md` (örnek kısmı geçersiz), `ekran-*.png`, `doruk-*.png`, `tam-gorunum.png`, `son-test.png` (test görüntüleri)

## 2026-09-05 — Hayattan örnek havuzu hazır
`kaynak/hayattan-ornekler.md` (114 KB): 3 ünite, 11 konu, 126 kaynaklı örnek (her biri durum / matematik adım adım / önem / kaynak URL / cevaplı mini soru + konu başı "3 sık hata"). 95 URL: 72 otomatik doğrulandı (HTTP 200), 23 robot engeli/sertifika verdi — link ölü değil, siteye koymadan elle bakılacak. Ham parçalar `kaynak/_arastirma/`. Drive kopyası: Drive kökünde aynı ad. Sıradaki iş: bu havuzdan site sayfaları (kural: plan onayı olmadan kod yok).
