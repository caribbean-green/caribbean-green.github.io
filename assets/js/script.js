// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-placeholder");
  const footerContainer = document.getElementById("footer-placeholder");

  // Detecta en qué carpeta estamos
  const pathDepth = window.location.pathname.split("/").length - 2;
  const prefix = pathDepth > 0 ? "../".repeat(pathDepth) : "./";

  // Carga navbar
  fetch(`${prefix}components/navbar.html`)
    .then(res => res.text())
    .then(html => {
      navbarContainer.innerHTML = html;
      highlightActiveNav();
    })
    .catch(err => console.error("Error al cargar el navbar:", err));

  // Carga footer
  if (footerContainer) {
    fetch(`${prefix}components/footer.html`)
      .then(res => res.text())
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(err => console.error("Error al cargar el footer:", err));
  }
});

function highlightActiveNav() {
  const path = window.location.pathname.replace(/\/$/, '').split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href").replace(/\/$/, '').split("/").pop();
    if (href === path) {
      link.classList.add("active-link");
    }
  });
}
