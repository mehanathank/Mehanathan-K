import { useState } from 'react';
import '../styles/Contact.css';

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
          <div className="contact-info reveal">
            <p className="contact-tagline">Have a project in mind or want to collaborate? Feel free to reach out!</p>
            <div className="contact-details">
              <div className="contact-item"><i className="fas fa-envelope" /><a href="mailto:mehanathan.k2024lcse@sece.ac.in">mehanathan.k2024lcse@sece.ac.in</a></div>
              <div className="contact-item"><i className="fas fa-phone" /><a href="tel:9360553112">9360553112</a></div>
              <div className="contact-item"><i className="fas fa-map-marker-alt" /><span>Tamil Nadu, India</span></div>
            </div>
            <div className="contact-socials">
              <a href="https://github.com/mehanathank" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-github" /></a>
              <a href="https://www.linkedin.com/in/mehanathan-k-5802622a5" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-linkedin-in" /></a>
              <a href="https://leetcode.com/u/mehanathan-k/" target="_blank" rel="noreferrer" className="social-icon"><i className="fas fa-code" /></a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Your message..." required />
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
              <i className={loading ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'} />
              {loading ? ' Sending...' : ' Send Message'}
            </button>
            <p className="form-status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
