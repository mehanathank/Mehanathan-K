import { motion } from 'framer-motion';
import '../styles/Skills.css';

const categories = [
  { icon: 'fas fa-terminal', title: 'Programming Languages', tags: ['C', 'C++', 'Java'] },
  { icon: 'fas fa-globe', title: 'Web & MERN Stack', tags: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose'] },
  { icon: 'fas fa-cloud', title: 'Cloud & DevOps', tags: ['AWS', 'Vercel', 'Netlify'] },
  { icon: 'fas fa-database', title: 'Databases', tags: ['MongoDB', 'MySQL'] },
  { icon: 'fas fa-layer-group', title: 'Libraries & Frameworks', tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'NestJS', 'Mongoose'] },
  { icon: 'fas fa-tools', title: 'Tools & Utilities', tags: ['Linux', 'Git', 'Docker', 'Figma', 'PowerBI', 'Canva', 'VS Code'] },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const tagVariants = {
  hidden:  { opacity: 0, scale: 0.7, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <div className="skills-grid">
          {categories.map(({ icon, title, tags }, catIdx) => (
            <div className="skill-category reveal" key={title}>
              <div className="skill-cat-header">
                <i className={icon} />
                <h3>{title}</h3>
              </div>
              <motion.div
                className="skill-tags"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {tags.map((tag, tagIdx) => (
                  <motion.span
                    className="skill-tag"
                    key={tag}
                    variants={tagVariants}
                    whileHover={{ scale: 1.08, borderColor: 'var(--accent2)', color: 'var(--accent2)' }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
