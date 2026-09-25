// Adresa de e-mail la care ajung cererile de ofertă. SCHIMB-O cu adresa ta.
const EMAIL_FIRMA = "contact@exemplu.ro";

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

  const subiect = `Cerere ofertă contabilitate - ${date.get("nume")}`;
  const corp = [
    `Nume: ${date.get("nume")}`,
    `Telefon: ${date.get("telefon")}`,
    `E-mail: ${date.get("email")}`,
    `Tipul firmei: ${date.get("tip")}`,
    `Număr de angajați: ${date.get("angajati")}`,
    "",
    `Mesaj: ${date.get("mesaj")}`,
  ].join("\n");

  window.location.href =
    `mailto:${EMAIL_FIRMA}?subject=${encodeURIComponent(subiect)}&body=${encodeURIComponent(corp)}`;
});

// Anul curent în subsol
document.getElementById("an").textContent = new Date().getFullYear();
