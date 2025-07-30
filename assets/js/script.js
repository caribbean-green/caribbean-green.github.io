fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    setTimeout(() => {
      const currentPage = window.location.pathname.split("/").pop() || "index.html";
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

      navLinks.forEach(link => {
        const linkPath = link.getAttribute("href").split("/").pop();
        if (linkPath === currentPage) {
          link.classList.add("active-link");
        }
      });
    }, 0);
  });
