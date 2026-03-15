import React from "react";

export default function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadein-slow"
      onClick={onClose}
    >
      <div
        className="relative bg-black/95 border-2 border-cyan-400/30 rounded-2xl shadow-2xl p-8 max-w-lg w-full animate-fadein-slow"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-cyan-300 hover:text-pink-300 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <h3 className="glow text-2xl font-bold text-cyan-200 mb-2">{project.title}</h3>
        <p className="text-gray-300 text-base font-sans mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, j) => (
            <span key={j} className="bg-cyan-400/10 text-cyan-200 px-2 py-1 rounded text-xs font-mono">
              {t}
            </span>
          ))}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glow text-cyan-300 hover:text-pink-300 font-mono underline text-sm"
          >
            Ver en GitHub
          </a>
        )}
      </div>
    </div>
  );
}
