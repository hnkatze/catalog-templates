/**
 * Scroll Animations Handler
 * Fallback para navegadores sin soporte de animation-timeline
 */

// Verificar soporte para animation-timeline
const supportsScrollTimeline = CSS.supports('animation-timeline', 'view()');

if (!supportsScrollTimeline) {
  // Fallback con Intersection Observer
  document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    };

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Agregar clase cuando el elemento entra en viewport
          entry.target.classList.add('in-view');
          
          // Para elementos con animación de contador
          if (entry.target.classList.contains('scroll-counter')) {
            animateCounter(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observar todos los elementos con clases de animación
    const animatedElements = document.querySelectorAll(`
      .scroll-fade-in,
      .scroll-slide-up,
      .scroll-slide-left,
      .scroll-slide-right,
      .scroll-scale,
      .scroll-rotate,
      .scroll-reveal-text,
      .scroll-counter,
      .scroll-hero-title,
      .scroll-hero-subtitle,
      .scroll-card,
      .scroll-section-fade
    `);

    animatedElements.forEach(element => {
      animationObserver.observe(element);
    });
  });
}

// Animación de contador para números
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target')) || parseInt(element.innerText);
  const duration = 2000; // 2 segundos
  const step = target / (duration / 16); // 60 FPS
  let current = 0;

  const updateCounter = () => {
    current += step;
    if (current < target) {
      element.innerText = Math.floor(current) + '+';
      requestAnimationFrame(updateCounter);
    } else {
      element.innerText = target + '+';
    }
  };

  updateCounter();
}

// Efecto parallax suave para elementos decorativos
document.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  parallaxElements.forEach(element => {
    const speed = element.getAttribute('data-speed') || 0.5;
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
}, { passive: true });

// Exportar para uso en otros scripts si es necesario
export { supportsScrollTimeline, animateCounter };