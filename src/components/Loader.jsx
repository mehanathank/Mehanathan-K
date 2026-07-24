import { useEffect, useState } from 'react';
import '../styles/Loader.css';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const steps = [15, 35, 55, 75, 90, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onDone, 600);
        }, 300);
      }
    }, 280);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className={`loader-overlay${fadeOut ? ' loader-fade-out' : ''}`}>
      {/* Background orbs */}
      <div className="loader-orb loader-orb-1" />
      <div className="loader-orb loader-orb-2" />

      {/* Center content */}
      <div className="loader-center">

        {/* Logo / monogram */}
        <div className="loader-logo">
          <span className="loader-logo-text">MK</span>
          <div className="loader-logo-ring" />
          <div className="loader-logo-ring loader-logo-ring-2" />
        </div>

        {/* Name */}
        <h1 className="loader-name">Mehanathan <span>K</span></h1>
        <p className="loader-role">Full Stack Developer</p>

        {/* Progress bar */}
        <div className="loader-bar-wrap">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <span className="loader-percent">{progress}%</span>

      </div>

      {/* Bottom dots */}
      <div className="loader-dots">
        <span /><span /><span />
      </div>
    </div>
  );
}
