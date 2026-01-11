(function() {
  // mapování kláves na sekce
  const map = {
    'F': '#features',
    'D': '#distros',
    'C': '#compare',
    'I': '#install'
  };

  window.addEventListener('keydown', e => {
    // ignoruj pokud je Caps Lock zapnutý
    if(e.getModifierState && e.getModifierState('CapsLock')) return;

    const target = map[e.key.toUpperCase()];
    if(target){
      const el = document.querySelector(target);
      if(el){
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
})();
