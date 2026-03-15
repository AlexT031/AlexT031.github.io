import React from "react";

const skills = [
  { group: "Backend", items: ["Node.js", "Java", "Python", "SQL", "MongoDB", "REST APIs"] },
  { group: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"] },
  { group: "Game Development", items: ["Godot", "Unity", "C#", "GDScript", "Lua", "C++"] },
  { group: "Other", items: ["Git", "Linux", "Problem solving", "System design"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 flex flex-col items-center z-10">
      <h2 className="glow text-3xl font-bold text-cyan-300 mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl">
        {skills.map((group, i) => (
          <div key={i} className="bg-black/80 border-2 border-cyan-900/40 rounded-2xl p-8 shadow-2xl min-w-[220px] transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/30 hover:border-cyan-400 relative group animate-fadein-slow interactive-card" style={{animationDelay: `${i * 0.12}s`}} tabIndex={0}
            onMouseDown={e => {
              const ripple = document.createElement('span');
              ripple.className = 'ripple';
              ripple.style.left = `${e.nativeEvent.offsetX}px`;
              ripple.style.top = `${e.nativeEvent.offsetY}px`;
              e.currentTarget.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
            onMouseMove={e => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--tilt-x', `${((y/rect.height)-0.5)*10}deg`);
              card.style.setProperty('--tilt-y', `${((x/rect.width)-0.5)*10}deg`);
            }}
            onMouseLeave={e => {
              e.currentTarget.style.setProperty('--tilt-x', `0deg`);
              e.currentTarget.style.setProperty('--tilt-y', `0deg`);
            }}
            style={{
              animationDelay: `${i * 0.12}s`,
              transform: 'perspective(600px) rotateX(var(--tilt-x,0deg)) rotateY(var(--tilt-y,0deg))',
            }}
          >
            <h3 className="glow text-xl font-bold text-purple-300 mb-3">{group.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <li key={j} className="bg-cyan-400/10 text-cyan-200 px-3 py-1 rounded-full text-sm font-mono group-hover:bg-cyan-400/20 transition-colors duration-200 shadow-cyan-400/10 shadow-md">
                  {item}
                </li>
              ))}
            </ul>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400/30 rounded-full blur-md animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
}
