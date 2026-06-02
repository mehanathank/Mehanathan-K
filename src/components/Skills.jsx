import '../styles/Skills.css';

const categories = [
  { icon: 'fas fa-terminal', title: 'Programming Languages', tags: ['C', 'C++', 'Java'] },
  { icon: 'fas fa-globe', title: 'Web Technologies', tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'] },
  { icon: 'fas fa-brain', title: 'Core Concepts', tags: ['Data Structures', 'OOP', 'DBMS', 'AI/ML'] },
  { icon: 'fas fa-tools', title: 'Tools', tags: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'PowerBI', 'Excel'] },
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
