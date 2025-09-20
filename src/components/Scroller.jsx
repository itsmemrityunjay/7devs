import React, { useEffect, useRef } from 'react';
import '../styles/Scroller.css';

const Scroller = () => {
  // Create refs for each scroller row
  const scrollerRef1 = useRef(null);
  const contentRef1 = useRef(null);
  const scrollerRef2 = useRef(null);
  const contentRef2 = useRef(null);

  useEffect(() => {
    // Initialize both scroller rows
    initializeScroller(scrollerRef1, contentRef1);
    initializeScroller(scrollerRef2, contentRef2);

    // Add resize event listener
    window.addEventListener('resize', () => {
      initializeScroller(scrollerRef1, contentRef1);
      initializeScroller(scrollerRef2, contentRef2);
    });

    // Cleanup function
    return () => {
      window.removeEventListener('resize', () => {
        initializeScroller(scrollerRef1, contentRef1);
        initializeScroller(scrollerRef2, contentRef2);
      });
    };
  }, []);

  // Helper function to initialize a scroller row
  const initializeScroller = (scrollerRef, contentRef) => {
    if (!scrollerRef.current || !contentRef.current) return;

    const scrollerContent = contentRef.current;
    const scrollerContentWidth = scrollerContent.offsetWidth;

    // Clear previous clones
    const existingClones = Array.from(scrollerRef.current.querySelectorAll('.clone'));
    existingClones.forEach(clone => clone.remove());

    // Calculate how many clones we need to fill the viewport plus extra
    const numClones = Math.ceil((window.innerWidth * 3) / scrollerContentWidth);

    // Create clones
    for (let i = 0; i < numClones; i++) {
      const clone = scrollerContent.cloneNode(true);
      clone.classList.add('clone');
      scrollerRef.current.appendChild(clone);
    }

    // Set animation speed based on content width
    const speed = scrollerContentWidth / 30; // Adjust this value for speed
    
    // Set CSS variables for this specific scroller
    scrollerRef.current.style.setProperty('--scroller-width', `${scrollerContentWidth}px`);
    scrollerRef.current.style.setProperty('--scroll-speed', `${speed}s`);
  };

  return (
    <div className="scroller-wrapper">
      <div className="scroller-container">
        <div className="scroller" ref={scrollerRef1}>
          <div className="scroller-content" ref={contentRef1}>
            <span className="number">02</span>
            <span className="text">Our work</span>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Scroller;