import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  {
    icon: 'fas fa-satellite-dish',
    title: 'Radar Monitoring Through IOT',
    desc: 'Smart Radar Monitoring System – An IoT-enabled object detection and tracking system using radar sensors, embedded systems, and cloud technology.',
    tech: ['Embedded C', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/mehanathank',
    live: '',
    details: [
      'Ultrasonic & Radar sensors integrated with microcontrollers (Arduino/ESP8266) using Embedded C.',
      'A PHP backend server communicating with hardware API endpoints to log detection telemetry.',
      'A web interface rendering live visual radar scans utilizing HTML Canvas APIs.'
    ]
  },
  {
    icon: 'fas fa-seedling',
    title: 'FarmYield AI – Crop Yield Prediction System',
    desc: 'A Python-based machine learning web application using Scikit-learn and Streamlit to predict crop production from location, season, crop type, and cultivation area.',
    tech: ['Python', 'TensorFlow', 'RNN Models', 'MySQL', 'JavaScript', 'CSS'],
    github: 'https://github.com/mehanathank',
    live: '',
    details: [
      'Data preprocessing pipelines designed with Pandas, NumPy, and Label Encoding.',
      'Real-time yield prediction through an interactive Streamlit graphical interface.',
      'Model evaluation and scoring computed using R² Score and Mean Squared Error (MSE).'
    ]
  },
  {
    icon: 'fas fa-id-card',
    title: 'Digital Gate Pass Management System',
    desc: 'A MERN stack web application developed to digitize campus gate pass and visitor management through a secure online platform.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
    github: 'https://github.com/mehanathank/GatepassManagementSystem-Backend.git',
    live: 'https://gatepass-management-system-two.vercel.app/',
    details: [
      'Allows students to submit gate pass requests and visitors to register with unique IDs.',
      'Centralized dashboard for hostel administrators to review, approve, or deny requests.',
      'Role-based dashboard for security personnel to verify and update real-time pass status.'
    ]
  },
  {
    icon: 'fas fa-shopping-cart',
    title: 'StyleHub – Fashion E-commerce Application',
    desc: 'A full-stack fashion e-commerce application featuring user authentication, cart, wishlist, coupon system, order management, and an admin dashboard.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT Authentication', 'Vercel'],
    github: 'https://github.com/mehanathank/stylehub-backend.git',
    live: 'https://stylehub-frontend-phi.vercel.app/',
    details: [
      'Implemented secure user authentication, shopping cart workflows, and wishlist systems.',
      'Designed RESTful APIs integrated with MongoDB Atlas for scalable database storage.',
      'Deployed frontend on Vercel and backend on Render with a fully responsive UI.'
    ]
  }
];

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    }
  })
};

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              {/* Top accent line */}
              <div className="pc-accent-line" />

              {/* Header */}
              <div className="pc-header">
                <div className="pc-icon">
                  <i className={project.icon} />
                </div>
                <span className="pc-index">{String(i + 1).padStart(2, '0')}</span>
              </div>

              {/* Title */}
              <h3 className="pc-title">{project.title}</h3>

              {/* Description */}
              <p className="pc-desc">{project.desc}</p>

              {/* Tech tags */}
              <div className="pc-tech">
                {project.tech.map(t => (
                  <span key={t} className="pc-tag">{t}</span>
                ))}
              </div>

              {/* Divider */}
              <div className="pc-divider" />

              {/* Buttons */}
              <div className="pc-buttons">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary pc-btn"
                  >
                    <i className="fas fa-rocket" /> Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline pc-btn"
                >
                  <i className="fab fa-github" /> GitHub
                </a>
                <button
                  className="btn btn-outline pc-btn pc-detail-btn"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <i className={`fas ${openIndex === i ? 'fa-minus' : 'fa-plus'}`} />
                  Details
                </button>
              </div>

              {/* Expandable details */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    className="pc-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <ul className="pc-details-list">
                      {project.details.map((d, idx) => (
                        <motion.li
                          key={idx}
                          className="pc-details-item"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.07, duration: 0.3 }}
                        >
                          <i className="fas fa-check-circle pc-check" />
                          <span>{d}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
