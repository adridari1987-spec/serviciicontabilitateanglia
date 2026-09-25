// Adresa de e-mail la care ajung cererile de ofertă. SCHIMB-O cu adresa ta.
const EMAIL_FIRMA = "serviciidecontabilitateanglia@gmail.com";

// Textele e-mailului, în limba paginii (index.html = română, en.html = engleză)
const TEXTE = {
  ro: {
    subiect: "Cerere ofertă contabilitate",
    nume: "Nume", telefon: "Telefon", email: "E-mail",
    tip: "Situația", angajati: "Număr de angajați", mesaj: "Mesaj",
  },
  en: {
    subiect: "Accounting quote request",
    nume: "Name", telefon: "Phone", email: "E-mail",
    tip: "Situation", angajati: "Number of employees", mesaj: "Message",
  },
};
const t = TEXTE[document.documentElement.lang] || TEXTE.ro;

// Meniul pentru telefon
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", false);
  })
);

// Formularul de contact: deschide aplicația de e-mail cu mesajul completat
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const date = new FormData(e.target);

  const subiect = `${t.subiect} - ${date.get("nume")}`;
  const corp = [
    `${t.nume}: ${date.get("nume")}`,
    `${t.telefon}: ${date.get("telefon")}`,
    `${t.email}: ${date.get("email")}`,
    `${t.tip}: ${date.get("tip")}`,
    `${t.angajati}: ${date.get("angajati")}`,
    "",
    `${t.mesaj}: ${date.get("mesaj")}`,
  ].join("\n");

  window.location.href =
    `mailto:${EMAIL_FIRMA}?subject=${encodeURIComponent(subiect)}&body=${encodeURIComponent(corp)}`;
});

// Anul curent în subsol
document.getElementById("an").textContent = new Date().getFullYear();

// ========== Calculator CIS ==========
// Ratele pentru anul fiscal 2025/26 (Anglia, Țara Galilor și Irlanda de Nord).
// Dacă ratele se schimbă, modifică doar valorile de aici.
const RATE = {
  alocatiePersonala: 12570,   // Personal Allowance
  pragReducereAlocatie: 100000, // peste acest venit, alocația scade cu £1 la fiecare £2
  bandaDeBaza: 37700,         // venitul impozabil taxat cu 20%
  pragAditional: 125140,      // peste acest venit impozabil se aplică 45%
  cotaDeBaza: 0.2,
  cotaSuperioara: 0.4,
  cotaAditionala: 0.45,
  niPragInferior: 12570,      // Class 4 NI: 6% între praguri, 2% peste
  niPragSuperior: 50270,
  niCotaPrincipala: 0.06,
  niCotaSuperioara: 0.02,
  cisCota: 0.2,               // reținerea CIS standard
  mileLimita: 10000,          // 45p/milă până aici, 25p după
  mileCotaMare: 0.45,
  mileCotaMica: 0.25,
};

function calculeazaCIS(d) {
  const mile = Math.min(d.mile, RATE.mileLimita) * RATE.mileCotaMare +
    Math.max(d.mile - RATE.mileLimita, 0) * RATE.mileCotaMica;
  const cheltuieli = d.unelte + d.protectie + d.transport + d.telefon + d.altele + mile;
  const profit = Math.max(d.brut - cheltuieli, 0);

  const alocatie = Math.max(
    RATE.alocatiePersonala - Math.max(profit - RATE.pragReducereAlocatie, 0) / 2, 0);
  const impozabil = Math.max(profit - alocatie, 0);
  const impozit =
    Math.min(impozabil, RATE.bandaDeBaza) * RATE.cotaDeBaza +
    Math.max(Math.min(impozabil, RATE.pragAditional) - RATE.bandaDeBaza, 0) * RATE.cotaSuperioara +
    Math.max(impozabil - RATE.pragAditional, 0) * RATE.cotaAditionala;

  const ni =
    Math.max(Math.min(profit, RATE.niPragSuperior) - RATE.niPragInferior, 0) * RATE.niCotaPrincipala +
    Math.max(profit - RATE.niPragSuperior, 0) * RATE.niCotaSuperioara;

  const datorat = impozit + ni;
  return { brut: d.brut, cheltuieli, profit, impozit, ni, datorat, retinut: d.retinut, rezultat: d.retinut - datorat };
}

const calc = document.getElementById("cis-calc");
if (calc) {
  const form = calc.querySelector("form");
  const retinutInput = form.elements.retinut;
  const lire = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
  const numar = (nume) => Math.max(parseFloat(form.elements[nume].value) || 0, 0);
  let ultimRezultat = null;

  // Cât timp utilizatorul nu scrie singur suma reținută, o estimăm ca 20% din brut
  retinutInput.addEventListener("input", () => { retinutInput.dataset.editat = retinutInput.value !== "" ? "da" : ""; });

  const actualizeaza = () => {
    const brut = numar("brut");
    if (retinutInput.dataset.editat !== "da") {
      retinutInput.value = brut ? Math.round(brut * RATE.cisCota) : "";
    }
    const r = calculeazaCIS({
      brut,
      retinut: numar("retinut"),
      unelte: numar("unelte"), protectie: numar("protectie"), mile: numar("mile"),
      transport: numar("transport"), telefon: numar("telefon"), altele: numar("altele"),
    });
    ultimRezultat = brut ? r : null;

    const stare = !brut ? "gol" : r.rezultat >= 0 ? "rambursare" : "plata";
    calc.querySelectorAll("[data-show]").forEach((el) => { el.hidden = el.dataset.show !== stare; });
    calc.querySelector(".calc__result").dataset.stare = stare;
    calc.querySelectorAll("[data-out]").forEach((el) => {
      const v = r[el.dataset.out];
      el.textContent = lire.format(el.dataset.out === "rezultat" ? Math.abs(v) : v);
    });
  };
  form.addEventListener("input", actualizeaza);
  actualizeaza();

  // Butonul de sub rezultat completează formularul de contact
  calc.querySelector(".calc__cta").addEventListener("click", () => {
    const contact = document.getElementById("contact-form");
    const optiune = [...contact.elements.tip.options].find((o) => o.text.includes("CIS"));
    if (optiune) contact.elements.tip.value = optiune.value;
    if (ultimRezultat && !contact.elements.mesaj.value) {
      const suma = lire.format(Math.abs(ultimRezultat.rezultat));
      contact.elements.mesaj.value = document.documentElement.lang === "en"
        ? `CIS calculator estimate: ${ultimRezultat.rezultat >= 0 ? "refund" : "to pay"} ${suma} (gross pay ${lire.format(ultimRezultat.brut)}).`
        : `Estimare din calculatorul CIS: ${ultimRezultat.rezultat >= 0 ? "rambursare" : "de plată"} ${suma} (venit brut ${lire.format(ultimRezultat.brut)}).`;
    }
  });
}
