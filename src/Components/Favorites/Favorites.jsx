

// Import necessary libraries and components
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col, Card, Form, Button, Image, FormControl } from 'react-bootstrap';
import firstlistingimage from '../../assets/firstlistingimage.png';
import pencil from '../../assets/pencil.png'; 
import secondcardlisting from '../../assets/secondcardlisting.png';
import thirdcardlisting from '../../assets/thirdcardlisting.png';
import fourthcardlisting from '../../assets/fourthcardlisting.png';
import fifthcardlisting from '../../assets/fifthcardlisting.png';
import sixthcardlisting from '../../assets/sixthcardlisting.png';
import bath from '../../assets/bath.png';
import bed from '../../assets/bed.png';
import room from '../../assets/room.png';
import sqft from '../../assets/sqft.png';
import Search from '../../assets/Search.png';
import dropdown from '../../assets/dropdown.png';
import sorry from '../../assets/sorry.png';
import bell from "../../assets/bell.png";
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import "./Favorites.css"; 
import Animation from '../Animation';
import Head from '../Head'; 
import CustomNavbar from '../CustomNavbar/CustomNavbar';

// Array to store listings data
const listingsContainerOne = [
  {
    price: '$148,000',
    address: 'Block 45, Rockvale Manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150 sqft',
    image: firstlistingimage,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale Manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150 sqft',
    image: secondcardlisting,
  },
 

  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: thirdcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fourthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fifthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: sixthcardlisting,
  }
];
// Favorites component definition
const Favorites = () => {
  // State to toggle visibility of search icon
  const [showIcon, setShowIcon] = useState(true);
  // State to manage current listing view (Approved/Unapproved)
  const [currentView, setCurrentView] = useState('Approved');
  // State to manage selected filter options
  const [selectedAction, setSelectedAction] = useState({
    forSale: 'For Sale',
    price: 'Price',
    bedsBath: 'Beds & Bath',
    homeType: 'Home Type',
    more: 'More',
  });

  // Function to hide search icon when search bar is focused
  const handleFocus = () => {
    setShowIcon(false);
  };

  // Function to show search icon when search bar loses focus
  const handleBlur = () => {
    setShowIcon(true);
  };

  // Function to update selected filter option
  const handleSelect = (category, action) => {
    setSelectedAction(prevState => ({
      ...prevState,
      [category]: action,
    }));
  };

  // Array to hold either approved or unapproved listings based on the current view
  const currentListings = currentView === 'Approved' ? listingsContainerOne : [];

  return (
    <div style={{ marginTop: "-1px", marginBottom: "180px" }}>
      
      {/* Mobile Navbar - shows only on mobile view */}
      <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
        <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
          <h3 className="flex-grow-1 mt-1" style={{ marginLeft: "70px", color: "#FF7B29", fontFamily: "Syne", fontWeight: "700", fontSize: "22px" }}>RealHomes</h3>
          <Image src={bell} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
          <Image src={profile} roundedCircle style={{ width: "40px", height: "40px", marginRight: "35px" }} />
        </Container>
      </div>

      {/* Desktop Navbar - shows only on desktop view */}
      <div className="container d-none d-md-block">
        <Container className="p-3" style={{ position: 'relative', marginLeft: "-30px" }}>
          <Head bellIcon={bell} profileImage={profile} />
        </Container>
      </div>

      {/* Search bar and filters */}
      <div className="container">
        <div className="d-flex flex-column align-items-end mt-4">
          <Form inline className="mt-2 mx-4 search search-form search-form-mobile d-flex align-items-center" style={{ maxWidth: "400px" }}>
            <FormControl type="text" placeholder="Search" className="search-input" />
            <Image src={searchlight} className="ml-2" />
          </Form>
        </div>
      </div>

      {/* Page Title and Filter Section */}
      <div className="container me-4">
        <h3 className='my-listing mx-3 mt-3'>Favorites</h3>

        <div className="filters-container mt-2">
          {/* Search input field with icon */}
          <div className="position-relative search-container">
            {showIcon && <img src={Search} alt="searchicon" className="search-icon" />}
            <Form.Control
              className="custom-input pl-5"
              placeholder="Search city, neighborhood, zip address"
              aria-label="Search"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <CustomNavbar />

          {/* Dropdown filters */}
          <div className="dropdowns-wrapper">
            <div className='dropdown-container px-3'>
              {['forSale', 'price', 'bedsBath', 'homeType', 'more'].map((filter, index) => (
                <div className='dropdown-item-wrapper bg-white p-1 rounded-4' key={index}>
                  <Dropdown onSelect={(e) => handleSelect(filter, e)}>
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                      {selectedAction[filter]}
                      <img src={dropdown} alt="dropdown" style={{ marginLeft: '8px' }} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ))}
              {/* Apply Filter Button */}
              <Button className="border-0 p-3 rounded-5" style={{ background: "#FF7B29" }}>Apply Filter</Button>
            </div>
          </div>
        </div>

        {/* Listings Section */}
        <Container>
          <Row>
            {currentListings.map((listing, index) => (
              <Col key={index} xs={12} md={4}>
                <Card className="listing-card mt-4 border-0">
                  <div style={{ position: 'relative' }}>
                    <Card.Img variant="top" src={listing.image} style={{ position: 'relative' }} />
                    <Button 
                      className="action-button rounded-4" 
                      style={{ 
                        position: 'absolute', 
                        top: '10px', 
                        left: '10px', 
                        backgroundColor: currentView === 'Approved' ? '#FF8844' : '#404040', 
                        color: 'white',
                        border: 'none',
                        fontSize: "14px"
                      }}>
                      {currentView === 'Approved' ? 'SELL' : 'UNAPPROVED'}
                    </Button>
                  </div>
                  <Card.Body style={{ background: "#f6f7f8" }}>
                    <Card.Title className='listing-price'>{listing.price}</Card.Title>
                    <p className='listing-text'>{listing.address}</p>
                    <div className="listing-details d-flex justify-content-between">
                      <div><img src={bed} alt="bed" />{listing.bed}</div>
                      <div><img src={room} alt="room" />{listing.room}</div>
                      <div><img src={bath} alt="bath" />{listing.bath}</div>
                      <div><img src={sqft} alt="sqft" />{listing.sqft}</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Favorites;
