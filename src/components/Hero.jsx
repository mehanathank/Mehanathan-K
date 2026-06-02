import { useEffect, useState } from 'react';
import photo from '../photo.jpeg';
import '../styles/Hero.css';

const titles = ['Full Stack Developer', 'Java Developer', 'Problem Solver'];

export default function Hero() {
  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const delay = deleting ? 60 : 100;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setText(current.substring(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTitleIndex(i => (i + 1) % titles.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <p className="hero-greeting">Hello, World! 👋</p>
        <h1 className="hero-name">Mehanathan <span className="gradient-text">K</span></h1>
        <div className="hero-title-wrapper">
          <span>{text}</span><span className="cursor">|</span>
        </div>
        <p className="hero-intro">
          I am a Computer Science Engineering student passionate about building full stack web
          applications and solving algorithmic problems.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary"><i className="fas fa-code" /> View Projects</a>
          <a href="/Resume.pdf" download className="btn btn-outline">
            <i className="fas fa-download" /> Download Resume
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/mehanathank" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-github" /></a>
          <a href="https://www.linkedin.com/in/mehanathan-k-5802622a5" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-linkedin-in" /></a>
          <a href="https://leetcode.com/u/mehanathan-k/" target="_blank" rel="noreferrer" className="social-icon"><i className="fas fa-code" /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo-ring">
          <div className="hero-photo-inner">
            <img src={photo} alt="Mehanathan K" className="hero-photo" />
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-down"><i className="fas fa-chevron-down" /></a>
    </section>
  );
}
