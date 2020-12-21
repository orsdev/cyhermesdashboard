import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = () => {
  const containerRef = useRef(null);
  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.play();

    tl.to(containerRef.current, {
      duration: 1,
      opacity: 0,
    });
  }, []);

  return (
    <section className="loading-screen" ref={containerRef}>
      <div className="loading-screen-container">
        <div className="lds">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default LoadingScreen;
