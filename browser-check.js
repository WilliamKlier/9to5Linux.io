// browser-check.js
(function () {
  const ua = navigator.userAgent;

  const isChrome = /Chrome/.test(ua) && !/Edg|OPR|Brave/.test(ua);
  const isEdge = /Edg/.test(ua);
  const isFirefox = /Firefox/.test(ua);
  const isOpera = /OPR/.test(ua);
  const isBrave = navigator.brave && navigator.brave.isBrave;

  const supported =
    isChrome || isEdge || isFirefox || isOpera || isBrave;

  if (!supported) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(30,30,30,0.96)';
    overlay.style.color = '#fff';
    overlay.style.fontFamily = "'Roboto', sans-serif";
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.textAlign = 'center';
    overlay.style.zIndex = '99999';
    overlay.innerHTML = `
      <h2 style="color:#82cfff;font-size:2rem;margin-bottom:1rem;">
        Unsupported Browser
      </h2>
      <p style="max-width:340px;color:#ccc;margin-bottom:2rem;">
        This website works only on modern supported browsers.
        Please switch to one of the browsers below.
      </p>
      <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;">
        <span style="background:#292929;padding:.6rem 1rem;border-radius:8px;">Chrome</span>
        <span style="background:#292929;padding:.6rem 1rem;border-radius:8px;">Firefox</span>
        <span style="background:#292929;padding:.6rem 1rem;border-radius:8px;">Edge</span>
        <span style="background:#292929;padding:.6rem 1rem;border-radius:8px;">Brave</span>
        <span style="background:#292929;padding:.6rem 1rem;border-radius:8px;">Opera</span>
      </div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
  }
})();
