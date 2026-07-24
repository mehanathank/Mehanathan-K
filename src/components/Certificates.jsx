import { motion } from 'framer-motion';
import '../styles/Certificates.css';

const certs = [
  { icon: 'fab fa-java',     title: 'Java Fundamentals Badge',     issuer: 'Oracle Java Foundation', year: '2025' },
  { icon: 'fab fa-java',     title: 'Java Basics',                  issuer: 'Simplilearn',            year: '2025' },
  { icon: 'fas fa-database', title: 'SQL Intermediate & Advanced',  issuer: 'HackerRank',             year: '2025' },
  { icon: 'fas fa-server',   title: 'Top DBMS Interview Questions', issuer: 'CodeChef',               year: '2025' },
  { icon: 'fas fa-globe',    title: 'Web Development',              issuer: 'Udemy',                  year: '2025' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Certificates</span></h2>
        <motion.div
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {certs.map(({ icon, title, issuer, year }) => (
            <motion.div
              className="certificate-card"
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: 'rgba(163, 230, 53, 0.35)' }}
            >
              <motion.div
                className="certificate-icon"
                whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
              >
                <i className={icon} />
              </motion.div>
              <div className="certificate-info">
                <h3>{title}</h3>
                <span className="certificate-issuer"><i className="fas fa-building" /> {issuer}</span>
                <span className="certificate-year"><i className="fas fa-calendar-alt" /> {year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
