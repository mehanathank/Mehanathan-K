import { useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/Profiles.css';

const profiles = [
  { cls: 'github',    icon: 'fab fa-github',      title: 'GitHub',    handle: 'mehanathank',  link: 'https://github.com/mehanathank' },
  { cls: 'linkedin',  icon: 'fab fa-linkedin-in',  title: 'LinkedIn',  handle: 'mehanathan-k', link: 'https://www.linkedin.com/in/mehanathan-k-5802622a5' },
  { cls: 'leetcode',  icon: 'fas fa-code',          title: 'LeetCode',  handle: 'mehanathan-k', link: 'https://leetcode.com/u/mehanathan-k/', stat: '200+ Problems Solved' },
  { cls: 'skillrack', icon: 'fas fa-laptop-code',   title: 'SkillRack', handle: 'mehanathan-k', link: 'https://www.skillrack.com', stat: '220+ Problems • 100+ Badges' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40, scale: 0.92 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

function TiltCard({ profile }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0)';
    }
  };

  return (
    <motion.a
      ref={cardRef}
      href={profile.link}
      target="_blank"
      rel="noreferrer"
      className={`profile-card ${profile.cls}`}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease' }}
    >
      <i className={`${profile.icon} profile-icon`} />
      <h3>{profile.title}</h3>
      <p>{profile.handle}</p>
      {profile.stat && <div className="profile-stat">{profile.stat}</div>}
      <span className="profile-arrow"><i className="fas fa-arrow-right" /></span>
    </motion.a>
  );
}

export default function Profiles() {
  return (
    <section id="profiles" className="section profiles">
      <div className="container">
        <h2 className="section-title">Coding <span className="gradient-text">Profiles</span></h2>
        <motion.div
          className="profiles-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {profiles.map(profile => (
            <TiltCard key={profile.title} profile={profile} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
