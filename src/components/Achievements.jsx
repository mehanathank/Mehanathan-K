import '../styles/Achievements.css';

const gdgStats = [
  { icon: 'fas fa-globe', label: 'Global Competition' },
  { icon: 'fas fa-users', label: '67,000+ Participants' },
  { icon: 'fas fa-trophy', label: 'Top 100 Finalists' },
  { icon: 'fas fa-rocket', label: 'International Recognition' },
];

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

        {/* ── GDG Featured Card ── */}
        <div className="gdg-featured-card reveal">
          {/* Animated background blobs */}
          <div className="gdg-blob gdg-blob-blue" aria-hidden="true" />
          <div className="gdg-blob gdg-blob-green" aria-hidden="true" />

          <div className="gdg-card-inner">
            {/* Header row */}
            <div className="gdg-header">
              <div className="gdg-trophy-wrap">
                <i className="fas fa-trophy gdg-trophy-icon" aria-hidden="true" />
              </div>
              <div className="gdg-title-block">
                <div className="gdg-badge-row">
                  <span className="gdg-badge gdg-badge-google">
                    <span className="gdg-dot g" />
                    <span className="gdg-dot o1" />
                    <span className="gdg-dot o2" />
                    <span className="gdg-dot g2" />
                    <span className="gdg-dot l" />
                    <span className="gdg-dot e" />
                    &nbsp;GDG Solution Challenge
                  </span>
                  <span className="gdg-badge gdg-badge-year">2026</span>
                </div>
                <h3 className="gdg-title">
                  Google Developer Groups Solution Challenge 2026
                </h3>
                <p className="gdg-subtitle">
                  <i className="fas fa-medal" aria-hidden="true" />
                  &nbsp;<span className="gdg-highlight">Top 100 Global Teams</span>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="gdg-divider" />

            {/* Numbers row */}
            <div className="gdg-numbers-row">
              <div className="gdg-number-item">
                <span className="gdg-number">67,000<span className="gdg-plus">+</span></span>
                <span className="gdg-number-label">Participants</span>
              </div>
              <div className="gdg-number-divider" aria-hidden="true" />
              <div className="gdg-number-item">
                <span className="gdg-number">Top <span className="gdg-number-accent">100</span></span>
                <span className="gdg-number-label">Selected Globally</span>
              </div>
            </div>

            {/* Description */}
            <p className="gdg-description">
              Our team was selected among the <strong>Top 100 teams worldwide</strong> in the GDG Solution Challenge 2026.
              More than <strong>67,000 project submissions</strong> participated globally, and our project was recognized
              as one of the top solutions for its innovation, technical excellence, and social impact.
            </p>

            {/* Impact statement */}
            <blockquote className="gdg-impact">
              <i className="fas fa-quote-left gdg-quote-icon" aria-hidden="true" />
              Recognized globally for building an innovative solution that addresses real-world challenges through technology.
            </blockquote>

            {/* Stats row */}
            <div className="gdg-stats-row">
              {gdgStats.map(({ icon, label }) => (
                <div className="gdg-stat-item" key={label}>
                  <i className={icon} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="gdg-footer">
              <i className="fas fa-calendar-alt" aria-hidden="true" />
              <span>2026</span>
            </div>
          </div>
        </div>

        {/* ── Regular Achievements Grid ── */}
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
