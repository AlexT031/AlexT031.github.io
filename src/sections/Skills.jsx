import React from "react";

const skills = [
  { group: "Backend", items: ["Node.js", "Java", "Python", "SQL", "MongoDB", "REST APIs"] },
  { group: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"] },
  { group: "Game Development", items: ["Godot", "Unity", "C#", "GDScript", "Lua", "C++"] },
  { group: "Other", items: ["Git", "Linux", "Problem solving", "System design"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-primary mb-8 font-mono">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {skills.map((group, i) => (
          <div key={i} className="bg-black/80 border border-secondary rounded-xl p-6 shadow-lg min-w-[220px] transition-transform hover:scale-105 hover:shadow-primary/40 hover:border-primary duration-200 relative group">
            <h3 className="text-lg font-bold text-secondary mb-2 font-mono">{group.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <li key={j} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-mono group-hover:bg-primary/20 transition-colors duration-200">
                  {item}
                </li>
              ))}
            </ul>
            {/* Efecto de partículas o glow sutil puede ir aquí */}
          </div>
        ))}
      </div>
    </section>
  );
}
