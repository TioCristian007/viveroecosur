document.addEventListener("DOMContentLoaded", () => {

  // ─── Nav scroll ──────────────────────────────────────
  const nav = document.querySelector(".nav");
  const updateNav = () => {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else                       nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();

  // ─── Nav toggle (mobile) ─────────────────────────────
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", links.classList.contains("open"));
    });
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  // ─── Hero load trigger ───────────────────────────────
  const hero = document.querySelector(".hero");
  if (hero) {
    requestAnimationFrame(() => hero.classList.add("loaded"));
  }

  // ─── Fade-up on scroll ───────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

  // ─── Contact form (Formspree) ─────────────────────────
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      btn.textContent = "Enviando…";

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (res.ok) {
          form.style.display = "none";
          document.getElementById("form-success").style.display = "block";
        } else {
          btn.disabled = false;
          btn.textContent = "Enviar mensaje";
          alert("Hubo un error al enviar. Intenta de nuevo o escríbenos directamente.");
        }
      } catch {
        btn.disabled = false;
        btn.textContent = "Enviar mensaje";
        alert("Hubo un error de conexión. Intenta de nuevo.");
      }
    });
  }

  // ─── Active nav link ─────────────────────────────────
  const path = window.location.pathname;
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (
      (path === "/" || path.endsWith("index.html")) && (href === "index.html" || href === "/")  ||
      path.includes("frutales")  && href.includes("frutales") ||
      path.includes("contacto")  && href.includes("contacto")
    ) {
      a.classList.add("active");
    }
  });

});