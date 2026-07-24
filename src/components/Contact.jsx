import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Contact.css';

const infoVariants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const formVariants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
};

const fieldVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const rowVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStatus("✅ Message sent! I'll get back to you soon.");
      setLoading(false);
      e.target.reset();
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <div className="contact-grid">

          <motion.div
            className="contact-info"
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="contact-tagline">Have a project in mind or want to collaborate? Feel free to reach out!</p>
            <div className="contact-details">
              {[
                { icon: 'fas fa-envelope', text: 'mehanathan.k2024lcse@sece.ac.in', href: 'mailto:mehanathan.k2024lcse@sece.ac.in' },
                { icon: 'fas fa-phone',    text: '9360553112',                       href: 'tel:9360553112' },
                { icon: 'fas fa-map-marker-alt', text: 'Tamil Nadu, India', href: null }
              ].map(({ icon, text, href }, i) => (
                <motion.div
                  className="contact-item"
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <i className={icon} />
                  {href ? <a href={href}>{text}</a> : <span>{text}</span>}
                </motion.div>
              ))}
            </div>
            <div className="contact-socials">
              {[
                { href: 'https://github.com/mehanathank', icon: 'fab fa-github' },
                { href: 'https://www.linkedin.com/in/mehanathan-k-5802622a5', icon: 'fab fa-linkedin-in' },
                { href: 'https://leetcode.com/u/mehanathan-k/', icon: 'fas fa-code' }
              ].map(({ href, icon }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <i className={icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div className="form-group" variants={rowVariants}>
                <label>Name</label>
                <input type="text" name="name" placeholder="Your Name" required className="animated-input" />
              </motion.div>
              <motion.div className="form-group" variants={rowVariants}>
                <label>Email</label>
                <input type="email" name="email" placeholder="your@email.com" required className="animated-input" />
              </motion.div>
              <motion.div className="form-group" variants={rowVariants}>
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Your message..." required className="animated-input" />
              </motion.div>
            </motion.div>

            <motion.button
              type="submit"
              className="btn btn-primary btn-full contact-submit-btn"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className={loading ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'} />
              {loading ? ' Sending...' : ' Send Message'}
            </motion.button>

            <AnimatePresence>
              {status && (
                <motion.p
                  className="form-status"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  {status}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
