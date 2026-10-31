/**
 * PORTFÓLIO ALESSA ROVIGATTI — SCRIPT PRINCIPAL
 * Interatividade, animações, validações e alternância de temas.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeaderNavigation();
  initMobileMenu();
  initScrollAnimations();
  initContactForm();
  handleUrlViewTarget();
});

function handleUrlViewTarget() {
  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get('view');
  if (view) {
    setTimeout(() => {
      const target = document.getElementById(view);
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
        document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('revealed'));
      }
    }, 100);
  }
}

/* ==========================================================================
   1. GERENCIAMENTO DE TEMA (CLARO / ESCURO) COM LOCALSTORAGE
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Recupera tema salvo ou define 'light' como padrão editorial
  const savedTheme = localStorage.getItem('alessa_theme');
  const initialTheme = savedTheme || 'light';

  root.setAttribute('data-theme', initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('alessa_theme', newTheme);
      
      console.log(`[Tema] Alternado para: ${newTheme}`);
    });
  }
}

/* ==========================================================================
   2. CABEÇALHO INTELIGENTE & CONTRASTE DINÂMICO
   ========================================================================== */
function initHeaderNavigation() {
  const header = document.getElementById('header');
  const heroSection = document.getElementById('inicio');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateHeaderState() {
    if (!header || !heroSection) return;

    const heroBottom = heroSection.getBoundingClientRect().bottom;
    
    // Se o Hero ainda estiver visível na tela
    if (heroBottom > 80) {
      header.classList.add('on-hero');
      header.classList.remove('scrolled');
    } else {
      header.classList.remove('on-hero');
      header.classList.add('scrolled');
    }
  }

  // Executa no load e durante a rolagem
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();

  // Destaque da seção ativa no menu
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px'
  });

  sections.forEach((sec) => sectionObserver.observe(sec));
}

/* ==========================================================================
   3. MENU MOBILE ACESSÍVEL (GAVETA DESLIZANTE)
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('mobile-close-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    if (!mobileNav || !backdrop) return;
    mobileNav.classList.add('open');
    backdrop.classList.add('active');
    mobileNav.setAttribute('aria-hidden', 'false');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Impede rolagem ao fundo
  }

  function closeMenu() {
    if (!mobileNav || !backdrop) return;
    mobileNav.classList.remove('open');
    backdrop.classList.remove('active');
    mobileNav.setAttribute('aria-hidden', 'true');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  // Fecha automaticamente ao clicar em qualquer link da âncora
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Fecha com a tecla ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   4. ANIMAÇÕES REVEAL SUAVES (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  document.documentElement.classList.add('js-ready');
  const revealElements = document.querySelectorAll('.reveal-item');

  function triggerVisible() {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 30) {
        el.classList.add('revealed');
      }
    });
  }

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.05
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // Execução imediata e evento de rolagem como redundância confiável
  triggerVisible();
  window.addEventListener('scroll', triggerVisible, { passive: true });

  // Efeito sutil no arco escultural durante rolagem
  const arch = document.querySelector('.sculptural-arch');
  if (arch) {
    window.addEventListener('scroll', () => {
      const rect = arch.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const subtleOffset = (progress - 0.5) * 12; // deslocamento sutil de no máx 6px
        arch.style.transform = `translateY(${subtleOffset}px)`;
      }
    }, { passive: true });
  }
}

/* ==========================================================================
   5. FORMULÁRIO DE CONTATO (VALIDAÇÃO E TRANSPARÊNCIA)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const messageInput = document.getElementById('form-message');
  const statusBox = document.getElementById('form-status');

  // Validação simples de formato de e-mail
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateField(input, condition) {
    const parent = input.closest('.form-group');
    if (!parent) return false;

    if (!condition) {
      parent.classList.add('has-error');
      return false;
    } else {
      parent.classList.remove('has-error');
      return true;
    }
  }

  // Remove erro ao digitar
  [nameInput, emailInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      const parent = input.closest('.form-group');
      if (parent && parent.classList.contains('has-error')) {
        parent.classList.remove('has-error');
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const msgVal = messageInput ? messageInput.value.trim() : '';

    const isNameValid = validateField(nameInput, nameVal.length >= 2);
    const isEmailValid = validateField(emailInput, isValidEmail(emailVal));
    const isMsgValid = validateField(messageInput, msgVal.length >= 5);

    if (isNameValid && isEmailValid && isMsgValid) {
      // Monta URL mailto segura com assunto e mensagem preenchidos
      const targetEmail = '38041@raphaeldisanto.com.br';
      const subject = encodeURIComponent(`Contato de ${nameVal} — Portfólio`);
      const body = encodeURIComponent(`Olá, Alessa!\n\n${msgVal}\n\n---\nRemetente: ${nameVal}\nE-mail para resposta: ${emailVal}`);
      const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

      // Abre cliente de e-mail real
      window.location.href = mailtoUrl;

      // Exibe status transparente (sem simular envio falso de backend)
      if (statusBox) {
        statusBox.className = 'form-status-box info';
        statusBox.innerHTML = `<strong>Pronto!</strong> Seu aplicativo de e-mail padrão foi iniciado com a sua mensagem pronta para envio direto para <strong>${targetEmail}</strong>.<br><br>Se preferir enviar manualmente pelo seu webmail, basta encaminhar sua mensagem para <em>${targetEmail}</em>.`;
      }

      form.reset();
    } else {
      if (statusBox) {
        statusBox.className = 'form-status-box';
        statusBox.style.display = 'none';
      }
    }
  });
}
