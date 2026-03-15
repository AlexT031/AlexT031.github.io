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
    <section id="gamedev" className="py-16 flex flex-col items-center bg-gradient-to-b from-background to-black/80">
      <h2 className="text-2xl font-bold text-accent mb-8 font-mono">Game Dev</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
        {games.map((g, i) => (
          <div
            key={i}
            className="bg-black/80 border border-accent rounded-xl p-6 shadow-lg min-w-[260px] max-w-xs transition-transform hover:scale-105 hover:shadow-accent/40 hover:border-primary duration-200 relative group flex flex-col gap-2"
          >
            <h3 className="text-lg font-bold text-accent font-mono mb-1">{g.title}</h3>
            <p className="text-text/80 text-base font-sans mb-2">{g.desc}</p>
            <span className="text-xs text-primary font-mono">{g.notes}</span>
            {/* Aquí puede ir un GIF o animación pixelada */}
          </div>
        ))}
      </div>
    </section>
  );
}
