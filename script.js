/* ====== MENÚ LATERAL ====== */
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

/* ====== SUBMENÚ ====== */
document.querySelectorAll(".submenu-toggle").forEach(toggle => {
  toggle.addEventListener("click", e => {
    e.preventDefault();
    toggle.parentElement.classList.toggle("open");
  });
});

/* ====== BUSCADOR ====== */
const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");

searchBtn.addEventListener("click", () => {
  searchOverlay.classList.add("active");
});

closeSearch.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
});

/* ====== CARRUSEL ====== */
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const items = document.querySelectorAll(".carousel-item");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

/* ====== DARK MODE ====== */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

/* ====== AÑO AUTOMÁTICO ====== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ====== COOKIES ====== */
const cookiesBanner = document.getElementById("cookiesBanner");
const acceptCookies = document.getElementById("acceptCookies");

if (!localStorage.getItem("cookiesAccepted")) {
  cookiesBanner.style.display = "flex";
}

acceptCookies.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookiesBanner.style.display = "none";
});

/* ====== GOOGLE TRADUCTOR ====== */
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "es", includedLanguages: "es,en,fr,de" },
    "google_translate_element"
  );
}

/* ====== TRADUCTOR FLAGS ====== */
document.querySelectorAll(".gtw a").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    const lang = el.getAttribute("data-lang");
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  });
});

/* ====== RECORDAR IDIOMA SELECCIONADO ====== */
// Leer cookie por nombre
function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Aplicar idioma guardado al cargar página
document.addEventListener("DOMContentLoaded", () => {
  const lang = getCookie("googtrans");
  if (lang) {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang.split("/")[2];
      select.dispatchEvent(new Event("change"));
    }
  }
});
