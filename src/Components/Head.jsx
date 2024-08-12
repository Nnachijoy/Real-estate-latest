import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Head = ({ title, bellIcon, profileImage }) => {
  return (
    <Container 
      className="p-3 d-flex align-items-center" 
      style={{ position: 'relative', marginLeft: "10px" }}
    >
      {/* Title Section */}
      <h3 
        className="flex-grow-1 mt-1" 
        style={{ marginLeft: "60px", color: "#FF7B29", fontFamily: "Syne", fontWeight: "700", fontSize: "22px" }}
      >
        {title}
      </h3>

    
      <div className="d-flex align-items-center">
        <Image
          src={bellIcon}
          className="mr-2 mx-2 mb-2 bell"
          style={{ maxWidth: '20px', maxHeight: '20px' }}
        />
        {/* Profile Picture */}
        <Image
          src={profileImage}
          className="prof"
          style={{ maxWidth: '50px', maxHeight: '50px', marginRight: "20px" }}
          roundedCircle
        />
      </div>
    </Container>
  );
};

export default Head;
