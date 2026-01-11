// back-to-top.js
(function() {
  const btn = document.createElement('button');
  btn.textContent = '↑ Top';
  btn.style.position = 'fixed';
  btn.style.bottom = '1.2rem';
  btn.style.right = '1.2rem';
  btn.style.padding = '0.6rem 1rem';
  btn.style.background = '#58a6ff';
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.style.borderRadius = '8px';
  btn.style.cursor = 'pointer';
  btn.style.fontFamily = "'Roboto', sans-serif";
  btn.style.fontWeight = '500';
  btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
  btn.style.opacity = '0';
  btn.style.transition = 'opacity 0.4s ease';
  btn.style.zIndex = '9999';

  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.opacity = '1';
    } else {
      btn.style.opacity = '0';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
