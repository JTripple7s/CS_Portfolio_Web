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
});

