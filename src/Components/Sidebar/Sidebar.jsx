

import React, { useState, useEffect } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import set from "../../assets/set.png";
import shield from "../../assets/shield.png";
import pf from "../../assets/pf.png";
import list from "../../assets/list.png";
import graph from "../../assets/graph.png";
import fav from "../../assets/fav.png";
import log from "../../assets/log.png";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = ({ setSidebarVisible }) => {
  const location = useLocation(); // Get the current path
  const [activeItem, setActiveItem] = useState('/'); // Set the default active item to '/'

  useEffect(() => {
    setActiveItem(location.pathname); // Set the active item based on the current path
  }, [location.pathname]); // Trigger effect when location changes

  const handleItemClick = (path) => {
    setActiveItem(path); // Set the active item when clicked
    setSidebarVisible(false); // Slide out the sidebar when an item is clicked
  };

  return (
    <div className="sidebar bg-white">
      <ListGroup className="list-group-flush mt-4 ms-4">
        <div className="mt-5 d-flex justify-content-between align-items-center">
          <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
          <Button 
            className="close-sidebar-button d-md-none border-0" 
            style={{ background: "none" }} 
            onClick={() => setSidebarVisible(false)}
          >
            <FaTimes style={{ color: "#888888" }} />
          </Button>
        </div>
        <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
        
        <Link to="/" className="text-decoration-none" onClick={() => handleItemClick('/')}>
          <ListGroup.Item className={`border-0 rounded-5 mt-5 d-flex align-items-center ${activeItem === '/' ? 'active' : ''}`}>
            <LuLayoutDashboard className="icon mx-2" style={{ fontSize: "25px" }} /> Dashboard
          </ListGroup.Item>
        </Link>

        <Link to="/activities" className="text-decoration-none" onClick={() => handleItemClick('/activities')}>
          <ListGroup.Item className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeItem === '/activities' ? 'active' : ''}`}>
            <img src={graph} className="mx-2" alt="Activity" /> Activity
          </ListGroup.Item>
        </Link>

        <Link to="/my-listing" className="text-decoration-none" onClick={() => handleItemClick('/my-listing')}>
          <ListGroup.Item className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeItem === '/my-listing' ? 'active' : ''}`}>
            <img src={list} className="mx-2" alt="My Listing" /> My Listing
          </ListGroup.Item>
        </Link>

        <Link to="/favorites" className="text-decoration-none" onClick={() => handleItemClick('/favorites')}>
          <ListGroup.Item className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeItem === '/favorites' ? 'active' : ''}`}>
            <img src={fav} className="mx-2" alt="Favourites" /> Favourites
          </ListGroup.Item>
        </Link>

        <Link to="/saved-profile" className="text-decoration-none" onClick={() => handleItemClick('/saved-profile')}>
          <ListGroup.Item className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeItem === '/saved-profile' ? 'active' : ''}`}>
            <img src={pf} className="mx-2" alt="Saved Profile" /> Saved Profile
          </ListGroup.Item>
        </Link>

        <Link to="/account-settings" className="text-decoration-none" onClick={() => handleItemClick('/account-settings')}>
          <ListGroup.Item className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeItem === '/account-settings' ? 'active' : ''}`}>
            <img src={shield} className="mx-2" alt="Account Settings" /> Account Settings
          </ListGroup.Item>
        </Link>

        <Link to="/security" className="text-decoration-none" onClick={() => handleItemClick('/security')}>
          <ListGroup.Item className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeItem === '/security' ? 'active' : ''}`}>
            <img src={set} className="mx-2" alt="Security" /> Security
          </ListGroup.Item>
        </Link>

        <Link to="/logout" className="text-decoration-none" onClick={() => handleItemClick('/logout')}>
          <ListGroup.Item className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeItem === '/logout' ? 'active' : ''}`}>
            <img src={log} className="mx-2" alt="Logout" /> Logout
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
