import { useEffect, useState, useCallback } from 'react';
import './styles/globals.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Profiles from './components/Profiles';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleDone = useCallback(() => setLoading(false), []);

  useEffect(() => {
    if (loading) return; // don't run observers until content is mounted

    // Scroll reveal for all variants
    const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    revealClasses.forEach(cls => {
      document.querySelectorAll(cls).forEach((el, i) => {
        el.style.transitionDelay = `${(i % 5) * 80}ms`;
        observer.observe(el);
      });
    });

    // Section title underline animation
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('title-visible');
          titleObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-title').forEach(el => {
      titleObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      titleObserver.disconnect();
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onDone={handleDone} />}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Profiles />
          <Achievements />
          <Certificates />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
