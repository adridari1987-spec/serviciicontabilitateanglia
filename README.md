# Servicii De Contabilitate Anglia: website

Site de prezentare pentru o firmă de contabilitate din Marea Britanie, pentru clienți români. Are două limbi, română și engleză, cu un buton **RO / EN** în partea de sus. Funcționează pe calculator, tabletă și telefon.

## Ce conține

- **Prezentare**: mesaj principal, butoane „Cere ofertă” și WhatsApp
- **Servicii**: Self Assessment, CIS și recuperare taxe, administrare firme Ltd, raportare VAT, raportare Making Tax Digital, reprezentare în investigații HMRC
- **Calculator CIS**: estimează pe loc rambursarea CIS din venitul brut, suma reținută și cheltuieli (unelte, echipament de protecție, mile, transport, telefon, altele). Butonul de sub rezultat completează formularul de contact cu estimarea.
- **Calculator Self-employed sau Ltd**: compară cât îți rămâne în mână ca self-employed și cu o firmă Ltd (salariu de £12.570 + dividende)
- **Prețuri**: raportare MTD £75, raportare VAT £75, administrare Ltd de la £100/lună, investigații HMRC de la £250, prima consultație gratuită
- **Cum lucrăm**: 3 pași
- **Termene fiscale**: următorul termen evidențiat, link „+ Google Calendar” la fiecare termen și fișier de calendar cu toate termenele
- **Documente necesare**: liste pentru CIS/self-employed, Ltd și firmă nouă, cu buton de printare sau salvare PDF
- **Ghiduri** (în română): numărul UTR, cheltuieli deductibile pe CIS, scrisori de la HMRC
- **Despre noi**
- **Întrebări frecvente**: UTR, termenul Self Assessment, CIS, Making Tax Digital, self-employed sau Ltd, scrisori HMRC
- **Contact**: formular de ofertă, telefon, WhatsApp, e-mail, oraș, program

## Fișiere

| Fișier | Ce este |
|---|---|
| `index.html` | Pagina în **română** (textele și structura) |
| `en.html` | Pagina în **engleză** |
| `styles.css` | Culorile și aspectul (comun pentru ambele limbi) |
| `script.js` | Meniul pe telefon, formularul de contact, calculatoarele, termenele și printarea |
| `ghid-*.html` | Cele 3 ghiduri în română |
| `confidentialitate.html`, `privacy.html` | Politica de confidențialitate (RO / EN) |
| `termene-fiscale.ics`, `tax-deadlines.ics` | Termenele fiscale ca fișiere de calendar (RO / EN) |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Iconița site-ului |
| `og-image.png`, `og-image-en.png` | Imaginea care apare când trimiți linkul pe WhatsApp sau Facebook |
| `sitemap.xml` | Lista paginilor, pentru Google Search Console |

Dacă modifici un text, modifică-l în **ambele** fișiere, `index.html` și `en.html`.

## Date de contact

Telefon/WhatsApp: +44 7344 883686 · E-mail: serviciidecontabilitateanglia@gmail.com · Oraș: London.

Dacă le schimbi, schimbă-le în `index.html` **și** în `en.html` (telefonul apare și în formatul `447344883686`, pentru link-urile de apel și WhatsApp). E-mailul apare și în `script.js`, la `EMAIL_FIRMA`.

## Actualizarea anuală (după 6 aprilie)

Calculatorul folosește ratele pentru anul fiscal **2025/26** (Anglia, Țara Galilor și Irlanda de Nord): alocația personală £12.570, impozit 20% / 40% / 45%, Class 4 NI 6% și 2%, mile 45p / 25p.

La fiecare an fiscal nou:
1. **Calculatoarele**: schimbă valorile din blocul `RATE` din `script.js`, apoi anul fiscal din textele calculatoarelor în `index.html` și `en.html` (caută `2025/26`).
2. **Termenele**: adaugă noile date în secțiunea „Termene fiscale” din `index.html` și `en.html`. Pe site, termenele trecute apar estompate automat. Regenerează și fișierele `.ics`.
3. **Ghidurile**: verifică sumele (mile, lucru de acasă, amenzi) și data „Actualizat”.

## De verificat

- „Răspuns în 24h” și programul „Luni–Vineri, 09:00–18:00”: păstrează-le doar dacă sunt adevărate.
- Recenzii: adaugă doar recenzii reale, primite de la clienți (de exemplu de pe Google). În Marea Britanie, recenziile false sunt interzise prin lege.

Poți edita fișierele direct pe GitHub: deschizi fișierul, apeși pe creionul ✏️, modifici textul și apeși „Commit changes”.

## Cum vezi site-ul

**Pe calculatorul tău:** descarcă proiectul (butonul verde **Code**, apoi **Download ZIP**), dezarhivează-l și deschide `index.html` în browser.

**Online, gratuit, cu GitHub Pages:**
1. Pe GitHub, mergi la **Settings**, apoi **Pages**.
2. La „Branch” alege `main` și folderul `/ (root)`, apoi apasă **Save**.
3. După 1–2 minute site-ul apare la `https://adridari1987-spec.github.io/serviciicontabilitateanglia/`.

> Notă: pe contul GitHub gratuit, GitHub Pages funcționează doar pentru depozite **publice**. Depozitul acesta este privat, așa că trebuie fie să-l faci public (Settings, apoi Danger Zone, apoi Change visibility), fie să ai un plan GitHub Pro.

Poți folosi și un domeniu propriu (de exemplu `serviciicontabilitateanglia.co.uk`), din aceeași pagină **Settings → Pages → Custom domain**.
