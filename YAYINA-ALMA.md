# Siteyi yayına alma — tek komut

Hazır. Sadece senin onayınla çalışır. Dosyalar `_yayin/` içinde (88 KB).

## Yayınla

Terminali aç, şunu yapıştır:

```
cd ~/okul-sitesi/_yayin && git init -b main && git add -A && git commit -m "okul sitesi" && gh repo create okul-sitesi --public --source=. --push && gh api -X POST repos/Hkntng/okul-sitesi/pages -f "source[branch]=main" -f "source[path]=/"
```

2-3 dakika sonra adres:

**https://hkntng.github.io/okul-sitesi/**

Öğrenci bu linki telefonuna yazıp açar. Uygulama indirmesi gerekmez.

## Sonra güncelleme yapmak istersen

Sayfalarda değişiklik olursa:

```
cd ~/okul-sitesi && cp index.html 1-carpanlar.html ebob-ekok.html nasil-calisilir.html stil.css _yayin/ && cd _yayin && git add -A && git commit -m "guncelleme" && git push
```

## Geri almak istersen

Repoyu tamamen silmek:

```
gh repo delete Hkntng/okul-sitesi --yes
```

## Notlar

- Repo **public** olacak. İçinde kişisel bilgi yok — sadece ders sayfaları.
  Öğrenci adı, telefon, fotoğraf hiçbiri yok. Kontrol ettim.
- GitHub Pages ücretsiz, reklam yok, süresiz.
- Alan adı istersen sonra bağlanabilir (ücretli, yıllık ~10$). Şart değil.
