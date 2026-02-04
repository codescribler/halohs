/* ============================================================
   HALO HEARING SOLUTIONS — v5.0 "Premium Edition" JS
   Rich animations, parallax, magnetic buttons, swipe carousel
   ============================================================ */

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    initScrollProgress();
    initHeader();
    initMobileNav();
    initScrollReveal();
    initFAQ();
    initCounters();
    initSmoothScroll();
    initContactForm();
    initStickyCtaBar();
    initReviewCarousel();
    initHeroParallax();
    initHeroImageZoom();
    initMagneticButtons();
    initStaggeredGrids();
  });

  /* --- Scroll Progress Bar --------------------------------- */
  function initScrollProgress() {
    var bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    var ticking = false;

    function update() {
      var scrollTop = window.scrollY || window.pageYOffset;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      var progress = Math.min(scrollTop / docHeight, 1);
      bar.style.transform = 'scaleX(' + progress + ')';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* --- Sticky Header --------------------------------------- */
  function initHeader() {
    var header = document.querySelector('.header');
    if (!header) return;

    var threshold = 10;
    var ticking = false;

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (y > threshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
    onScroll();
  }

  /* --- Mobile Navigation ----------------------------------- */
  function initMobileNav() {
    var toggle = document.querySelector('.menu-toggle');
    var mobileNav = document.querySelector('.mobile-nav');
    if (!toggle || !mobileNav) return;

    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.contains('open');
      if (isOpen) closeNav();
      else openNav();
    });

    var links = mobileNav.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeNav();
      }
    });

    function openNav() {
      mobileNav.classList.add('open');
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      mobileNav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  /* --- Scroll Reveal (IntersectionObserver + blur) ---------- */
  function initScrollReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    if (reducedMotion) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -60px 0px'
    });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* --- FAQ Accordion --------------------------------------- */
  function initFAQ() {
    var items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(function (item) {
      var btn = item.querySelector('.faq-question');
      if (!btn) return;

      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        // Close all others
        items.forEach(function (other) {
          if (other !== item) {
            other.classList.remove('open');
            var otherBtn = other.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        item.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  }

  /* --- Animated Counters (spring easing) ------------------- */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(function (el) {
        el.textContent = formatCount(el);
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function formatCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var decimals = (String(target).split('.')[1] || '').length;
    return prefix + target.toFixed(decimals) + suffix;
  }

  function animateCount(el) {
    if (reducedMotion) {
      el.textContent = formatCount(el);
      return;
    }

    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var decimals = (String(target).split('.')[1] || '').length;
    var duration = 2200;
    var start = performance.now();

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function tick(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOutExpo(progress);
      var current = eased * target;
      el.textContent = prefix + current.toFixed(decimals) + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = prefix + target.toFixed(decimals) + suffix;
      }
    }
    requestAnimationFrame(tick);
  }

  /* --- Smooth Scroll for anchor links ---------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (href === '#' || href === '#0') return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        var headerOffset = 120;
        var top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* --- Contact Form Validation ----------------------------- */
  function initContactForm() {
    var form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      // Clear previous errors
      form.querySelectorAll('.form-group').forEach(function (group) {
        group.classList.remove('error');
      });

      // Check required fields
      var required = form.querySelectorAll('[required]');
      required.forEach(function (input) {
        var group = input.closest('.form-group');
        if (!input.value.trim()) {
          if (group) group.classList.add('error');
          valid = false;
        }
      });

      // Validate email
      var emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim()) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          var emailGroup = emailInput.closest('.form-group');
          if (emailGroup) emailGroup.classList.add('error');
          valid = false;
        }
      }

      // Validate phone
      var phoneInput = form.querySelector('input[type="tel"]');
      if (phoneInput && phoneInput.value.trim()) {
        var cleaned = phoneInput.value.replace(/[\s\-\(\)]/g, '');
        if (cleaned.length < 10 || cleaned.length > 14) {
          var phoneGroup = phoneInput.closest('.form-group');
          if (phoneGroup) phoneGroup.classList.add('error');
          valid = false;
        }
      }

      if (valid) {
        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          var originalText = submitBtn.innerHTML;
          submitBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> Message Sent!';
          submitBtn.style.background = 'var(--teal)';
          submitBtn.style.borderColor = 'var(--teal)';
          submitBtn.disabled = true;
          setTimeout(function () {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.style.borderColor = '';
            submitBtn.disabled = false;
            form.reset();
          }, 3000);
        }
      }
    });
  }

  /* --- Sticky CTA Bar (mobile) ----------------------------- */
  function initStickyCtaBar() {
    var bar = document.querySelector('.sticky-cta-bar');
    if (!bar) return;

    var hero = document.querySelector('.hero');
    if (!hero) return;

    var ticking = false;

    function onScroll() {
      var heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom < 0) {
        bar.classList.add('visible');
        document.body.classList.add('sticky-visible');
      } else {
        bar.classList.remove('visible');
        document.body.classList.remove('sticky-visible');
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
    onScroll();
  }

  /* --- Review Carousel (with touch/swipe) ------------------ */
  function initReviewCarousel() {
    var carousel = document.querySelector('.review-carousel');
    if (!carousel) return;

    var track = carousel.querySelector('.review-carousel-track');
    var dots = carousel.querySelectorAll('.carousel-dot');
    var prevBtn = carousel.querySelector('.carousel-btn--prev');
    var nextBtn = carousel.querySelector('.carousel-btn--next');
    if (!track) return;

    var slides = track.children;
    var total = slides.length;
    var current = 0;
    var autoplayInterval = null;
    var autoplayDelay = 5000;
    var isPaused = false;

    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;
    var touchThreshold = 50;

    function goTo(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      current = index;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === current);
      });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(function () {
        if (!isPaused) next();
      }, autoplayDelay);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    if (nextBtn) nextBtn.addEventListener('click', function () { next(); startAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); startAutoplay(); });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); startAutoplay(); });
    });

    // Touch events for swipe
    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > touchThreshold) {
        if (diff > 0) {
          next();
        } else {
          prev();
        }
        startAutoplay();
      }
    }, { passive: true });

    carousel.addEventListener('mouseenter', function () { isPaused = true; });
    carousel.addEventListener('mouseleave', function () { isPaused = false; });
    carousel.addEventListener('focusin', function () { isPaused = true; });
    carousel.addEventListener('focusout', function () { isPaused = false; });

    carousel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { prev(); startAutoplay(); }
      if (e.key === 'ArrowRight') { next(); startAutoplay(); }
    });

    goTo(0);
    startAutoplay();
  }

  /* --- Hero Parallax (subtle depth on scroll) -------------- */
  function initHeroParallax() {
    if (reducedMotion) return;

    var heroHome = document.querySelector('.hero--home');
    if (!heroHome) return;

    var heroBg = heroHome.querySelector('.hero-bg img');
    var heroContent = heroHome.querySelector('.hero-content--home');
    if (!heroBg && !heroContent) return;

    var ticking = false;

    function onScroll() {
      var scrollTop = window.scrollY || window.pageYOffset;
      var heroHeight = heroHome.offsetHeight;
      if (scrollTop > heroHeight) { ticking = false; return; }

      var ratio = scrollTop / heroHeight;

      if (heroBg) {
        // Background moves slower than scroll = depth effect
        heroBg.style.transform = 'scale(1.05) translateY(' + (scrollTop * 0.15) + 'px)';
      }

      if (heroContent) {
        // Content fades and moves slightly faster
        heroContent.style.opacity = 1 - (ratio * 0.7);
        heroContent.style.transform = 'translateY(' + (scrollTop * 0.08) + 'px)';
      }

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  /* --- Hero Image Zoom (on load) --------------------------- */
  function initHeroImageZoom() {
    if (reducedMotion) return;

    var heroBg = document.querySelector('.hero--home .hero-bg img');
    if (!heroBg) return;

    // The CSS starts the image at scale(1.05).
    // After load, we let the CSS transition (8s) bring it to scale(1.0).
    // We trigger this by adding a class after a short delay.
    setTimeout(function () {
      heroBg.style.transform = 'scale(1.0)';
    }, 200);
  }

  /* --- Magnetic Buttons (subtle pull toward cursor) -------- */
  function initMagneticButtons() {
    if (reducedMotion) return;

    // Only on non-touch devices
    if ('ontouchstart' in window) return;

    var buttons = document.querySelectorAll('.btn-primary, .btn-teal');
    var pull = 0.15; // Magnetic pull strength

    buttons.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translateY(-3px) translate(' + (x * pull) + 'px, ' + (y * pull) + 'px)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  /* --- Staggered Grid Reveals ------------------------------ */
  function initStaggeredGrids() {
    if (reducedMotion) return;

    if (!('IntersectionObserver' in window)) return;

    // Find grid containers that have child cards/items
    var grids = document.querySelectorAll('.grid-3, .grid-4, .promise-grid, .steps, .stats-row');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var children = entry.target.children;
          for (var i = 0; i < children.length; i++) {
            (function (child, delay) {
              setTimeout(function () {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
                child.style.filter = 'blur(0)';
              }, delay);
            })(children[i], i * 120);
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    grids.forEach(function (grid) {
      // Only stagger children that don't already have .reveal class
      // (to avoid double-animating)
      var hasRevealChildren = grid.querySelector('.reveal');
      if (hasRevealChildren) return;

      var children = grid.children;
      for (var i = 0; i < children.length; i++) {
        children[i].style.opacity = '0';
        children[i].style.transform = 'translateY(24px)';
        children[i].style.filter = 'blur(2px)';
        children[i].style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      }

      observer.observe(grid);
    });
  }

})();
