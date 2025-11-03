import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.18),rgba(139,92,246,0.08)_50%,transparent_80%)]" />
      <Header />
      <main className="relative">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
