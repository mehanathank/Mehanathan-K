import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import photo from '../photo.jpeg';
import '../styles/Hero.css';

const titles = ['Full Stack Developer', 'Java Developer', 'Problem Solver'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }
  })
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }
  })
};

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

      {/* Floating ambient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          Hello, World! 👋
        </motion.p>

        <motion.h1
          className="hero-name"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          Mehanathan <span className="gradient-text">K</span>
        </motion.h1>

        <motion.div
          className="hero-title-wrapper"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          <span>{text}</span><span className="cursor">|</span>
        </motion.div>

        <motion.p
          className="hero-intro"
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
        >
          I am a Computer Science Engineering student passionate about building full stack web
          applications and solving algorithmic problems.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="visible"
        >
          <a href="#projects" className="btn btn-primary hero-btn-glow">
            <i className="fas fa-code" /> View Projects
          </a>
          <a href="/Resume.pdf" download className="btn btn-outline">
            <i className="fas fa-download" /> Download Resume
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="visible"
        >
          <a href="https://github.com/mehanathank" target="_blank" rel="noreferrer" className="social-icon hero-social-icon">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/mehanathan-k-5802622a5" target="_blank" rel="noreferrer" className="social-icon hero-social-icon">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://leetcode.com/u/mehanathan-k/" target="_blank" rel="noreferrer" className="social-icon hero-social-icon">
            <i className="fas fa-code" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        variants={fadeLeft}
        custom={2}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-photo-ring">
          <img src={photo} alt="" className="hero-photo-bg" />
          <div className="hero-photo-inner">
            <img src={photo} alt="Mehanathan K" className="hero-photo" />
          </div>
        </div>

        {/* Floating badges around photo */}
        <motion.div
          className="hero-badge hero-badge-1"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <i className="fas fa-code" /> Full Stack
        </motion.div>
        <motion.div
          className="hero-badge hero-badge-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <i className="fab fa-java" /> Java
        </motion.div>
        <motion.div
          className="hero-badge hero-badge-3"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <i className="fas fa-brain" /> ML
        </motion.div>
      </motion.div>

      <a href="#about" className="scroll-down"><i className="fas fa-chevron-down" /></a>
    </section>
  );
}
