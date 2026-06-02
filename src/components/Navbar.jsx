import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const links = ['hero','about','skills','projects','profiles','achievements','certificates','contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = '';
      document.querySelectorAll('section[id]').forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">MK</div>
      <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l}`} className={`nav-link${active === l ? ' active' : ''}`}
              onClick={() => setOpen(false)}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
