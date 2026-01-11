// mobile-check.js
(function() {
    // detekce mobilních zařízení
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // vytvoření overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(30,30,30,0.95)';
        overlay.style.color = '#fff';
        overlay.style.fontFamily = "'Roboto', sans-serif";
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.textAlign = 'center';
        overlay.style.zIndex = '9999';
        overlay.innerHTML = `
            <h2 style="font-size:2rem; margin-bottom:1rem; color:#82cfff;">Mobile Devices Not Supported</h2>
            <p style="max-width:300px; font-size:1rem; color:#ccc;">This site is optimized for desktop devices. Please visit on a computer for the best experience.</p>
        `;
        document.body.appendChild(overlay);
    }
})();
