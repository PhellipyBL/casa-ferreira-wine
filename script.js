/* ===========================
   NAVEGAÇÃO — scroll & mobile
   =========================== */
const nav      = document.getElementById('nav');
const toggle   = document.getElementById('navToggle');
const menu     = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
}, { passive: true });

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('nav__menu--open');
  toggle.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('nav__menu--open');
    toggle.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  });
});

/* ===========================
   HERO — parallax sutil
   =========================== */
const heroImg = document.querySelector('.hero__img');
const hero    = document.querySelector('.hero');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroImg) {
  hero.classList.add('hero--loaded');

  if (!prefersReducedMotion) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking && window.scrollY < window.innerHeight) {
        requestAnimationFrame(() => {
          heroImg.style.transform = `translate3d(0, ${window.scrollY * 0.25}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}

/* ===========================
   ANIMATE ON SCROLL (AOS leve)
   =========================== */
const aosEls = document.querySelectorAll('[data-aos]');

const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('aos-visible');
      }, delay);
      aosObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

aosEls.forEach((el, i) => {
  el.dataset.delay = (i % 4) * 100;
  aosObserver.observe(el);
});

/* ===========================
   LGPD — consent + lazy tracking
   =========================== */
const LGPD_KEY = 'cfw_lgpd_v1';
const banner = document.getElementById('lgpdBanner');
const cfg = window.CFW_CONFIG || {};

function loadGA4(id) {
  if (!id || id.includes('XXXX')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', id, { send_page_view: true });
}

// Meta Pixel já carregou no <head> em modo 'revoke' (queue pausada).
// Aqui só damos grant/revoke após consent — Consent API oficial do Meta.
function grantMetaConsent() {
  if (typeof fbq === 'function') fbq('consent', 'grant');
}

function applyConsent(state) {
  localStorage.setItem(LGPD_KEY, state);
  if (banner) banner.hidden = true;
  if (state === 'accepted') {
    loadGA4(cfg.gaId);
    grantMetaConsent();
  }
}

const stored = localStorage.getItem(LGPD_KEY);
if (stored === 'accepted') {
  loadGA4(cfg.gaId);
  grantMetaConsent();
} else if (stored !== 'rejected' && banner) {
  banner.hidden = false;
}

document.getElementById('lgpdAccept')?.addEventListener('click', () => applyConsent('accepted'));
document.getElementById('lgpdReject')?.addEventListener('click', () => applyConsent('rejected'));

/* ===========================
   TRACKING — eventos de conversão
   =========================== */
function trackEvent(name, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', name, params);
  }
  if (typeof fbq === 'function') {
    const fbMap = {
      'comprar_ingresso_click': 'InitiateCheckout',
      'whatsapp_click': 'Contact',
    };
    const fbEvent = fbMap[name];
    if (fbEvent) fbq('track', fbEvent, params);
    else fbq('trackCustom', name, params);
  }
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    console.log('[track]', name, params);
  }
}

// Botões "Comprar Ingresso" — qualquer link pra smilein.com.br
document.querySelectorAll('a[href*="smilein.com.br"]').forEach(a => {
  a.addEventListener('click', () => {
    trackEvent('comprar_ingresso_click', {
      location: a.closest('section,nav,footer')?.tagName?.toLowerCase() || 'unknown',
      label: a.textContent.trim()
    });
    // Meta Pixel — InitiateCheckout (visitante saindo pra ticketeria)
    if (typeof fbq === 'function') {
      fbq('track', 'InitiateCheckout', {
        content_name: 'Casa Ferreira Wine - Experiencia',
        content_category: 'enoturismo',
        value: 398,
        currency: 'BRL'
      });
    }
  });
});

// Botões WhatsApp — qualquer link wa.me
document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
  a.addEventListener('click', () => {
    trackEvent('whatsapp_click', {
      location: a.closest('section,nav,footer,a.whatsapp-float')?.className || 'whatsapp-float'
    });
    // Meta Pixel — Lead (contato via WhatsApp)
    if (typeof fbq === 'function') {
      fbq('track', 'Lead', {
        content_name: 'WhatsApp Contact',
        content_category: 'lead'
      });
    }
  });
});

/* ===========================
   GALERIA — lightbox
   =========================== */
const galeriaItems = document.querySelectorAll('.galeria__item');

galeriaItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (!img) return;

    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Imagem ampliada');

    const lbImg = document.createElement('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox__close';
    closeBtn.setAttribute('aria-label', 'Fechar');
    closeBtn.innerHTML = '&times;';

    lb.append(lbImg, closeBtn);
    document.body.appendChild(lb);
    document.body.style.overflow = 'hidden';
    closeBtn.focus();

    const onKey = (e) => { if (e.key === 'Escape') close(); };
    const close = () => {
      lb.remove();
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      item.focus();
    };

    lb.addEventListener('click', (e) => {
      if (e.target === lb || e.target === closeBtn || e.target === lbImg) close();
    });
    document.addEventListener('keydown', onKey);
  });
});

/* ===========================
   WHATSAPP FLUTUANTE — para de pular após N segundos
   =========================== */
const wa = document.querySelector('.whatsapp-float');
if (wa && !prefersReducedMotion) {
  setTimeout(() => wa.classList.add('whatsapp-float--idle'), 12000);
  // Volta a chamar atenção quando o usuário rolar pra perto do final
  let scrolledNearEnd = false;
  window.addEventListener('scroll', () => {
    if (scrolledNearEnd) return;
    const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    if (pct > 0.6) {
      scrolledNearEnd = true;
      wa.classList.remove('whatsapp-float--idle');
      setTimeout(() => wa.classList.add('whatsapp-float--idle'), 6000);
    }
  }, { passive: true });
}
