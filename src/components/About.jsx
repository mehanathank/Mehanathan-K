import { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

function useCountUp(target, duration = 1500, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    const isPlus = String(target).includes('+');
    const num = parseInt(String(target).replace('+', ''));
    let start = 0;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(isPlus ? `${num}+` : String(num));
        clearInterval(timer);
      } else {
        setCount(isPlus ? `${start}+` : String(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [shouldStart, target, duration]);

  return count || (String(target).includes('+') ? '0+' : '0');
}

function StatCard({ num, label }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(num, 1200, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat-card reveal" ref={ref}>
      <span className="stat-num">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <div className="about-grid">
          <div className="about-text reveal-left">
            <p>
              I am a Computer Science student at <span className="highlight">Sri Eshwar College of Engineering</span> with
              a strong interest in full stack development, machine learning, and IoT-based systems.
              I enjoy building real-world applications and solving complex problems using programming and modern web technologies.
            </p>
            <div className="about-stats">
              {[['4','Projects'],['100+','LeetCode'],['220+','SkillRack']].map(([num, label]) => (
                <StatCard key={label} num={num} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
