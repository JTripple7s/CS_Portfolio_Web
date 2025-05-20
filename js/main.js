document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  btn.onclick = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animation = entry.target.dataset.animate || 'animate__rotateInUpLeft'
        entry.target.classList.add('animate__animated', animation);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});

