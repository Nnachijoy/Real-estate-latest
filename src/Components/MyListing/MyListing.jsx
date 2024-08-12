import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col, Card, Form , Button, Image, FormControl} from 'react-bootstrap';
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
import "./MyListing.css"; 
import Animation from '../Animation';
import Listing from "./Listing"

const listingsContainerOne = [
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: firstlistingimage,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
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

const MyListing = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [currentView, setCurrentView] = useState('Approved');

  const handleFocus = () => {
    setShowIcon(false);
  };

  const handleBlur = () => {
    setShowIcon(true);
  };

  const [selectedAction, setSelectedAction] = useState({
    forSale: 'For sale',
    price: 'Price',
    bedsBath: 'Beds & Bath',
    homeType: 'Home Type',
    more: 'More',
  });

  const handleSelect = (category, action) => {
    setSelectedAction(prevState => ({
      ...prevState,
      [category]: action
    }));
  };

  const approvedListings = listingsContainerOne;
  const unapprovedListings = []; 

  const currentListings = currentView === 'Approved' ? approvedListings : unapprovedListings;

  return (
    <div style={{marginTop:"-1px", marginBottom:"180px"}}> 
   
    <Listing />
    </div>
  );
};

export default MyListing;

  