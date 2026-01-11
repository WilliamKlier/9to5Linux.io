(function() {
  let inputBuffer = '';

  // helper funkce – konfety
  function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = 9999;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const confetti = [];
    for(let i=0;i<200;i++){
      confetti.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height - canvas.height,
        r: Math.random()*6+2,
        d: Math.random()*10+5,
        color: `hsl(${Math.random()*360}, 100%, 50%)`,
        tilt: Math.random()*10-10,
        tiltAngleIncrement: Math.random()*0.07+0.05
      });
    }
    function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      confetti.forEach(c=>{
        ctx.beginPath();
        ctx.lineWidth = c.r;
        ctx.strokeStyle = c.color;
        ctx.moveTo(c.x + c.tilt + c.r/2, c.y);
        ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r/2);
        ctx.stroke();
        c.tiltAngle += c.tiltAngleIncrement;
        c.y += (Math.cos(c.d)+1+c.r/2)/2;
        c.tilt = Math.sin(c.tiltAngle)*15;
        if(c.y > canvas.height){c.y = -10;c.x = Math.random()*canvas.width;}
      });
      requestAnimationFrame(draw);
    }
    draw();
    setTimeout(()=>canvas.remove(),5000);
  }

  // Ozzy zpráva
  function showOzzyMessage() {
    const msg = document.createElement('div');
    msg.innerHTML = "🎸 Rest in peace Ozzy Osbourne 🖤";
    msg.style.position = 'fixed';
    msg.style.top = '50%';
    msg.style.left = '50%';
    msg.style.transform = 'translate(-50%, -50%)';
    msg.style.background = 'rgba(40,40,40,0.9)';
    msg.style.color = '#fff';
    msg.style.padding = '1.2rem 1.5rem';
    msg.style.fontFamily = "'Roboto', sans-serif";
    msg.style.fontSize = '1.2rem';
    msg.style.borderRadius = '8px';
    msg.style.textAlign = 'center';
    msg.style.zIndex = 9999;
    msg.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
    document.body.appendChild(msg);
    setTimeout(()=>msg.remove(),5000);
  }

  // malý animovaný pingvin
  function showLinuxPenguin() {
    const penguin = document.createElement('div');
    penguin.innerHTML = "🐧";
    penguin.style.position = 'fixed';
    penguin.style.bottom = '0';
    penguin.style.left = '-50px';
    penguin.style.fontSize = '3rem';
    penguin.style.zIndex = 9999;
    document.body.appendChild(penguin);

    let pos = -50;
    const interval = setInterval(() => {
      pos += 5;
      penguin.style.left = pos + 'px';
      if(pos > window.innerWidth + 50){
        clearInterval(interval);
        penguin.remove();
      }
    }, 20);
  }

  // animace loga 9to5
  function show9to5Logo() {
    const logo = document.createElement('div');
    logo.textContent = "9to5Linux";
    logo.style.position = 'fixed';
    logo.style.top = '20%';
    logo.style.left = '50%';
    logo.style.transform = 'translateX(-50%)';
    logo.style.fontSize = '2rem';
    logo.style.fontWeight = '700';
    logo.style.color = '#58a6ff';
    logo.style.textShadow = '0 0 10px #82cfff';
    logo.style.zIndex = 9999;
    document.body.appendChild(logo);

    logo.animate([
      { transform: 'translateX(-50%) scale(1)' },
      { transform: 'translateX(-50%) scale(1.5)' },
      { transform: 'translateX(-50%) scale(1)' }
    ], {
      duration: 2000,
      iterations: 2
    });

    setTimeout(() => logo.remove(), 4000);
  }

  // naslouchání kláves
  window.addEventListener('keydown', e => {
    if(e.getModifierState && e.getModifierState('CapsLock')){
      if(e.key.length === 1) inputBuffer += e.key.toUpperCase();

      if(inputBuffer.endsWith('HAPPYNEWYEAR')){
        launchConfetti();
        inputBuffer = '';
      }
      if(inputBuffer.endsWith('OZZY')){
        showOzzyMessage();
        inputBuffer = '';
      }
      if(inputBuffer.endsWith('LINUX')){
        showLinuxPenguin();
        inputBuffer = '';
      }
      if(inputBuffer.endsWith('9TO5')){
        show9to5Logo();
        inputBuffer = '';
      }

      if(inputBuffer.length > 20) inputBuffer = inputBuffer.slice(-20);
    }
  });
})();
