/* ============================================================
   OCHS AM SPIESS – main.js
   ============================================================ */

// ── Current year in footer ─────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Nav: scroll behaviour ──────────────────────────────────
(function () {
  const nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ── Nav: mobile burger ─────────────────────────────────────
(function () {
  const burger = document.getElementById('burger');
  const links  = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      burger.classList.remove('open');
    });
  });
})();

// ── Hero parallax ──────────────────────────────────────────
(function () {
  const content = document.getElementById('heroContent');
  if (!content) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const limit = window.innerHeight;
    if (y > limit) return;
    const progress = y / limit;
    content.style.transform = `translateY(${progress * 30}%)`;
    content.style.opacity   = 1 - progress * 1.4;
  }, { passive: true });
})();

// ── Ember particles ────────────────────────────────────────
(function () {
  const container = document.getElementById('embers');
  if (!container) return;

  const COUNT = 28;

  for (let i = 0; i < COUNT; i++) {
    const el = document.createElement('div');
    el.className = 'ember';

    const x        = Math.random() * 100;
    const size     = 2 + Math.random() * 4;
    const duration = 4 + Math.random() * 6;
    const delay    = Math.random() * 5;
    const drift    = (Math.random() - 0.5) * 60;

    el.style.cssText = `
      left: ${x}%;
      width: ${size}px;
      height: ${size}px;
      --drift: ${drift}px;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
    `;

    container.appendChild(el);
  }
})();

// ── Scroll reveal (Intersection Observer) ─────────────────
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          // Stagger siblings in the same parent
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
          const offset   = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Math.max(0, offset) * 80);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '-60px 0px' }
  );

  els.forEach(el => io.observe(el));
})();

// ── Contact form ───────────────────────────────────────────
(function () {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    btn.disabled    = true;
    btn.textContent = 'Wird gesendet…';

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    data,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        form.hidden    = true;
        success.hidden = false;
      } else {
        throw new Error('Server error');
      }
    } catch {
      btn.disabled    = false;
      btn.textContent = 'Anfrage absenden';
      alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie direkt eine E-Mail.');
    }
  });
})();
