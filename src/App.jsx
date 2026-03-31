import { useEffect } from 'react';
import './index.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Global scroll reveal for all .reveal elements not individually managed
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <div className="grid-bg" />
      <div className="scanlines" />
      <Nav />
      <Hero />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
