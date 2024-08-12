import React from 'react';
import './Loader.css'; // Add some basic styles for the loader

const Loader = () => {
  return (
    <div className="loader-overlay">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#FF8844"
          strokeWidth="4"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset="0"
          transform="rotate(60 50 50)"
        />
      </svg>
    </div>
  );
};

export default Loader;
