import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Head from './Components/Head'; 
import Sidebar from './Components/Sidebar/Sidebar';
import Dashb from './Components/Dash/Dashb';
import Activities from './Components/Activity/Activities';
import Security from "./Components/Security/Security";
import MyListing from './Components/MyListing/MyListing';
import AccountSettings from './Components/AccountingSettings/AccountingSettings';
import Favorites from './Components/Favorites/Favorites';
import SavedProfile from './Components/SavedProfile/SavedProfile';
import Logout from './Components/Logout/Logout';
import Loader from './Components/Loader/Loader';
import './App.css'; 
import ham from "./assets/ham.png";
import bellIcon from './assets/bell.png'; 
import profileImage from './assets/profile.png';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Dashb />;
      case 'Profile':
        return <Activities />;
      case 'Settings':
        return <MyListing />;
      case 'Messages':
        return <Favorites />;
      case 'SavedProfile':
        return <SavedProfile />;
      case 'AccountSettings':
        return <AccountSettings />;
      case 'Security':
        return <Security />;
      case 'Logout':
        return <Logout />;
      default:
        return <Dashb />;
    }
  };

  const handleTabChange = (tab) => {
    setLoading(true); // Show loader
    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false); // Hide loader after some delay
      setSidebarVisible(false); 
    }, 1000); // Simulate network delay
  };

  return (
    <Container fluid className="app-container">
      
      <Button 
        className="toggle-sidebar-button d-md-none border-0 bg-white" 
        style={{ background: "darkorange" }} 
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? 'X' : <img src={ham} alt="menu" /> }
      </Button>
      <Row>
        <Col md={2} className={`sidebar-column ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={handleTabChange} // Updated function to handle tab change
            setSidebarVisible={setSidebarVisible} 
          />
        </Col>
        <Col md={10} className="bg-light content-area">
          {loading ? <Loader /> : renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
