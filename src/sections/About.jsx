import React from "react";

export default function About() {
  return (
    <section id="about" className="relative flex flex-col md:flex-row items-center justify-center py-24 gap-12 z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full border-t border-b border-cyan-900/40 pointer-events-none" />
      <div className="md:w-1/2 text-left bg-black/70 rounded-2xl p-8 shadow-xl border border-cyan-900/40 animate-fadein-slow interactive-card" tabIndex={0}
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
          transform: 'perspective(600px) rotateX(var(--tilt-x,0deg)) rotateY(var(--tilt-y,0deg))',
        }}
      >
        <h2 className="glow text-3xl font-bold text-cyan-300 mb-4">Sobre mí</h2>
        <p className="text-lg text-gray-300 font-sans mb-3">
          Soy Alejo Briff, un desarrollador backend y de videojuegos con mentalidad analítica, experiencia en sistemas y pasión por los juegos y la tecnología interactiva. Me motiva la curiosidad y el aprendizaje constante.
        </p>
        <p className="text-base muted font-sans">
          Me especializo en construir sistemas robustos, resolver problemas complejos y crear experiencias interactivas que despierten la curiosidad.
        </p>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="w-72 h-48 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl blur-md animate-pulse shadow-2xl border border-cyan-900/30" />
      </div>
    </section>
  );
}
