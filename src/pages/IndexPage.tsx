import HeroPage from './HeroPage';
import AboutPage from './AboutPage';
import HowWeWorkPage from './HowWeWorkPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import ScrollExpand from '../components/ui/ScrollExpand';

export default function IndexPage() {
  return (
    <div style={{ position: 'relative' }}>
      <style>{`
        .nav-brutalist {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2.5rem;
          z-index: 100;
          mix-blend-mode: difference;
          pointer-events: none;
        }
        .nav-brutalist > * {
          pointer-events: auto;
        }
        .nav-wordmark {
          font-family: var(--font-switzer);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #FFFFFF;
          text-decoration: none;
          user-select: none;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links li {
          display: flex;
          align-items: center;
        }
        .nav-separator {
          color: rgba(255,255,255,0.25);
          font-size: 0.65rem;
          margin: 0 1.25rem;
          user-select: none;
        }
        .nav-link {
          font-family: var(--font-switzer);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FFFFFF;
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: opacity 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #FFFFFF;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .nav-link:hover {
          opacity: 0.7;
        }
        .nav-index {
          font-family: var(--font-lora);
          font-style: italic;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.35);
          margin-right: 0.4rem;
          vertical-align: super;
        }
      `}</style>

      <nav className="nav-brutalist">
        <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="nav-wordmark">Yousef Ochiai</a>
        <ul className="nav-links">
          <li>
            <span className="nav-index">02</span>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="nav-link">Manifesto</a>
          </li>
          <li><span className="nav-separator">—</span></li>
          <li>
            <span className="nav-index">03</span>
            <a href="#process" onClick={(e) => { e.preventDefault(); document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }); }} className="nav-link">Process & Methodology</a>
          </li>
          <li><span className="nav-separator">—</span></li>
          <li>
            <span className="nav-index">04</span>
            <a href="#archive" onClick={(e) => { e.preventDefault(); document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' }); }} className="nav-link">The Archive</a>
          </li>
          <li><span className="nav-separator">—</span></li>
          <li>
            <span className="nav-index">05</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="nav-link">Transmission</a>
          </li>
        </ul>
      </nav>

      <main>
        <div id="hero">
          <HeroPage />
        </div>
        <div id="about">
          <AboutPage />
        </div>
        <div id="process">
          <HowWeWorkPage />
        </div>
        <div id="archive" style={{ position: 'relative', zIndex: 10, marginTop: '-20vh' }}>
          <ScrollExpand
            mediaType="color"
            src="#F4F4F0"
            useWindowScroll={true}
            maskChildren={true}
            backgroundChildren={
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '6rem 5vw',
                pointerEvents: 'none',
                overflow: 'hidden'
              }}>
                {/* Top corners */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-switzer)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(237,237,237,0.3)' }}>
                  <span>04 — Archive Transition</span>
                  <span>[ Keep Scrolling ]</span>
                </div>
                
                {/* Massive background watermark */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontFamily: 'var(--font-switzer)',
                  fontSize: '28vw',
                  fontWeight: 900,
                  letterSpacing: '-0.06em',
                  color: 'rgba(237,237,237,0.03)',
                  whiteSpace: 'nowrap',
                  lineHeight: 0.75,
                }}>
                  ARCHIVE
                </div>
                
                {/* Bottom corners */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '0.75rem', color: 'rgba(237,237,237,0.3)' }}>
                  <span>Entering the gallery space</span>
                  <span>System // 04</span>
                </div>
              </div>
            }
          >
            <div style={{ color: '#0A0A0A', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '1.25rem', marginBottom: '1.5rem', opacity: 0.5 }}>
                04 — The Archive
              </span>
              <h2 style={{ fontFamily: 'var(--font-switzer)', fontSize: 'clamp(4rem, 12vw, 12rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em', lineHeight: 0.85, margin: 0 }}>
                Selected<br/>Works
              </h2>
              
              {/* Editorial bottom details */}
              <div style={{
                marginTop: '4rem',
                display: 'flex',
                gap: '3rem',
                fontFamily: 'var(--font-switzer)',
                fontSize: '0.6rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(10, 10, 10, 0.4)',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span>Volume I</span>
                  <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', textTransform: 'none', letterSpacing: '0.02em', fontSize: '0.75rem', color: 'rgba(10, 10, 10, 0.5)' }}>
                    2024 — 2026
                  </span>
                </div>
                <div style={{ width: '1px', backgroundColor: 'rgba(10, 10, 10, 0.15)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxWidth: '24ch' }}>
                  <span>Discipline</span>
                  <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', textTransform: 'none', letterSpacing: '0.02em', fontSize: '0.75rem', color: 'rgba(10, 10, 10, 0.5)' }}>
                    Interactive, Systems & Brutalist UI
                  </span>
                </div>
              </div>
            </div>
          </ScrollExpand>
        </div>
        <ProjectsPage />
        <div id="contact">
          <ContactPage />
        </div>
      </main>
    </div>
  );
}
