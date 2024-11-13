
import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.css'; // Custom CSS for loader

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" role="status" style={{color:"black"}}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
