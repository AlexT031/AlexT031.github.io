import React, { useEffect, useState } from "react";

const bootLines = [
  "> initializing portfolio...",
  "> loading developer profile...",
  "> loading projects...",
  "> ready.\n"
];

export default function Hero() {
  const [displayed, setDisplayed] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    if (displayed < bootLines.length) {
      const timeout = setTimeout(() => setDisplayed(displayed + 1), 900);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowContent(true), 700);
    }
  }, [displayed]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] w-full select-none relative z-10">
      <div className={`w-full max-w-xl bg-black/70 rounded-2xl p-8 shadow-2xl border border-cyan-400 mb-8 transition-all duration-700 ${fade ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-md translate-y-8'}`}> 
        <pre className="text-green-400 text-lg leading-relaxed font-mono animate-pulse tracking-wide">
          {bootLines.slice(0, displayed).map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </pre>
      </div>
      {showContent && (
        <div className="flex flex-col items-center animate-fadein-slow animate-slideup" tabIndex={0} aria-label="Presentación Alejo Briff">
          <h1 className="glow text-5xl md:text-6xl font-bold text-cyan-300 mb-2 tracking-tight drop-shadow-lg">Alejo Briff</h1>
          <h2 className="text-2xl md:text-3xl text-purple-400 font-sans mb-4 font-semibold tracking-wide">Backend Developer & Game Developer</h2>
          <p className="max-w-lg text-center text-gray-300 font-sans text-lg md:text-xl mt-2">
            Building systems and games that solve problems and create experiences.
          </p>
        </div>
      )}
      <style>{`
        @keyframes fadein-slow { from { opacity:0; transform: translateY(40px);} to { opacity:1; transform: none; } }
        .animate-fadein-slow { animation: fadein-slow 1.2s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </section>
  );
}
