// low-ram-notification.js
(function() {
  const deviceMemory = navigator.deviceMemory || 4;

  if (deviceMemory < 4) {
    const notif = document.createElement('div');
    notif.style.position = 'fixed';
    notif.style.bottom = '1rem';
    notif.style.right = '1rem';
    notif.style.maxWidth = '300px';
    notif.style.background = 'rgba(40,40,40,0.9)';
    notif.style.color = '#fff';
    notif.style.fontFamily = "'Roboto', sans-serif";
    notif.style.borderLeft = '4px solid #82cfff';
    notif.style.padding = '1rem 1.2rem';
    notif.style.borderRadius = '8px';
    notif.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4)';
    notif.style.zIndex = '9999';
    notif.style.opacity = '0';
    notif.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    notif.style.transform = 'translateY(20px)';

    notif.innerHTML = `
      <strong>Low Memory Warning</strong>
      <p style="font-size:0.9rem; margin-top:0.3rem; color:#ccc;">
        Your device has only ${deviceMemory}GB RAM. The site may run slower than usual.
        Consider closing unnecessary tabs for best performance.
      </p>
    `;

    document.body.appendChild(notif);

    // fade-in
    setTimeout(() => {
      notif.style.opacity = '1';
      notif.style.transform = 'translateY(0)';
    }, 200);

    // automatické fade-out po 8 sekundách
    setTimeout(() => {
      notif.style.opacity = '0';
      notif.style.transform = 'translateY(20px)';
      setTimeout(() => notif.remove(), 500);
    }, 8000);
  }
})();
