import '../styles/Achievements.css';

const achievements = [
  {
    icon: 'fas fa-rocket', prize: false,
    title: 'Gen AI Hackathon — FIESTAA\'26',
    org: 'KPR Institute of Engineering and Technology, Coimbatore',
    project: '🌊 Noyyal Nexus — AI-Powered Water-Borne Disease Surveillance System',
    features: [['fas fa-brain','AI Outbreak Prediction'],['fas fa-map-marked-alt','Risk Dashboard'],['fas fa-bell','Early Warning Alerts'],['fas fa-robot','AI Assistant']],
    team: 'Abinivesh M, Abdul Kani B, Praveenkumar M',
  },
  {
    icon: 'fas fa-microscope', prize: false,
    title: 'Tex-Research Hackathon — Yugam 2026',
    org: 'Kumaraguru Institutions, Coimbatore',
    project: '🧵 Real-Time Fabric Defect Detection System — AI-Powered Textile Quality Inspection',
    features: [['fas fa-eye','YOLOv8 Detection'],['fas fa-tachometer-alt','20+ FPS Real-Time'],['fas fa-bullseye','~98.5% Accuracy'],['fas fa-industry','Industrial Scale']],
    team: 'Naveen N, Jagathratchagan M, Pradesh Kumar S',
  },
  {
    icon: 'fas fa-medal', prize: true,
    title: '🥈 2nd Place — Project Presentation, FIESTAA\'26',
    org: 'KPR Institute of Engineering and Technology, Coimbatore',
    project: '🤖 Agentic AI Loan Approval System — Autonomous AI agents for financial verification, risk assessment & decision-making',
    features: [['fas fa-robot','Autonomous Agents'],['fas fa-shield-alt','Risk Assessment'],['fas fa-check-circle','High Accuracy'],['fas fa-bolt','Reduced Processing Time']],
    team: 'Abdul Kani B, Praveenkumar M, Abinivesh M',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Achievements</span></h2>
        <div className="achievements-grid">
          {achievements.map(({ icon, prize, title, org, project, features, team }) => (
            <div className="achievement-card reveal" key={title}>
              <div className={`achievement-icon${prize ? ' prize-icon' : ''}`}><i className={icon} /></div>
              <div className="achievement-info">
                <h3>{title}</h3>
                <p className="hackathon-org"><i className="fas fa-university" /> {org}</p>
                <p className="hackathon-project">{project}</p>
                <div className="hackathon-features">
                  {features.map(([ic, label]) => <span key={label}><i className={ic} /> {label}</span>)}
                </div>
                <p className="hackathon-team"><i className="fas fa-users" /> Team: {team}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
