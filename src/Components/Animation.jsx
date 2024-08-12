import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css/animate.min.css';

const Animation = ({ children, animationClass = 'animate__fadeInUp', delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.2, // Trigger when 20% of the element is in view
  });
  
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowAnimation(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className={`animate__animated ${showAnimation ? animationClass : ''}`} // Apply the animation class only when showAnimation is true
    >
      {children}
    </div>
  );
};

export default Animation;
