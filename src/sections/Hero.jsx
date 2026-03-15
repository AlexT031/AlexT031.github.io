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

  useEffect(() => {
    if (displayed < bootLines.length) {
      const timeout = setTimeout(() => setDisplayed(displayed + 1), 900);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowContent(true), 700);
    }
  }, [displayed]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] w-full select-none">
      <div className="w-full max-w-xl bg-black/80 rounded-lg p-6 shadow-lg border border-primary mb-6">
        <pre className="text-green-400 text-lg leading-relaxed font-mono animate-pulse">
          {bootLines.slice(0, displayed).map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </pre>
      </div>
      {showContent && (
        <div className="flex flex-col items-center transition-opacity duration-700 opacity-100">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 font-mono mb-2 tracking-tight">Alejo Briff</h1>
          <h2 className="text-xl md:text-2xl text-purple-400 font-sans mb-4">Backend Developer & Game Developer</h2>
          <p className="max-w-lg text-center text-gray-200 font-sans text-base md:text-lg">
            Problem solver, system builder, and game developer passionate about creating interactive experiences.
          </p>
        </div>
      )}
    </section>
  );
}
