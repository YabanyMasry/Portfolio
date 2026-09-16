import { SVG3D } from "3dsvg";

const mySvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="600.000000pt" height="600.000000pt" viewBox="0 0 600.000000 600.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2710 5985 c-850 -86 -1614 -518 -2114 -1194 -680 -920 -786 -2112
-277 -3131 145 -291 312 -524 549 -764 241 -245 492 -427 792 -577 290 -145
512 -216 885 -285 143 -27 165 -28 455 -29 292 0 311 1 455 28 369 69 599 143
885 286 1250 623 1904 2031 1574 3391 -183 751 -662 1417 -1314 1826 -568 355
-1239 515 -1890 449z m491 -895 c122 -12 281 -43 395 -76 137 -39 392 -147
408 -172 3 -4 -222 -235 -500 -513 l-504 -504 -504 504 c-278 278 -503 509
-500 513 8 13 114 64 225 108 308 123 653 172 980 140z m-1269 -1467 l618
-618 0 -1027 c0 -566 -3 -1028 -7 -1028 -29 0 -218 59 -323 101 -241 94 -472
244 -668 433 -134 130 -211 221 -301 355 -466 695 -467 1620 -3 2319 30 45 58
82 61 82 3 0 284 -278 623 -617z m2826 525 c124 -192 204 -367 261 -571 187
-665 44 -1364 -387 -1898 -87 -109 -293 -303 -400 -379 -209 -148 -452 -266
-673 -325 -52 -14 -97 -25 -101 -25 -5 0 -8 462 -8 1027 l0 1028 617 617 c340
340 621 618 624 618 4 0 34 -42 67 -92z"/>
</g>
</svg>
`;


export default function HeroPage() {
  return (
    <main style={{ backgroundColor: '#111111', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes cinematicFadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }
        @keyframes cinematicFadeIn3D {
          from {
            opacity: 0;
            transform: scale(1.35);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: scale(1.3);
            filter: blur(0px);
          }
        }
        @keyframes noiseShift {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
        }
        .deep-space-noise {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          width: 200%;
          height: 200%;
          background: transparent url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
          opacity: 0.25;
          pointer-events: none;
          animation: noiseShift 8s steps(10) infinite;
          z-index: 0;
        }
        .cinematic-text {
          animation: cinematicFadeIn 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          color: #FFFFFF;
          mix-blend-mode: difference;
          z-index: 10 !important;
        }
        .cinematic-3d {
          opacity: 0;
          animation: cinematicFadeIn 3.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          animation-delay: 0.5s;
        }
      `}</style>

      {/* Deep Space Noise Overlay */}
      <div className="deep-space-noise" />

      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100vh',
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(17,17,17,0) 60%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <section
        style={{
          backgroundColor: '#111111',
          color: '#EDEDED',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Top-left Index */}
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
          <span style={{ fontFamily: 'var(--font-switzer)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(237, 237, 237, 0.3)' }}>
            01
          </span>
          <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '0.75rem', color: 'rgba(237, 237, 237, 0.35)', letterSpacing: '0.02em' }}>
            Introduction
          </span>
        </div>

        {/* Bottom-left Specs */}
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          left: '5vw',
          zIndex: 10,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          fontFamily: 'var(--font-switzer)',
          fontSize: '0.6rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(237, 237, 237, 0.3)'
        }}>
          <span>Role // Design Engineer</span>
          <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '0.7rem', color: 'rgba(237, 237, 237, 0.4)', textTransform: 'none', letterSpacing: '0.02em' }}>
            Bridging aesthetics and logic.
          </span>
        </div>

        {/* Bottom-right Coordinates */}
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          right: '5vw',
          zIndex: 10,
          pointerEvents: 'none',
          textAlign: 'right',
          fontFamily: 'var(--font-switzer)',
          fontSize: '0.55rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(237, 237, 237, 0.25)'
        }}>
          35.6762° N, 139.6503° E <br/>
          <span style={{ opacity: 0.5 }}>Tokyo, Japan</span>
        </div>
        {/* Standard DOM Typography */}
        <h1
          className="hero-title cinematic-text"
          style={{
            fontFamily: "var(--font-switzer)",
            position: 'absolute',
            fontSize: 'clamp(6rem, 18vw, 24rem)',
            fontWeight: 900,
            lineHeight: 0.85,
            textAlign: 'center',
            letterSpacing: '-0.06em',
            textTransform: 'uppercase',
            margin: 0,
            userSelect: 'none',
          }}
        >
          Yousef
          <br />
          Ochiai
        </h1>

        {/* 3D Content Container */}
        <div className="cinematic-3d" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '130vw', height: '130vh', pointerEvents: 'auto', flexShrink: 0 }}>
            <SVG3D
              svg={mySvg}
              depth={1.2}
              smoothness={0.6}
              color="#ededed"
              material="chrome"
              metalness={0.0}
              roughness={0.2}
              animate="spin"
              animateSpeed={0.8}
              ambientIntensity={0}
              shadow={false}
            />
          </div>
        </div>
      </section>


    </main>
  );
}
