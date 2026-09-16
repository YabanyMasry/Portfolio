import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  triggerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    const words = text.split(' ');
    let isHighlighted = false;
    let charIndex = 0;

    return words.map((word, wordIndex) => {
      const charElements = [];
      for (let i = 0; i < word.length; i++) {
        if (word[i] === '*') {
          isHighlighted = !isHighlighted;
          continue;
        }
        
        charElements.push(
          <span 
            className={`char ${isHighlighted ? 'highlight-char' : ''}`} 
            key={charIndex++}
          >
            {word[i]}
          </span>
        );
      }
      
      return (
        <span key={`word-wrap-${wordIndex}`}>
          <span className="word" style={{ display: 'inline-block' }}>
            {charElements}
          </span>
          {wordIndex !== words.length - 1 && ' '}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const triggerEl = triggerRef && triggerRef.current ? triggerRef.current : el;

    const charElements = el.querySelectorAll('.char');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        scroller,
        start: scrollStart,
        end: scrollEnd,
        scrub: 0.5
      }
    });

    tl.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 50,
        scaleY: 1.2,
        scaleX: 0.9,
        transformOrigin: '50% 100%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [scrollContainerRef, triggerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
