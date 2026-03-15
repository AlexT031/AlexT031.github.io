import React from "react";

const projects = [
  {
    title: "Pick to Wall system",
    desc: "Sistema de logística y picking para almacenes.",
    tech: ["Node.js", "React", "SQL"],
    github: "https://github.com/AlexT031/pick-to-wall",
  },
  {
    title: "ERP multistore system",
    desc: "Gestión de múltiples tiendas y recursos empresariales.",
    tech: ["Java", "React", "SQL"],
    github: "https://github.com/AlexT031/erp-multistore",
  },
  {
    title: "Hospital clinical results system",
    desc: "Plataforma para resultados clínicos y admisión de pacientes.",
    tech: ["Python", "React", "MongoDB"],
    github: "https://github.com/AlexT031/hospital-system",
  },
  {
    title: "Text adventure engine",
    desc: "Motor para aventuras de texto y juegos narrativos.",
    tech: ["Node.js", "JavaScript"],
    github: "https://github.com/AlexT031/text-adventure-engine",
  },
  {
    title: "Procedural inventory adventure game",
    desc: "Juego de aventura con inventario y generación procedural.",
    tech: ["Godot", "GDScript"],
    github: "https://github.com/AlexT031/procedural-inventory-game",
  },
  {
    title: "Rock Paper Scissors strategy card game",
    desc: "Juego de cartas estratégico basado en piedra, papel o tijera.",
    tech: ["Unity", "C#"],
    github: "https://github.com/AlexT031/rps-card-game",
  },
  {
    title: "Horror game prototype in Godot",
    desc: "Prototipo de juego de horror experimental.",
    tech: ["Godot", "GDScript"],
    github: "https://github.com/AlexT031/horror-prototype",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-primary mb-8 font-mono">Proyectos</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/80 border border-primary rounded-xl p-6 shadow-lg min-w-[260px] max-w-xs transition-transform hover:scale-105 hover:shadow-primary/40 hover:border-secondary duration-200 relative group flex flex-col gap-2"
          >
            <h3 className="text-lg font-bold text-primary font-mono mb-1">{p.title}</h3>
            <p className="text-text/80 text-base font-sans mb-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {p.tech.map((t, j) => (
                <span key={j} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
            <span className="text-xs text-secondary font-mono group-hover:underline">Ver en GitHub</span>
            {/* Aquí puede ir preview animado o GIF */}
          </a>
        ))}
      </div>
    </section>
  );
}
