

  
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Listing from './Listing';

const listingsContainerOne = [
  // ... your listing data
];

const MyListing = () => {
  const [currentView, setCurrentView] = useState('Approved');

  const approvedListings = listingsContainerOne;
  const unapprovedListings = []; 

  const currentListings = currentView === 'Approved' ? approvedListings : unapprovedListings;

  // Inline styles for the Add Listing button
  const addListingButtonStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#FF8844',
    border: 'none',
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '18px',
    color: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    cursor: 'pointer',
  };

  return (
    <div style={{ marginTop: "-1px", marginBottom: "180px", position: "relative" }}>
      <Listing />

      {/* Add Listing Button */}
      <Button
        variant="primary"
        style={addListingButtonStyle}
        onClick={() => alert('Add Listing button clicked!')} // Handle the button click action
      >
        Add Listing
      </Button>
    </div>
  );
};

export default MyListing;
