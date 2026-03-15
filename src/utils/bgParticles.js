// Fondo de partículas animadas muy lentas para atmósfera cyberpunk
export function animateParticles() {
  const canvas = document.getElementById('bgParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  const particles = Array.from({length: 24}, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 1.5 + Math.random() * 2.5,
    dx: (Math.random() - 0.5) * 0.08,
    dy: (Math.random() - 0.5) * 0.08,
    c: Math.random() > 0.5 ? 'rgba(0,255,255,0.18)' : 'rgba(192,132,252,0.13)'
  }));
  function draw() {
    ctx.clearRect(0,0,w,h);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.c;
      ctx.shadowColor = p.c;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
    }
    requestAnimationFrame(draw);
  }
  draw();
}
