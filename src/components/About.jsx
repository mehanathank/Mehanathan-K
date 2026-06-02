import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a Computer Science student at <span className="highlight">Sri Eshwar College of Engineering</span> with
              a strong interest in full stack development, machine learning, and IoT-based systems.
              I enjoy building real-world applications and solving complex problems using programming and modern web technologies.
            </p>
            <div className="about-stats">
              {[['3+','Projects'],['100+','LeetCode'],['220+','SkillRack']].map(([num, label]) => (
                <div className="stat-card reveal" key={label}>
                  <span className="stat-num">{num}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
