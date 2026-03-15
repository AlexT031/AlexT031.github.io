import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 flex flex-col items-center z-10">
      <h2 className="glow text-3xl font-bold text-pink-300 mb-12">Contacto</h2>
      <div className="bg-black/80 border border-pink-400/30 rounded-2xl p-10 shadow-2xl flex flex-col items-center gap-6 w-full max-w-lg animate-fadein-slow">
        <p className="text-lg text-pink-100 font-mono mb-2">¿Quieres contactarme?</p>
        <div className="flex flex-col gap-3 w-full items-center">
          <a href="mailto:alejobriff@gmail.com" className="glow text-pink-300 hover:text-cyan-300 focus:text-cyan-300 font-mono text-lg transition-all duration-150 outline-none focus:ring-2 focus:ring-pink-400 rounded" tabIndex={0} aria-label="Enviar email a Alejo Briff"
            onMouseDown={e => {
              const ripple = document.createElement('span');
              ripple.className = 'ripple';
              ripple.style.left = `${e.nativeEvent.offsetX}px`;
              ripple.style.top = `${e.nativeEvent.offsetY}px`;
              e.currentTarget.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
          >alejobriff@gmail.com</a>
          <a href="https://linkedin.com/in/alejobriff" target="_blank" rel="noopener noreferrer" className="glow text-cyan-300 hover:text-pink-300 focus:text-pink-300 font-mono text-lg transition-all duration-150 outline-none focus:ring-2 focus:ring-cyan-400 rounded" tabIndex={0} aria-label="LinkedIn de Alejo Briff"
            onMouseDown={e => {
              const ripple = document.createElement('span');
              ripple.className = 'ripple';
              ripple.style.left = `${e.nativeEvent.offsetX}px`;
              ripple.style.top = `${e.nativeEvent.offsetY}px`;
              e.currentTarget.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
          >LinkedIn</a>
          <a href="https://github.com/AlexT031" target="_blank" rel="noopener noreferrer" className="glow text-fuchsia-400 hover:text-cyan-300 focus:text-cyan-300 font-mono text-lg transition-all duration-150 outline-none focus:ring-2 focus:ring-fuchsia-400 rounded" tabIndex={0} aria-label="GitHub de Alejo Briff"
            onMouseDown={e => {
              const ripple = document.createElement('span');
              ripple.className = 'ripple';
              ripple.style.left = `${e.nativeEvent.offsetX}px`;
              ripple.style.top = `${e.nativeEvent.offsetY}px`;
              e.currentTarget.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
          >GitHub</a>
        </div>
      </div>
      <div className="w-full max-w-lg h-16 mt-8 bg-gradient-to-r from-pink-400/10 via-fuchsia-500/10 to-cyan-400/10 rounded-lg blur-md animate-pulse" />
    </section>
  );
}
