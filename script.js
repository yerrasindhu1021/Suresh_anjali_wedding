(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const layer = document.querySelector('.petal-layer');
  if (layer && !reduced) {
    const flowers = ['✿','❀','✽'];
    for (let i=0; i<18; i++) {
      const p = document.createElement('span');
      p.className = 'petal'; p.textContent = flowers[i % flowers.length];
      p.style.left = `${Math.random()*100}%`;
      p.style.animationDuration = `${10+Math.random()*12}s`;
      p.style.animationDelay = `${Math.random()*10}s`;
      p.style.fontSize = `${12+Math.random()*14}px`;
      layer.appendChild(p);
    }
  }
  // Wedding Muhurtham: 15 Nov 2026, 11:29 AM India Standard Time.
  const target = new Date('2026-11-15T11:29:00+05:30').getTime();
  function update() {
    const d = target - Date.now();
    const v = d <= 0 ? [0,0,0,0] : [
      Math.floor(d/86400000), Math.floor((d%86400000)/3600000),
      Math.floor((d%3600000)/60000), Math.floor((d%60000)/1000)
    ];
    document.querySelectorAll('[data-countdown]').forEach(box => {
      ['days','hours','minutes','seconds'].forEach((unit,i) => {
        const el = box.querySelector(`[data-unit="${unit}"]`);
        if (el) el.textContent = String(v[i]).padStart(2,'0');
      });
      if (d <= 0) {
        const heading = box.parentElement.querySelector('h2');
        if (heading) heading.textContent = 'The wedding celebration has begun!';
      }
    });
  }
  update(); window.setInterval(update,1000);
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-header nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
})();