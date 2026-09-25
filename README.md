# Servicii De Contabilitate Anglia: website

Site de prezentare pentru o firmă de contabilitate din Marea Britanie, pentru clienți români. Are două limbi, română și engleză, cu un buton **RO / EN** în partea de sus. Funcționează pe calculator, tabletă și telefon.

## Ce conține

- **Prezentare**: mesaj principal, butoane „Cere ofertă” și WhatsApp
- **Servicii**: Self Assessment, CIS și recuperare taxe, înregistrare self-employed (UTR), firme Ltd, VAT / Making Tax Digital, salarii (Payroll)
- **Prețuri**: 3 pachete în lire (self-employed/CIS, Ltd, Ltd cu VAT)
- **Cum lucrăm**: 3 pași
- **Despre noi**
- **Recenzii**: de completat cu recenzii reale
- **Întrebări frecvente**: UTR, termenul Self Assessment, CIS, self-employed sau Ltd, scrisori HMRC
- **Contact**: formular de ofertă, telefon, WhatsApp, e-mail, oraș, program

## Fișiere

| Fișier | Ce este |
|---|---|
| `index.html` | Pagina în **română** (textele și structura) |
| `en.html` | Pagina în **engleză** |
| `styles.css` | Culorile și aspectul (comun pentru ambele limbi) |
| `script.js` | Meniul pe telefon și formularul de contact |

Dacă modifici un text, modifică-l în **ambele** fișiere, `index.html` și `en.html`.

## Ce trebuie să înlocuiești

Datele de contact de mai jos sunt **exemple**. Caută și înlocuiește-le în `index.html` **și** în `en.html`:

- `+44 7000 000000` și `447000000000`: telefonul tău (al doilea format este pentru link-urile de apel și WhatsApp, fără `+` și fără spații)
- `contact@exemplu.co.uk`: adresa ta de e-mail (și în `script.js`, la `EMAIL_FIRMA`)
- `Londra` / `London`: orașul tău
- `Company No. 00000000`: numărul firmei de la Companies House
- Programul de lucru, prețurile și recenziile

Verifică și afirmațiile, și păstrează-le doar pe cele adevărate pentru firma ta: „prima consultație £0”, „răspuns în 24h”, „consultanță în română și engleză”.

Poți edita fișierele direct pe GitHub: deschizi fișierul, apeși pe creionul ✏️, modifici textul și apeși „Commit changes”.

## Cum vezi site-ul

**Pe calculatorul tău:** descarcă proiectul (butonul verde **Code**, apoi **Download ZIP**), dezarhivează-l și deschide `index.html` în browser.

**Online, gratuit, cu GitHub Pages:**
1. Pe GitHub, mergi la **Settings**, apoi **Pages**.
2. La „Branch” alege `main` și folderul `/ (root)`, apoi apasă **Save**.
3. După 1–2 minute site-ul apare la `https://adridari1987-spec.github.io/test/`.

> Notă: pe contul GitHub gratuit, GitHub Pages funcționează doar pentru depozite **publice**. Depozitul acesta este privat, așa că trebuie fie să-l faci public (Settings, apoi Danger Zone, apoi Change visibility), fie să ai un plan GitHub Pro.

Poți folosi și un domeniu propriu (de exemplu `contabilitate-anglia.co.uk`), din aceeași pagină **Settings → Pages → Custom domain**.
