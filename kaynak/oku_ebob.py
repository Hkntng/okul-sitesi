import fitz

doc = fitz.open("/Users/hkn/okul-sitesi/kaynak/MEB_matematik_8_2025.pdf")
bulunan = []
for i in range(len(doc)):
    t = doc[i].get_text()
    if "EBOB" in t or "ortak bölen" in t.lower():
        bulunan.append(i)

print("EBOB gecen PDF sayfalari:", bulunan[:14])
print()
for i in bulunan[:3]:
    print("=" * 60)
    print("PDF SAYFA", i)
    print("=" * 60)
    print(doc[i].get_text()[:1400])
    print()
