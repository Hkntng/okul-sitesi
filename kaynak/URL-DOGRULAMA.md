
# Kaynak URL doğrulama — 13 Eylül 2026, 03:45

Yöntem: 93 eşsiz URL, önce curl (gerçek tarayıcı User-Agent), 200 dönmeyenler
gerçek Chrome'da açılıp gözle kontrol edildi.

## Sonuç
- **78 URL → HTTP 200**, sorunsuz
- **2 URL → yönlendirme sonrası 200** (harita.gov.tr 302→200, samsung.com 403→200) — ÇALIŞIYOR
- **10 URL → bot duvarı** (Cloudflare "güvenlik doğrulaması"). Tarayıcıda içerik GELİYOR, link sağlam:
  - whc.unesco.org/en/list/1488/ ve /1572/ (UNESCO)
  - britannica.com (Thales, Keops Piramidi)
  - iso.org/standard/36631.html
  - digitalcommons.unl.edu (tekstil araştırması)
  - blog.whatsapp.com (2 adet) — tarayıcıda TAM AÇILDI, içerik doğrulandı
  - bionumbers.hms.harvard.edu (2 adet) — tarayıcıda TAM AÇILDI, "Minimal generation time E. coli BNID 103514" başlığı doğrulandı

## ÖLÜ — değiştirilmeli (2 adet)
1. `https://www.millipiyangoonline.com/milli-piyango/milli-piyango-oyun-kurallari`
   → Chrome: "Bu siteye ulaşılamıyor". Site kapanmış.
2. `https://plastiksutanki.com.tr/urun/5-tonluk-dikey-polietilen-su-deposu/`
   → Zaman aşımı, açılmıyor. Ticari site, muhtemelen kapandı.

Not: Bu iki kaynak şu an sitedeki 3 sayfanın HİÇBİRİNDE kullanılmıyor.
Sadece kaynak havuzunda (hayattan-ornekler.md) duruyor. Acil değil, ama
o örnekler sayfaya taşınmadan önce yeni kaynak bulunmalı.
