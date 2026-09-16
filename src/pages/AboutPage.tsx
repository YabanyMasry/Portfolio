import { useRef, useEffect } from 'react';
// @ts-ignore
import ScrollFloat from '../components/ui/ScrollFloat';
// @ts-ignore
import Lanyard from '../components/ui/Lanyard';
import ProgressBar from '../components/ui/ProgressBar';

export default function AboutPage() {
  const secondTrackRef = useRef<HTMLDivElement>(null);
  const progressBarTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!secondTrackRef.current) return;

      const track = secondTrackRef.current;
      const rect = track.getBoundingClientRect();

      // The total scrollable distance within the track is its height minus viewport height
      const scrollableDistance = rect.height - window.innerHeight;

      // rect.top goes from 0 (when track hits top of screen) to -scrollableDistance
      // So scrolled distance is -rect.top
      let progress = -rect.top / scrollableDistance;

      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      // Update progress bar width efficiently via CSS transform
      if (progressBarTopRef.current) progressBarTopRef.current.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set state on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{ backgroundColor: '#111111', color: '#EDEDED' }}>
      <style>{`
        .desktop-lanyard {
          display: block;
        }
        .mobile-brutalist-graphic {
          display: none;
        }

        @media (max-width: 768px), (max-aspect-ratio: 9/16) {
          .desktop-lanyard {
            display: none !important;
          }
          .mobile-brutalist-graphic {
            display: block;
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-90deg);
            font-family: var(--font-clash);
            font-size: 22vh;
            font-weight: 900;
            line-height: 0.8;
            color: transparent;
            -webkit-text-stroke: 1px rgba(237, 237, 237, 0.15);
            white-space: nowrap;
            pointer-events: none;
            z-index: 0;
          }
          .mobile-brutalist-graphic::after {
            content: '02';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: var(--font-lora);
            font-style: italic;
            font-size: 15vh;
            color: rgba(237, 237, 237, 0.08);
            -webkit-text-stroke: 0;
            z-index: -1;
          }
        }
      `}</style>

      {/* Second Sticky Track for ScrollFloat */}
      <div ref={secondTrackRef} style={{ height: '400vh', position: 'relative' }}>
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            overflow: 'hidden',
            padding: '0 5vw 8vh'
          }}
        >
          <div style={{ width: '100%' }}>
            {/* Static top divider */}
            <div style={{
              position: 'absolute',
              top: '6rem',
              left: 0,
              right: 0,
              width: '90vw',
              marginLeft: 'calc(50% - 45vw)',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px',
              zIndex: 10
            }} />

            {/* Section Index — top left */}
            <div style={{
              position: 'absolute',
              top: '7.5rem',
              left: '5vw',
              display: 'flex',
              alignItems: 'baseline',
              gap: '1rem',
              zIndex: 10,
              pointerEvents: 'none'
            }}>
              <span style={{
                fontFamily: 'var(--font-switzer)',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(237, 237, 237, 0.3)'
              }}>02</span>
              <span style={{
                fontFamily: 'var(--font-lora)',
                fontStyle: 'italic',
                fontSize: '0.75rem',
                color: 'rgba(237, 237, 237, 0.35)',
                letterSpacing: '0.02em'
              }}>Manifesto</span>
            </div>

            {/* Right-edge vertical annotation */}
            <div style={{
              position: 'absolute',
              top: '7.5rem',
              right: '5vw',
              zIndex: 10,
              pointerEvents: 'none',
              fontFamily: 'var(--font-switzer)',
              fontSize: '0.55rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(237, 237, 237, 0.2)',
              writingMode: 'vertical-rl'
            }}>
              Philosophy & Approach
            </div>

            {/* Hanging Lanyard (Desktop Only) */}
            <div className="desktop-lanyard" style={{
              position: 'absolute',
              top: '6rem',
              left: 0,
              right: 0,
              height: 'calc(100vh - 6rem)',
              zIndex: 5,
              pointerEvents: 'none' // Prevent full-screen blocking
            }}>
              <div style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}>
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>
            </div>

            {/* Mobile Brutalist Graphic */}
            <div className="mobile-brutalist-graphic">
              MANIFESTO
            </div>

            <ScrollFloat
              triggerRef={secondTrackRef}
              animationDuration={0.8}
              ease="back.inOut(2)"
              scrollStart="top top"
              scrollEnd="40% top"
              stagger={0.02}
              containerClassName=""
              textClassName=""
            >
              Designer blending *artistry* with cuttingedge *innovation*
            </ScrollFloat>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', marginBottom: '1rem', }}>
              <ScrollFloat
                triggerRef={secondTrackRef}
                animationDuration={0.8}
                ease="back.inOut(2)"
                scrollStart="40% top"
                scrollEnd="75% top"
                stagger={0.02}
                containerClassName=""
                textClassName="scroll-float-text-small"
              >
                Work for *money* design for *love*
              </ScrollFloat>
            </div>
            <ProgressBar ref={progressBarTopRef} variant="minimal" />

            {/* Bottom attribution line */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1.5rem',
              pointerEvents: 'none'
            }}>
              <span style={{
                fontFamily: 'var(--font-lora)',
                fontStyle: 'italic',
                fontSize: '0.7rem',
                color: 'rgba(237, 237, 237, 0.25)',
                letterSpacing: '0.02em'
              }}>Tokyo — Cairo — Wherever the work takes me</span>
              <span style={{
                fontFamily: 'var(--font-switzer)',
                fontSize: '0.55rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(237, 237, 237, 0.2)'
              }}>Est. MMXXIV</span>
            </div>

          </div>
        </div>
      </div>


    </main>
  );
}
