// Cargar Navbar y activar pestaña actual
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-placeholder");

  fetch("components/navbar.html")
    .then(res => res.text())
    .then(html => {
      navbarContainer.innerHTML = html;

      highlightActiveNav();
    })
    .catch(err => console.error("Error al cargar el navbar:", err));
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
