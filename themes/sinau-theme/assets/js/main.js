// Scroll to top button
document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  // Initialize Splide for Popular Posts
  const featuredSlider = document.querySelector('.featured-splide');
  if (featuredSlider && typeof Splide !== 'undefined') {
    new Splide('.featured-splide', {
      type: 'loop',
      perPage: 3,
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
      arrows: false,
      gap: '1.5rem',
      breakpoints: {
        1024: {
          perPage: 2,
        },
        768: {
          perPage: 1,
        },
      },
    }).mount();
  }

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
