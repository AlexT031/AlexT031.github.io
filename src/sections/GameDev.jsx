import React from "react";

const games = [
  {
    title: "Grandma horror prototype",
    desc: "Prototipo experimental de horror en Godot.",
    notes: "Exploración de atmósferas y mecánicas de miedo.",
  },
  {
    title: "Procedural text adventure",
    desc: "Aventura de texto generada proceduralmente.",
    notes: "Motor propio para historias ramificadas.",
  },
  {
    title: "Sound-based platformer",
    desc: "Plataformas donde el sonido guía el avance.",
    notes: "Enfoque en diseño de audio y jugabilidad experimental.",
  },
  {
    title: "Card strategy game",
    desc: "Juego de cartas estratégico con mecánicas originales.",
    notes: "Inspirado en piedra, papel o tijera y juegos de rol.",
  },
];

export default function GameDev() {
  return (
    <section id="gamedev" className="py-24 flex flex-col items-center bg-gradient-to-b from-[#0b0b0f] to-black/90 z-10">
      <h2 className="glow text-3xl font-bold text-fuchsia-400 mb-12">Game Dev</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
        {games.map((g, i) => (
          <div
            key={i}
            className="bg-black/80 border-2 border-fuchsia-900/40 rounded-2xl p-8 shadow-2xl min-w-[260px] max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-fuchsia-400/30 hover:border-fuchsia-400 relative group flex flex-col gap-2 animate-fadein-slow interactive-card"
            tabIndex={0}
            onMouseDown={e => {
              const ripple = document.createElement('span');
              ripple.className = 'ripple';
              ripple.style.left = `${e.nativeEvent.offsetX}px`;
              ripple.style.top = `${e.nativeEvent.offsetY}px`;
              e.currentTarget.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
            onMouseMove={e => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--tilt-x', `${((y/rect.height)-0.5)*10}deg`);
              card.style.setProperty('--tilt-y', `${((x/rect.width)-0.5)*10}deg`);
            }}
            onMouseLeave={e => {
              e.currentTarget.style.setProperty('--tilt-x', `0deg`);
              e.currentTarget.style.setProperty('--tilt-y', `0deg`);
            }}
            style={{
              animationDelay: `${i * 0.14}s`,
              transform: 'perspective(600px) rotateX(var(--tilt-x,0deg)) rotateY(var(--tilt-y,0deg))',
            }}
          >
            <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'repeating-linear-gradient(0deg,rgba(255,0,255,0.07) 0 1px,transparent 1px 16px), repeating-linear-gradient(90deg,rgba(255,0,255,0.07) 0 1px,transparent 1px 16px)'}} />
            <h3 className="glow text-lg font-bold text-fuchsia-200 mb-1 z-10 relative">{g.title}</h3>
            <p className="text-gray-300 text-base font-sans mb-2 z-10 relative">{g.desc}</p>
            <span className="text-xs text-cyan-300 font-mono z-10 relative">{g.notes}</span>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-fuchsia-400/30 rounded-full blur-md animate-pulse z-10" />
            {/* Aquí puede ir un GIF o animación pixelada */}
          </div>
        ))}
      </div>
    </section>
  );
}
