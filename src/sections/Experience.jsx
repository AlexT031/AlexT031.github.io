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
    <section id="experience" className="py-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-primary mb-8 font-mono">Experiencia</h2>
      <div className="flex flex-col gap-8 max-w-3xl w-full">
        {experience.map((exp, i) => (
          <div key={i} className="bg-black/80 border-l-4 border-primary rounded-lg p-6 shadow-lg relative">
            <h3 className="text-lg font-bold text-primary font-mono mb-1">{exp.company}</h3>
            <span className="text-secondary font-mono text-sm mb-2 block">{exp.role} | {exp.period}</span>
            <ul className="list-disc list-inside text-text/80 font-sans ml-2">
              {exp.projects.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
