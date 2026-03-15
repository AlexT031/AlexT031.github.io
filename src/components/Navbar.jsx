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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-black/70 border border-primary rounded-full px-4 py-2 shadow-lg backdrop-blur-md">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="text-primary font-mono text-sm px-3 py-1 rounded-full hover:bg-primary/10 transition-colors duration-150"
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
