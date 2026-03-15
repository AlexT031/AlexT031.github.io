import { useEffect } from 'react';
import { animateParticles } from './utils/bgParticles';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GameDev from './sections/GameDev';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Terminal from './components/Terminal';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';

function App() {
    useEffect(() => {
      animateParticles();
      window.addEventListener('resize', animateParticles);
      return () => window.removeEventListener('resize', animateParticles);
    }, []);
  return (
    <>
      <div className="animated-bg">
        <div className="bg-grid" />
        <canvas className="bg-particles" id="bgParticles" />
        <div className="bg-noise" />
        <div className="bg-glow" />
      </div>
      <Navbar />
      <main className="relative min-h-screen bg-[#0b0b0f] text-gray-200 font-mono z-10">
        <Hero />
        <Terminal />
        <About />
        <Skills />
        <Projects />
        <GameDev />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
