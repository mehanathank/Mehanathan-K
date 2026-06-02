import '../styles/Projects.css';

const projects = [
  {
    icon: 'fas fa-satellite-dish',
    title: 'Radar Monitoring through IoT',
    desc: 'A smart radar monitoring system that detects and tracks objects using radar sensors integrated with embedded systems and displays real-time data through a web interface.',
    tech: ['Embedded C', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/mehanathank',
  },
  {
    icon: 'fas fa-id-card',
    title: 'Digital Gate Pass Management System',
    desc: 'A full stack web application for managing campus gate passes digitally with student requests, admin approval, and visitor management features.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://github.com/mehanathank',
  },
  {
    icon: 'fas fa-seedling',
    title: 'Crop Yield Prediction System',
    desc: 'A machine learning web application that predicts agricultural crop yield using Linear Regression and provides real-time predictions through a Streamlit interface.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    link: 'https://github.com/mehanathank',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
        <div className="projects-grid">
          {projects.map(({ icon, title, desc, tech, link }) => (
            <div className="project-card reveal" key={title}>
              <div className="project-card-top">
                <div className="project-icon"><i className={icon} /></div>
                <div className="project-links">
                  <a href={link} target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
                </div>
              </div>
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{desc}</p>
              <div className="project-tech">{tech.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
