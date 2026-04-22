document.addEventListener('DOMContentLoaded', () => {

  // ── Nav scroll ──────────────────────────────────────
  const nav = document.querySelector('.nav');
  const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── Hamburger ───────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // ── Hero load ───────────────────────────────────────
  const hero = document.querySelector('.hero-split') || document.querySelector('.hero');
  if (hero) requestAnimationFrame(() => hero.classList.add('loaded'));

  // ── Fade-up ─────────────────────────────────────────
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

  // ── Hero Slider ─────────────────────────────────────
  const slider   = document.getElementById('heroSlider');
  const dotsWrap = document.getElementById('heroDots');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.hero-slide'));
    const dots   = dotsWrap ? Array.from(dotsWrap.querySelectorAll('.hero-dot')) : [];
    let cur = 0, timer;

    const goTo = i => {
      slides[cur].classList.remove('active');
      dots[cur] && dots[cur].classList.remove('active');
      cur = (i + slides.length) % slides.length;
      slider.style.transform = `translateX(-${cur * 100}%)`;
      slides[cur].classList.add('active');
      dots[cur]  && dots[cur].classList.add('active');
    };

    const start = () => { timer = setInterval(() => goTo(cur + 1), 6000); };
    const stop  = () => clearInterval(timer);

    slides[0].classList.add('active');
    start();

    dots.forEach(d => d.addEventListener('click', () => { stop(); goTo(+d.dataset.index); start(); }));
    const pauseTarget = slider.parentElement || hero;
    if (pauseTarget) {
      pauseTarget.addEventListener('mouseenter', stop);
      pauseTarget.addEventListener('mouseleave', start);
    }
  }

  // ── Web3Forms ───────────────────────────────────────
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true; btn.textContent = 'Enviando…';
      try {
        const res  = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        const json = await res.json();
        if (json.success) {
          form.style.display = 'none';
          document.getElementById('form-success').style.display = 'block';
        } else {
          btn.disabled = false; btn.textContent = 'Enviar mensaje';
          alert('Error al enviar. Escríbenos por WhatsApp.');
        }
      } catch { btn.disabled = false; btn.textContent = 'Enviar mensaje'; alert('Error de conexión.'); }
    });
  }

});