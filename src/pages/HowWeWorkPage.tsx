import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './HowWeWorkPage.css';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    num: '01.',
    title: 'Consultation & Design',
    desc: (
      <>
        You bring the idea; I translate it into reality. We start by unpacking your goals 
        and defining a clear visual language. It is a collaborative loop—we iterate, exchange 
        honest feedback, and refine the concept until it perfectly fits your end vision.
      </>
    ),
    rows: [
      { num: '01', title: 'Discovery & Strategy' },
      { num: '02', title: 'Wireframing & Sketching' },
      { num: '03', title: 'Prototyping & Iteration' },
    ],
  },
  {
    num: '02.',
    title: 'Development & Engineering',
    desc: (
      <>
        A standard UI designer knows what <em>could</em> be; as a developer, I know what 
         <em> can</em> be. Because I understand the entire lifecycle, I build performant systems 
        without the typical disconnect between design and code.
      </>
    ),
    rows: [
      { num: '01', title: 'Architecture & Foundation' },
      { num: '02', title: 'Code Implementation' },
      { num: '03', title: 'UX Polish & Motion' },
    ],
  },
  {
    num: '03.',
    title: 'Testing & Polish',
    desc: (
      <>
        No matter how beautiful a design looks, it fails if it lacks that satisfying, flawless 
        feel in the user's hands. I run rigorous testing at every step to ensure the final 
        product hits an absolute professional standard before handoff.
      </>
    ),
    rows: [
      { num: '01', title: 'Rigorous QA Testing' },
      { num: '02', title: 'Performance Optimization' },
      { num: '03', title: 'Client Sync & Launch' },
    ],
  }
];

function ArrowUpRight() {
  return (
    <svg
      className="hww-header-arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export default function HowWeWorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.hww-section') as HTMLElement[];
    
    // 80px is 5rem (desktop header height). 56px is 3.5rem (mobile header).
    const isMobile = window.innerWidth <= 768;
    const headerHeight = isMobile ? 56 : 80;
    // Start pinning at 6rem (96px) on desktop, or roughly below mobile nav (64px) on mobile.
    const startOffset = isMobile ? 64 : 96; 

    cards.forEach((card, index) => {
      // Pin each card when its top reaches the progressive folder tab offset
      const pinTop = startOffset + index * headerHeight;
      
      ScrollTrigger.create({
        trigger: card,
        start: `top ${pinTop}px`,
        endTrigger: containerRef.current,
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false, // Prevents space reservation so the next card stacks right over it
        // Only invalidate on refresh on desktop; on mobile, URL bar hiding causes aggressive snap jumps
        invalidateOnRefresh: !isMobile, 
      });
    });
  }, { scope: containerRef });

  return (
    <main className="hww">

      {/* Hero */}
      <div className="hww-hero" style={{ position: 'relative' }}>
        {/* Section Index — absolutely positioned to prevent layout shift & GSAP snapping */}
        <div style={{
          position: 'absolute',
          top: '2rem',
          left: '5vw',
          display: 'flex',
          alignItems: 'baseline',
          gap: '1rem',
          pointerEvents: 'none'
        }}>
          <span style={{ fontFamily: 'var(--font-switzer)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(237, 237, 237, 0.3)' }}>
            03
          </span>
          <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '0.75rem', color: 'rgba(237, 237, 237, 0.35)', letterSpacing: '0.02em' }}>
            Process & Methodology
          </span>
        </div>
        
        <h1 className="hww-hero-title">
          How I <em>work</em>
        </h1>
      </div>

      {/* Stacking folder sections */}
      <div className="hww-sections" ref={containerRef}>
        {sections.map((s, i) => (
          <div 
            className="hww-section" 
            key={s.num} 
            style={{ zIndex: i + 1 }} // Ensure subsequent cards layer on top
          >
            {/* Folder tab */}
            <div className="hww-header">
              <span className="hww-header-num">{s.num}</span>
              <span className="hww-header-title">{s.title}</span>
              <ArrowUpRight />
            </div>

            {/* Body with structural gutter */}
            <div className="hww-body">
              <div className="hww-body-gutter" />
              <div className="hww-body-content">
                <p className="hww-desc">{s.desc}</p>

                <div className="hww-rows">
                  {s.rows.map((row) => (
                    <div className="hww-row" key={row.num + row.title}>
                      <span className="hww-row-num">{row.num}</span>
                      <span className="hww-row-title">{row.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stamp — outside the pinned area so it scrolls into view naturally */}
      <div style={{
        padding: '3rem 5vw 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(237, 237, 237, 0.06)'
      }}>
        <span style={{ fontFamily: 'var(--font-switzer)', fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(237, 237, 237, 0.18)' }}>
          End of Process
        </span>
        <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '0.7rem', color: 'rgba(237, 237, 237, 0.2)', letterSpacing: '0.02em' }}>
          [ Repeat indefinitely ]
        </span>
      </div>

    </main>
  );
}
