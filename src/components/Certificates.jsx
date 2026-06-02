import '../styles/Certificates.css';

const certs = [
  { icon: 'fab fa-java',    title: 'Java Programming for Beginners', issuer: 'Skillup',     year: '2025' },
  { icon: 'fas fa-award',   title: 'Badge on Java Programming',      issuer: 'Oracle',      year: '2025' },
  { icon: 'fas fa-database',title: 'SQL Basic Certificate',          issuer: 'HackerRank',  year: '2025' },
  { icon: 'fas fa-database',title: 'SQL Advanced Certificate',       issuer: 'HackerRank',  year: '2025' },
  { icon: 'fas fa-server',  title: 'Top DBMS Interview Questions',   issuer: 'CodeChef',    year: '2025' },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Certificates</span></h2>
        <div className="certificates-grid">
          {certs.map(({ icon, title, issuer, year }) => (
            <div className="certificate-card reveal" key={title}>
              <div className="certificate-icon"><i className={icon} /></div>
              <div className="certificate-info">
                <h3>{title}</h3>
                <span className="certificate-issuer"><i className="fas fa-building" /> {issuer}</span>
                <span className="certificate-year"><i className="fas fa-calendar-alt" /> {year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
