// ==========================================
// PSMURO — Main JavaScript
// Theme Switcher, Mobile Menu, Animations
// ==========================================

document.addEventListener('DOMContentLoaded', function() {

  // ===== Theme Switcher =====
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('psmuro-theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Initialize theme icon based on saved preference
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ===== Mobile Hamburger Menu =====
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // ===== Scroll Animations (IntersectionObserver) =====
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    animatedElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  // ===== Active Navigation Link =====
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && href !== '/' && currentPath.startsWith(href)) {
      link.classList.add('active');
    } else if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
  });

// ===== Hero Slider =====
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (slides.length > 0) {
    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval;

    function initSlider() {
      triggerSlideAnimations(slides[0]);
      startSlideTimer();
    }

    function goToSlide(n) {
      slides[currentSlide].classList.remove('active');
      if(dots.length) dots[currentSlide].classList.remove('active');
      
      currentSlide = (n + slideCount) % slideCount;
      
      slides[currentSlide].classList.add('active');
      if(dots.length) dots[currentSlide].classList.add('active');
      
      triggerSlideAnimations(slides[currentSlide]);
    }

    function triggerSlideAnimations(slide) {
      const animatedElements = slide.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
      animatedElements.forEach(el => {
        el.classList.remove('visible');
        void el.offsetWidth; // trigger reflow
        el.classList.add('visible');
      });
    }

    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }

    function startSlideTimer() {
      if (slideInterval) clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startSlideTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startSlideTimer(); });
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        startSlideTimer();
      });
    });

    initSlider();
  }

});

// ===== Lightbox =====
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});
