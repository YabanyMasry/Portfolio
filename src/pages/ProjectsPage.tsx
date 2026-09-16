import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectsPage.css';
import SweeperImg from '../assets/Sweeper.PNG';
import PlayerImg from '../assets/Player1.PNG';
import StreamImg from '../assets/Stream.PNG';
import ScheduleImg from '../assets/Schedule.PNG';
import JobifyImg from '../assets/Jobify.PNG';
import CultureShockImg from '../assets/CultureShock.PNG';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { 
    id: '01', 
    title: 'Culture Shock', 
    color: '#C0B3B3',
    role: 'Fullstack / Game Design',
    date: '2026',
    image: CultureShockImg
  },
  { 
    id: '02', 
    title: 'Jobify', 
    color: '#eab308',
    role: 'Web App / CV Manager',
    date: '2026',
    image: JobifyImg
  },
  { 
    id: '03', 
    title: 'Sweeper.js', // Gives it a clean, custom-built feel
    color: '#B3C0A4',
    role: 'Game Logic / Frontend',
    date: '2024',
    image: SweeperImg
  },
  { 
    id: '04', 
    title: 'Vinyl', 
    color: '#D6C5B3',
    role: 'Web Audio / UI Design',
    date: '2025',
    image: PlayerImg
  },
  { 
    id: '05', 
    title: 'Streamifies', 
    color: '#B3B8C0',
    role: 'Fullstack / Media Streaming',
    date: '2026',
    image: StreamImg
  },
  { 
    id: '06', 
    title: 'GUC Scheduler', 
    color: '#C0B3B3',
    role: 'Web App / Admin Dashboard',
    date: '2026',
    image: ScheduleImg
  },
];

