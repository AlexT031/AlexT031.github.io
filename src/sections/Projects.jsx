import React, { useState, useCallback, useEffect } from "react";
import ProjectModal from "../components/ProjectModal";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = useCallback((project) => {
    setSelectedProject(project);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  }, []);

  // useEffect vacío removido — agregá lógica acá si la necesitás

  return (
    <section id="projects" className="py-24 flex flex-col items-center z-10">
      <h2 className="glow text-3xl font-bold text-cyan-300 mb-12">Proyectos</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-black/80 border-2 border-cyan-900/40 rounded-2xl p-8 shadow-2xl min-w-[260px] max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/30 hover:border-cyan-400 relative group flex flex-col gap-2 animate-fadein-slow interactive-card"
            tabIndex={0}
            onClick={() => openModal(p)}
            onMouseDown={(e) => {
              const ripple = document.createElement("span");
              ripple.className = "ripple";
              ripple.style.left = `${e.nativeEvent.offsetX}px`;
              ripple.style.top = `${e.nativeEvent.offsetY}px`;
              e.currentTarget.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty("--tilt-x", `${((y / rect.height) - 0.5) * 10}deg`);
              card.style.setProperty("--tilt-y", `${((x / rect.width) - 0.5) * 10}deg`);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty("--tilt-x", "0deg");
              e.currentTarget.style.setProperty("--tilt-y", "0deg");
            }}
            style={{
              animationDelay: `${i * 0.14}s`,
              transform: "perspective(600px) rotateX(var(--tilt-x,0deg)) rotateY(var(--tilt-y,0deg))",
            }}
          >
            <h3 className="glow text-lg font-bold text-cyan-200 mb-1">{p.title}</h3>
            <p className="text-gray-300 text-base font-sans mb-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {p.tech.map((t, j) => (
                <span key={j} className="bg-cyan-400/10 text-cyan-200 px-2 py-1 rounded text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
            {p.github && (
              <span className="glow text-cyan-300 hover:text-pink-300 font-mono underline text-sm opacity-70 pointer-events-none select-none">
                Ver en GitHub
              </span>
            )}
          </div>
        ))}
      </div>
      <ProjectModal open={modalOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
}