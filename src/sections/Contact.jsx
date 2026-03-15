import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-primary mb-8 font-mono">Contacto</h2>
      <div className="bg-black/80 border border-primary rounded-xl p-8 shadow-lg flex flex-col items-center gap-4 w-full max-w-md">
        <p className="text-lg text-text/90 font-sans">¿Quieres contactarme?</p>
        <div className="flex flex-col gap-2 w-full">
          <a href="mailto:alejobriff@gmail.com" className="text-primary hover:underline font-mono">alejobriff@gmail.com</a>
          <a href="https://linkedin.com/in/alejobriff" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-mono">LinkedIn</a>
          <a href="https://github.com/AlexT031" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-mono">GitHub</a>
        </div>
      </div>
      <div className="w-full max-w-md h-16 mt-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg blur-sm animate-pulse" />
    </section>
  );
}
