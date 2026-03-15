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
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0b0b0f] text-gray-200 font-mono">
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