// ── Layout: Editorial Brutalist ──
export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const dragState = useRef({
    isDragging: false,
    startX: 0,
    trackX: 0,
    currentX: 0,
    velocity: 0,
    lastPointerX: 0,
    lastTime: 0,
  });

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const imageArea = container.querySelector('.brutalist-image-area') as HTMLElement;
    if (!imageArea) return;

    const cards = gsap.utils.toArray(".brutalist-card", container) as HTMLElement[];
    const totalCards = projects.length;
    const vw = window.innerWidth;
    const cardWidth = vw * 0.5;
    const gap = vw * 0.1;
    const cardUnit = cardWidth + gap;
    const totalLen = totalCards * cardUnit;
    const centerX = (vw - cardWidth) / 2; // X to place a card at viewport center

    // Proxy for animatable scroll offset
    const proxy = { offset: 0 };

    const wrapIndex = (idx: number) => ((idx % totalCards) + totalCards) % totalCards;

    // Position every card based on current offset, wrapping infinitely
    const positionCards = () => {
      cards.forEach((card, i) => {
        // Raw position relative to center
        let x = i * cardUnit - proxy.offset;

        // Wrap into [-totalLen/2, totalLen/2) so cards cycle around
        x = ((x % totalLen) + totalLen + totalLen / 2) % totalLen - totalLen / 2;

        const screenX = centerX + x;

        gsap.set(card, { x: screenX, yPercent: -50 });

        // Parallax on the image
        const img = card.querySelector('.brutalist-img');
        if (img) {
          const centerDist = x; // distance from center
          const maxShift = cardWidth * 0.07;
          const shift = Math.max(-maxShift, Math.min(maxShift, -centerDist * 0.1));
          gsap.set(img, { x: shift });
        }

        // Active state
        if (Math.abs(x) < cardUnit * 0.35) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    };

    positionCards();

    const snapToIndex = (targetIdx: number) => {
      const realIdx = wrapIndex(targetIdx);
      setActiveIndex(realIdx);

      const targetOffset = targetIdx * cardUnit;

      gsap.to(proxy, {
        offset: targetOffset,
        duration: 0.8,
        ease: 'power3.out',
        onUpdate: positionCards,
        onComplete: () => {
          // Normalize offset to prevent floating-point drift over many loops
          proxy.offset = realIdx * cardUnit;
          positionCards();
        },
      });
    };

    const onPointerDown = (e: PointerEvent) => {
      e.preventDefault(); // Prevents image highlight / native drag
      const state = dragState.current;
      state.isDragging = true;
      state.startX = e.clientX;
      state.trackX = proxy.offset;
      state.lastPointerX = e.clientX;
      state.lastTime = Date.now();
      state.velocity = 0;
      gsap.killTweensOf(proxy);
      imageArea.setPointerCapture(e.pointerId);
      imageArea.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      const state = dragState.current;
      if (!state.isDragging) return;
      const dx = e.clientX - state.startX;
      proxy.offset = state.trackX - dx; // Dragging left → increases offset → reveals next card

      const now = Date.now();
      const dt = now - state.lastTime;
      if (dt > 0) state.velocity = (e.clientX - state.lastPointerX) / dt * 1000;
      state.lastPointerX = e.clientX;
      state.lastTime = now;

      positionCards();
    };

    const onPointerUp = () => {
      const state = dragState.current;
      if (!state.isDragging) return;
      state.isDragging = false;
      imageArea.style.cursor = 'grab';

      const projected = proxy.offset - state.velocity * 0.15;
      const exactIndex = projected / cardUnit;
      const snappedIndex = Math.round(exactIndex);
      snapToIndex(snappedIndex);
    };

    imageArea.addEventListener('pointerdown', onPointerDown);
    imageArea.addEventListener('pointermove', onPointerMove);
    imageArea.addEventListener('pointerup', onPointerUp);
    imageArea.addEventListener('pointercancel', onPointerUp);

    // -- Vertical Snap: only when entering the section (scrolling down) --
    const projectsEl = container.closest('.projects-page') as HTMLElement;
    let scrollingDown = true;
    let lastScrollY = window.scrollY;

    const directionTracker = () => {
      scrollingDown = window.scrollY > lastScrollY;
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', directionTracker, { passive: true });

    const verticalSnap = ScrollTrigger.create({
      trigger: projectsEl || ".projects-page",
      start: "top 80%",
      end: "top top",
      snap: {
        snapTo: (value: number) => {
          // Only snap forward (into the section) when scrolling down
          if (scrollingDown && value > 0.15) return 1;
          return value; // Don't interfere when scrolling up or barely entered
        },
        duration: { min: 0.2, max: 0.5 },
        delay: 0.05,
        ease: "power3.inOut"
      }
    });

    return () => {
      imageArea.removeEventListener('pointerdown', onPointerDown);
      imageArea.removeEventListener('pointermove', onPointerMove);
      imageArea.removeEventListener('pointerup', onPointerUp);
      imageArea.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('scroll', directionTracker);
      verticalSnap.kill();
    };
  }, { scope: containerRef });

  const activeProject = projects[activeIndex] || projects[0];

  return (
    <main className="projects-page">

      <div ref={containerRef} className="brutalist-container scroll-section">
        {/* Editorial Top Bar */}
        <div className="brutalist-top-bar">
          <div className="brutalist-top-left">Selected Works — {new Date().getFullYear()}</div>
          <div className="brutalist-top-right">{activeProject.role}</div>
        </div>

        {/* Image Area — draggable */}
        <div className="brutalist-image-area" style={{ cursor: 'grab', touchAction: 'pan-y' }}>
          <div ref={trackRef} className="brutalist-track">
            {projects.map((proj, index) => (
              <div 
                key={index} 
                className={`brutalist-card ${index === 0 ? 'active' : ''}`}
              >
                <div className="brutalist-img-wrapper">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="brutalist-img"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Panel — solid background, fully readable */}
        <div className="brutalist-info-panel">
          <div className="brutalist-title-container">
            <span className="brutalist-micro" style={{ marginBottom: '1rem' }}>
              Index — Case Study
            </span>
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeProject.id}
                className="brutalist-title"
                initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeProject.title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id + '-meta'}
                className="brutalist-meta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {activeProject.role} — {activeProject.date}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="brutalist-counter" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
            <span className="brutalist-micro">[ Drag to explore ]</span>
            <span>{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
