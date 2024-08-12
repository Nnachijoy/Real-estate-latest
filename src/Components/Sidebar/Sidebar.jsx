


import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';
import set from "../../assets/set.png";
import shield from "../../assets/shield.png";
import pf from "../../assets/pf.png";
import list from "../../assets/list.png";
import graph from "../../assets/graph.png";
import fav from "../../assets/fav.png";
import Dashboard from "../../assets/Dashboard.png";
import log from "../../assets/log.png";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = ({ activeTab, setActiveTab, setSidebarVisible }) => {
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
        <ListGroup.Item
          className={`border-0 rounded-5 mt-5 d-flex align-items-center ${activeTab === 'Home' ? 'active' : ''}`}
          action
          onClick={() => setActiveTab('Home')}
        >
          <LuLayoutDashboard className="icon mx-2" style={{ fontSize: "25px" }} /> Dashboard
        </ListGroup.Item>
        <ListGroup.Item
          className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeTab === 'Profile' ? 'active' : ''}`}
          action
          onClick={() => setActiveTab('Profile')}
        >
          <img src={graph} className="mx-2" alt="Activity" /> Activity
        </ListGroup.Item>
        <ListGroup.Item
          className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeTab === 'Settings' ? 'active' : ''}`}
          action
          onClick={() => setActiveTab('Settings')}
        >
          <img src={list} className="mx-2" alt="My Listing" /> My Listing
        </ListGroup.Item>
        <ListGroup.Item
          className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeTab === 'Messages' ? 'active' : ''}`}
          action
          onClick={() => setActiveTab('Messages')}
        >
          <img src={fav} className="mx-2" alt="Favourites" /> Favourites
        </ListGroup.Item>
        <ListGroup.Item
          className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeTab === 'SavedProfile' ? 'active' : ''}`}
          action
          onClick={() => setActiveTab('SavedProfile')}
        >
          <img src={pf} className="mx-2" alt="Saved Profile" /> Saved Profile
        </ListGroup.Item>
        <ListGroup.Item
          className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeTab === 'AccountSettings' ? 'active' : ''}`}
          action
          onClick={() => setActiveTab('AccountSettings')}
        >
          <img src={shield} className="mx-2" alt="Account Settings" /> Account Settings
        </ListGroup.Item>
        <ListGroup.Item
          className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeTab === 'Security' ? 'active' : ''}`}
          action
          onClick={() => setActiveTab('Security')}
        >
          <img src={set} className="mx-2" alt="Security" /> Security
        </ListGroup.Item>
        <ListGroup.Item
          className={`border-0 rounded-5 mt-3 d-flex align-items-center ${activeTab === 'Logout' ? 'active' : ''}`}
          action
          onClick={() => setActiveTab('Logout')}
        >
          <img src={log} className="mx-2" alt="Logout" /> Logout
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
