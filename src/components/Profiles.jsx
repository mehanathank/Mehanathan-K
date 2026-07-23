import '../styles/Profiles.css';

const profiles = [
  { cls: 'github',   icon: 'fab fa-github',      title: 'GitHub',   handle: 'mehanathank',    link: 'https://github.com/mehanathank' },
  { cls: 'linkedin', icon: 'fab fa-linkedin-in',  title: 'LinkedIn', handle: 'mehanathan-k',   link: 'https://www.linkedin.com/in/mehanathan-k-5802622a5' },
  { cls: 'leetcode', icon: 'fas fa-code',          title: 'LeetCode', handle: 'mehanathan-k',   link: 'https://leetcode.com/u/mehanathan-k/', stat: '200+ Problems Solved' },
  { cls: 'skillrack',icon: 'fas fa-laptop-code',   title: 'SkillRack',handle: 'mehanathan-k',   link: 'https://www.skillrack.com', stat: '220+ Problems • 100+ Bronze Badges' },
];

export default function Profiles() {
  return (
    <section id="profiles" className="section profiles">
      <div className="container">
        <h2 className="section-title">Coding <span className="gradient-text">Profiles</span></h2>
        <div className="profiles-grid">
          {profiles.map(({ cls, icon, title, handle, link, stat }) => (
            <a href={link} target="_blank" rel="noreferrer" className={`profile-card ${cls} reveal`} key={title}>
              <i className={`${icon} profile-icon`} />
              <h3>{title}</h3>
              <p>{handle}</p>
              {stat && <div className="profile-stat">{stat}</div>}
              <span className="profile-arrow"><i className="fas fa-arrow-right" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
