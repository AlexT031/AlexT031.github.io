import React, { useState, useRef, useEffect } from "react";

const COMMANDS = {
  help: "Comandos disponibles: help, about, projects, skills, contact, play",
  about:
    "Alejo Briff: Backend & Game Developer. Apasionado por sistemas, juegos y experiencias interactivas.",
  projects: "Proyectos: Pick to Wall, ERP multistore, Hospital system, Text adventure engine, Procedural game, RPS card game, Horror prototype.",
  skills:
    "Backend: Node.js, Java, Python, SQL, MongoDB | Frontend: React, Next.js, JS, HTML, CSS, Tailwind | GameDev: Godot, Unity, C#, GDScript, Lua, C++ | Otros: Git, Linux, System Design",
  contact:
    "Email: alejobriff@gmail.com | LinkedIn: /in/alejobriff | GitHub: /AlexT031",
  play: "[Mini-juego no implementado aún]",
};

function typeWriter(text, cb) {
  let i = 0;
  let out = "";
  function type() {
    if (i < text.length) {
      out += text[i++];
      cb(out);
      setTimeout(type, 18);
    }
  }
  type();
}

export default function Terminal() {
  const [lines, setLines] = useState([
    "Bienvenido al terminal. Escribe 'help' para ver comandos."
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [lines, isTyping]);

  const handleCommand = (cmd) => {
    setLines((prev) => [...prev, "> " + cmd]);
    setIsTyping(true);
    const response = COMMANDS[cmd.trim().toLowerCase()] || "Comando no reconocido. Usa 'help'.";
    let typed = "";
    typeWriter(response, (out) => {
      typed = out;
      setLines((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = "> " + cmd;
        return [...copy, out];
      });
    });
    setTimeout(() => setIsTyping(false), response.length * 18 + 200);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-black/90 border border-cyan-400 rounded-lg p-4 mt-4 shadow-lg font-mono">
      <div
        ref={terminalRef}
        className="h-48 overflow-y-auto text-green-400 text-base leading-relaxed mb-2 pr-2 custom-scrollbar"
        style={{ fontFamily: 'ui-monospace, Consolas, monospace' }}
      >
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">{line}</div>
        ))}
        {isTyping && <div className="animate-pulse text-cyan-400">_</div>}
      </div>
      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <span className="text-cyan-400">$</span>
        <input
          className="flex-1 bg-transparent outline-none border-b border-cyan-400 text-green-400 placeholder-gray-500 py-1 px-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={isTyping}
          placeholder="Escribe un comando..."
          autoFocus
        />
      </form>
    </div>
  );
}
