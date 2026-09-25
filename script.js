// Adresa de e-mail la care ajung cererile de ofertă. SCHIMB-O cu adresa ta.
const EMAIL_FIRMA = "contact@exemplu.co.uk";

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
