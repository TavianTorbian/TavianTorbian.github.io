/* -------------------------------------------------------------
   SITO PERSONALE - FEDERICO TAVIANI (5ª CM)
   IIS "Marconi Pieralisi" Jesi - A.S. 2025/2026
   Logica Javascript (main.js)
   ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. GESTIONE MENU MOBILE (HAMBURGER)
  const hamburger = document.querySelector('.hamburger-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
      
      // Impedisci lo scrolling del body quando il menu è aperto
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : 'auto';
    });

    // Chiudi il menu quando si clicca su un link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
      });
    });
  }

  // 2. EFFETTO HEADER SCROLLATO
  const header = document.querySelector('.site-header');
  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  if (header) {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Controllo iniziale al caricamento
  }

  // 3. EVIDENZIA LINK ATTIVO NELLA NAVBAR
  const currentPath = window.location.pathname;
  const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Gestione pagine differenti
    if (currentPage && href.includes(currentPage)) {
      link.classList.add('active');
    } else if (!currentPage && href === 'index.html') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 4. ANIMAZIONE SVELAMENTO CONTENUTI AL DECOLLO (INTERSECTION OBSERVER)
  const fadeSections = document.querySelectorAll('.fade-in-section');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Ferma l'osservazione dopo che è visibile
        }
      });
    }, observerOptions);

    fadeSections.forEach(section => {
      sectionObserver.observe(section);
    });
  } else {
    // Fallback per browser vecchi
    fadeSections.forEach(section => {
      section.classList.add('is-visible');
    });
  }

  // 5. VALIDAZIONE E SIMULAZIONE INVIO FORM CONTATTI
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Impedisci l'invio reale del form
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      // Cambia lo stato del pulsante (caricamento simulato)
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invio in corso...';

      setTimeout(() => {
        // Reset del form e notifica successo
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = '<i class="fas fa-check-circle"></i> Grazie Federico! Messaggio inviato con successo. Ti risponderò al più presto.';
        formFeedback.style.display = 'flex';

        // Nascondi il feedback dopo 5 secondi
        setTimeout(() => {
          formFeedback.style.display = 'none';
        }, 5000);
      }, 1500);
    });
  }

  // 6. GESTIONE HIGHLIGHT DELLE ANCORE SU SINGLE-PAGE (INDEX.HTML)
  if (currentPage === 'index.html' || currentPage === '') {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
      let scrollY = window.pageYOffset;
      
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']')?.classList.add('active');
        } else {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']')?.classList.remove('active');
        }
      });
    });
  }
});
