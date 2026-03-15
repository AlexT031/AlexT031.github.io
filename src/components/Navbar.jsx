import React from "react";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Proyectos" },
  { id: "gamedev", label: "Game Dev" },
  { id: "experience", label: "Experiencia" },
  { id: "contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-3 bg-black/70 border border-cyan-400/30 rounded-full px-6 py-3 shadow-2xl backdrop-blur-xl animate-fadein-slow">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="glow text-cyan-200 font-mono text-base px-4 py-1.5 rounded-full hover:bg-cyan-400/10 hover:text-pink-300 focus:bg-pink-400/10 focus:text-cyan-300 transition-all duration-200 outline-none ring-0 focus:scale-110 shadow-md"
          tabIndex={0}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
