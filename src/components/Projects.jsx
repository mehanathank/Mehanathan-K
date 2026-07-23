import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  {
    icon: 'fas fa-satellite-dish',
    title: 'Radar Monitoring Through IOT',
    desc: 'Smart Radar Monitoring System – An IoT-enabled object detection and tracking system using radar sensors, embedded systems, and cloud technology. Features real-time data transmission, remote monitoring, and a web dashboard for radar visualization.',
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
    title: 'FarmYield AI – Crop Yield Prediction System Using ML',
    desc: 'Agricultural Crop Production Prediction – A Python-based machine learning web application using Scikit-learn and Streamlit to predict crop production from location, season, crop type, and cultivation area.',
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
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'REST API', 'JWT Authentication'],
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
    desc: 'Developed a full-stack fashion e-commerce application featuring user authentication, cart, wishlist, coupon system, order management, and an admin dashboard.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JavaScript', 'HTML5', 'CSS3', 'REST API', 'JWT Authentication', 'React Router', 'Vercel', 'Render'],
    github: 'https://github.com/mehanathank/stylehub-backend.git',
    live: 'https://stylehub-frontend-phi.vercel.app/',
    details: [
      'Implemented secure user authentication, shopping cart workflows, and wishlist systems.',
      'Designed RESTful APIs integrated with MongoDB Atlas for scalable database storage.',
      'Deployed frontend on Vercel and backend services on Render with a fully responsive user interface.'
    ]
  }
];

function ProjectCardWrapper({ project, index }) {
  const containerRef = useRef(null);
  const [showDetails, setShowDetails] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div ref={containerRef} className="project-card-scroll-wrap">
      <motion.div
        style={{
          scale,
          opacity,
          y,
          position: 'sticky',
          top: `calc(12vh + ${index * 32}px)`,
          zIndex: index + 1
        }}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="project-card"
      >
        <motion.div variants={itemVariants} className="project-card-top">
          <div className="project-icon">
            <i className={project.icon} />
          </div>
        </motion.div>

        <motion.h3 variants={itemVariants} className="project-title">
          {project.title}
        </motion.h3>

        <motion.p variants={itemVariants} className="project-desc">
          {project.desc}
        </motion.p>

        <motion.div variants={itemVariants} className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="project-buttons">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary project-btn demo-btn">
              <i className="fas fa-rocket" /> Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline project-btn repo-btn">
              <i className="fab fa-github" /> GitHub Repository
            </a>
          )}
          <button onClick={() => setShowDetails(!showDetails)} className="btn btn-outline project-btn detail-btn">
            <i className={`fas ${showDetails ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            {showDetails ? ' Hide Details' : ' View Details'}
          </button>
        </motion.div>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
              className="project-card-details"
            >
              <h4 className="details-title">Key Implementations</h4>
              <ul className="details-list">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="details-item">
                    <i className="fas fa-check-circle details-icon" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCardWrapper key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
