import '../styles/Skills.css';

const categories = [
  { icon: 'fas fa-terminal', title: 'Programming Languages', tags: ['C', 'C++', 'Java'] },
  { icon: 'fas fa-globe', title: 'Web & MERN Stack', tags: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose'] },
  { icon: 'fas fa-cloud', title: 'Cloud & DevOps', tags: ['AWS', 'Vercel', 'Netlify'] },
  { icon: 'fas fa-database', title: 'Databases', tags: ['MongoDB', 'MySQL'] },
  { icon: 'fas fa-layer-group', title: 'Libraries & Frameworks', tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'NestJS', 'Mongoose'] },
  { icon: 'fas fa-tools', title: 'Tools & Utilities', tags: ['Linux', 'Git', 'Docker', 'Figma', 'PowerBI', 'Canva', 'VS Code'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <div className="skills-grid">
          {categories.map(({ icon, title, tags }) => (
            <div className="skill-category reveal" key={title}>
              <div className="skill-cat-header">
                <i className={icon} />
                <h3>{title}</h3>
              </div>
              <div className="skill-tags">
                {tags.map(tag => <span className="skill-tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
