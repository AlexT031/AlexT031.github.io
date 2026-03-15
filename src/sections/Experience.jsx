import React from "react";

const experience = [
  {
    company: "Novigo Technology",
    role: "Backend Developer",
    period: "2022 - Presente",
    projects: [
      "ERP y sistema de gestión multitienda",
      "Plataforma de admisión y resultados clínicos hospitalarios",
      "Sistema de gestión de mantenimiento industrial",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 flex flex-col items-center z-10">
      <h2 className="glow text-3xl font-bold text-cyan-300 mb-12">Experiencia</h2>
      <div className="relative flex flex-col items-center max-w-3xl w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-cyan-400/30 rounded-full z-0" />
        {experience.map((exp, i) => (
          <div
            key={i}
            className="relative bg-black/80 rounded-2xl p-8 shadow-xl border border-cyan-900/40 my-8 w-full animate-fadein-slow interactive-card group"
            tabIndex={0}
            aria-label={`Experiencia en ${exp.company}`}
            onMouseDown={e => {
              const ripple = document.createElement('span');
              ripple.className = 'ripple';
              ripple.style.left = `${e.nativeEvent.offsetX}px`;
              ripple.style.top = `${e.nativeEvent.offsetY}px`;
              e.currentTarget.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
            onFocus={e => e.currentTarget.classList.add('ring-2','ring-cyan-400')}
            onBlur={e => e.currentTarget.classList.remove('ring-2','ring-cyan-400')}
            style={{animationDelay: `${i * 0.18}s`}}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-6 h-6 bg-cyan-400/60 rounded-full shadow-lg border-4 border-cyan-900/60 animate-pulse z-10 group-hover:scale-110 group-focus:scale-110 transition-transform" />
            <h3 className="glow text-lg font-bold text-cyan-200 mb-1">{exp.company}</h3>
            <span className="text-purple-300 font-mono text-sm mb-2 block">{exp.role} | {exp.period}</span>
            <ul className="list-disc list-inside text-gray-300 font-sans ml-2">
              {exp.projects.map((p, j) => (
                <li key={j} className="hover:text-cyan-300 focus:text-cyan-300 transition-colors" tabIndex={0}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
