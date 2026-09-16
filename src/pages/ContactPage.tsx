import { motion } from 'framer-motion';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Edge Utilities */}
      <div className="contact-edge-left">
        Availability — Open to Freelance & Full-Time
      </div>
      <div className="contact-edge-right">
        Based in Tokyo, Japan — Worldwide
      </div>

      <div className="contact-grid">
        {/* Left Side: Massive Typography */}
        <div className="contact-hero">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '1rem',
              marginBottom: '2rem',
              pointerEvents: 'none'
            }}
          >
            <span style={{ fontFamily: 'var(--font-switzer)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(10, 10, 10, 0.4)' }}>
              05
            </span>
            <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '0.75rem', color: 'rgba(10, 10, 10, 0.5)', letterSpacing: '0.02em' }}>
              Transmission
            </span>
          </motion.div>
          
          <motion.h1 
            className="contact-hero-title"
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's<br/>Talk.
          </motion.h1>
          <motion.p 
            className="contact-hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a project in mind?
          </motion.p>
          <motion.span
            className="contact-micro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            No pitch decks required.
          </motion.span>
        </div>

        {/* Right Side: Information blocks */}
        <div className="contact-info">
          
          <motion.div 
            className="contact-info-block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="contact-label">Direct Inquiries</div>
            <a href="mailto:yousefmasanobuochiai@gmail.com" className="contact-link">
              yousefmasanobu<br/>ochiai@gmail.com
            </a>
            <span className="contact-micro" style={{ marginTop: '0.75rem' }}>
              Replies within 24 hrs — Usually faster.
            </span>
          </motion.div>

          <motion.div 
            className="contact-info-block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="contact-label">Elsewhere</div>
            <ul className="social-list">
              <li>
                <a href="https://www.linkedin.com/in/yousef-ochiai/" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
                <span className="contact-micro">— The professional one</span>
              </li>
              <li>
                <a href="https://github.com/YabanyMasry" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
                <span className="contact-micro">— Where the code lives</span>
              </li>
              <li>
                <a href="https://www.instagram.com/yabanibedesign/" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
                <span className="contact-micro">— Graphic design IG page</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
