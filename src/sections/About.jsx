import React from "react";

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center py-16 gap-8">
      <div className="md:w-1/2 text-left">
        <h2 className="text-2xl font-bold text-primary mb-2 font-mono">Sobre mí</h2>
        <p className="text-lg text-text/90 font-sans mb-2">
          Soy Alejo Briff, un desarrollador backend y de videojuegos con mentalidad analítica, experiencia en sistemas y pasión por los juegos y la tecnología interactiva. Me motiva la curiosidad y el aprendizaje constante.
        </p>
        <p className="text-base text-text/70 font-sans">
          Me especializo en construir sistemas robustos, resolver problemas complejos y crear experiencias interactivas que despierten la curiosidad.
        </p>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        {/* Aquí puede ir una animación, grid o efecto visual */}
        <div className="w-64 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-sm animate-pulse" />
      </div>
    </section>
  );
}
