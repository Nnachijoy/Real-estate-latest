// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Head from './Components/Head'; 
// import Sidebar from './Components/Sidebar/Sidebar';
// import Dashb from './Components/Dash/Dashb';
// import Activities from './Components/Activity/Activities';
// import Security from "./Components/Security/Security";
// import MyListing from './Components/MyListing/MyListing';
// import AccountSettings from './Components/AccountingSettings/AccountingSettings';
// import Favorites from './Components/Favorites/Favorites';
// import SavedProfile from './Components/SavedProfile/SavedProfile';
// import Logout from './Components/Logout/Logout';
// import Loader from './Components/Loader/Loader';
// import './App.css'; 
// import ham from "./assets/ham.png";
// import bellIcon from './assets/bell.png'; 
// import profileImage from './assets/profile.png';

// const App = () => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Home':
//         return <Dashb />;
//       case 'Profile':
//         return <Activities />;
//       case 'Settings':
//         return <MyListing />;
//       case 'Messages':
//         return <Favorites />;
//       case 'SavedProfile':
//         return <SavedProfile />;
//       case 'AccountSettings':
//         return <AccountSettings />;
//       case 'Security':
//         return <Security />;
//       case 'Logout':
//         return <Logout />;
//       default:
//         return <Dashb />;
//     }
//   };

//   const handleTabChange = (tab) => {
//     setLoading(true); // Show loader
//     setTimeout(() => {
//       setActiveTab(tab);
//       setLoading(false); // Hide loader after some delay
//       setSidebarVisible(false); 
//     }, 1000); // Simulate network delay
//   };

//   return (
//     <Container fluid className="app-container">
      
//       <Button 
//         className="toggle-sidebar-button d-md-none border-0 bg-white" 
//         style={{ background: "darkorange" }} 
//         onClick={() => setSidebarVisible(!isSidebarVisible)}
//       >
//         {isSidebarVisible ? 'X' : <img src={ham} alt="menu" /> }
//       </Button>
//       <Row>
//         <Col md={2} className={`sidebar-column ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
//           <Sidebar 
//             activeTab={activeTab} 
//             setActiveTab={handleTabChange} // Updated function to handle tab change
//             setSidebarVisible={setSidebarVisible} 
//           />
//         </Col>
//         <Col md={10} className="bg-light content-area">
//           {loading ? <Loader /> : renderContent()}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Dashb from './Components/Dash/Dashb';
// import Activities from './Components/Activity/Activities';
// import Security from "./Components/Security/Security";
// import MyListing from './Components/MyListing/MyListing';
// import AccountSettings from './Components/AccountingSettings/AccountingSettings';
// import Favorites from './Components/Favorites/Favorites';
// import SavedProfile from './Components/SavedProfile/SavedProfile';
// import Logout from './Components/Logout/Logout';
// import Login from './Components/Login/Login';
// import Loader from './Components/Loader/Loader';
// import './App.css'; 
// import ham from "./assets/ham.png";

// const App = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSidebarToggle = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const handleItemClick = () => {
//     setSidebarVisible(false); // Close the sidebar when an item is clicked
//   };

//   const renderLoader = () => {
//     if (loading) {
//       return <Loader />;
//     }
//     return null;
//   };

//   return (
//     <>
//       <Container fluid className="app-container">
//         <Button 
//           className="toggle-sidebar-button d-md-none border-0 bg-white" 
//           style={{ background: "darkorange" }} 
//           onClick={handleSidebarToggle}
//         >
//           {isSidebarVisible ? 'X' : <img src={ham} alt="menu" />}
//         </Button>
//         <Row>
//           <Col md={2} className={`sidebar-column ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
//             <Sidebar setSidebarVisible={setSidebarVisible} handleItemClick={handleItemClick} />
//           </Col>
//           <Col md={10} className="bg-light content-area">
//             {renderLoader()}
//             <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/dashboard" element={<Dashb />} />
//               <Route path="/activities" element={<Activities />} />
//               <Route path="/my-listing" element={<MyListing />} />
//               <Route path="/favorites" element={<Favorites />} />
//               <Route path="/saved-profile" element={<SavedProfile />} />
//               <Route path="/account-settings" element={<AccountSettings />} />
//               <Route path="/security" element={<Security />} />
//               <Route path="/logout" element={<Logout />} />
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Dashb from './Components/Dash/Dashb';
// import Activities from './Components/Activity/Activities';
// import Security from "./Components/Security/Security";
// import MyListing from './Components/MyListing/MyListing';
// import AccountSettings from './Components/AccountingSettings/AccountingSettings';
// import Favorites from './Components/Favorites/Favorites';
// import SavedProfile from './Components/SavedProfile/SavedProfile';
// import Logout from './Components/Logout/Logout';
// import Login from './Components/Login/Login';
// import Loader from './Components/Loader/Loader';
// import './App.css'; 
// import ham from "./assets/ham.png";

// const App = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

//   const handleSidebarToggle = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const handleItemClick = () => {
//     setSidebarVisible(false); // Close the sidebar when an item is clicked
//   };

//   const renderLoader = () => {
//     if (loading) {
//       return <Loader />;
//     }
//     return null;
//   };

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true); // Set authenticated state to true after login
//   };

//   return (
//     <>
//       <Container fluid className="app-container">
//         <Button 
//           className="toggle-sidebar-button d-md-none border-0 bg-white" 
//           style={{ background: "darkorange" }} 
//           onClick={handleSidebarToggle}
//         >
//           {isSidebarVisible ? 'X' : <img src={ham} alt="menu" />}
//         </Button>
//         <Row>
//           {isAuthenticated && (
//             <Col md={2} className={`sidebar-column ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
//               <Sidebar setSidebarVisible={setSidebarVisible} handleItemClick={handleItemClick} />
//             </Col>
//           )}
//           <Col md={isAuthenticated ? 10 : 12} className="bg-light content-area">
//             {renderLoader()}
//             <Routes>
//               {!isAuthenticated ? (
//                 <Route path="*" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//               ) : (
//                 <>
//                   <Route path="/dashboard" element={<Dashb />} />
//                   <Route path="/activities" element={<Activities />} />
//                   <Route path="/my-listing" element={<MyListing />} />
//                   <Route path="/favorites" element={<Favorites />} />
//                   <Route path="/saved-profile" element={<SavedProfile />} />
//                   <Route path="/account-settings" element={<AccountSettings />} />
//                   <Route path="/security" element={<Security />} />
//                   <Route path="/logout" element={<Logout />} />
//                   <Route path="*" element={<Navigate to="/dashboard" />} />
//                 </>
//               )}
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Dashb from './Components/Dash/Dashb';
// import Activities from './Components/Activity/Activities';
// import Security from "./Components/Security/Security";
// import MyListing from './Components/MyListing/MyListing';
// import AccountSettings from './Components/AccountingSettings/AccountingSettings';
// import Favorites from './Components/Favorites/Favorites';
// import SavedProfile from './Components/SavedProfile/SavedProfile';
// import Logout from './Components/Logout/Logout';
// import Login from './Components/Login/Login';
// import Loader from './Components/Loader/Loader';
// import './App.css'; 
// import ham from "./assets/ham.png";

// const App = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

//   useEffect(() => {
//     // Check localStorage to see if the user is already authenticated
//     const storedAuthStatus = localStorage.getItem('isAuthenticated');
//     if (storedAuthStatus === 'true') {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleSidebarToggle = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const handleItemClick = () => {
//     setSidebarVisible(false); // Close the sidebar when an item is clicked
//   };

//   const renderLoader = () => {
//     if (loading) {
//       return <Loader />;
//     }
//     return null;
//   };

//   const handleLoginSuccess = () => {
//     localStorage.setItem('isAuthenticated', 'true'); // Store authentication status
//     setIsAuthenticated(true); // Set authenticated state to true after login
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated'); // Clear authentication status on logout
//     setIsAuthenticated(false); // Update state
//   };

//   return (
//     <>
//       <Container fluid className="app-container">
//         <Button 
//           className="toggle-sidebar-button d-md-none border-0 bg-white" 
//           style={{ background: "darkorange" }} 
//           onClick={handleSidebarToggle}
//         >
//           {isSidebarVisible ? 'X' : <img src={ham} alt="menu" />}
//         </Button>
//         <Row>
//           {isAuthenticated && (
//             <Col md={2} className={`sidebar-column ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
//               <Sidebar setSidebarVisible={setSidebarVisible} handleItemClick={handleItemClick} />
//             </Col>
//           )}
//           <Col md={isAuthenticated ? 10 : 12} className="bg-light content-area">
//             {renderLoader()}
//             <Routes>
//               {!isAuthenticated ? (
//                 <Route path="*" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//               ) : (
//                 <>
//                   <Route path="/dashboard" element={<Dashb />} />
//                   <Route path="/activities" element={<Activities />} />
//                   <Route path="/my-listing" element={<MyListing />} />
//                   <Route path="/favorites" element={<Favorites />} />
//                   <Route path="/saved-profile" element={<SavedProfile />} />
//                   <Route path="/account-settings" element={<AccountSettings />} />
//                   <Route path="/security" element={<Security />} />
//                   <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
//                   <Route path="*" element={<Navigate to="/dashboard" />} />
//                 </>
//               )}
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Dashb from './Components/Dash/Dashb';
// import Activities from './Components/Activity/Activities';
// import Security from "./Components/Security/Security";
// import MyListing from './Components/MyListing/MyListing';
// import AccountSettings from './Components/AccountingSettings/AccountingSettings';
// import Favorites from './Components/Favorites/Favorites';
// import SavedProfile from './Components/SavedProfile/SavedProfile';
// import Logout from './Components/Logout/Logout';
// import Login from './Components/Login/Login';
// import Loader from './Components/Loader/Loader';
// import './App.css'; 
// import ham from "./assets/ham.png";

// const App = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

//   useEffect(() => {
//     // Check localStorage to see if the user is already authenticated
//     const storedAuthStatus = localStorage.getItem('isAuthenticated');
//     if (storedAuthStatus === 'true') {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleSidebarToggle = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const handleItemClick = () => {
//     setSidebarVisible(false); // Close the sidebar when an item is clicked
//   };

//   const renderLoader = () => {
//     if (loading) {
//       return <Loader />;
//     }
//     return null;
//   };

//   const handleLoginSuccess = () => {
//     localStorage.setItem('isAuthenticated', 'true'); // Store authentication status
//     setIsAuthenticated(true); // Set authenticated state to true after login
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated'); // Clear authentication status on logout
//     setIsAuthenticated(false); // Update state
//   };

//   return (
//     <>
//       <Container fluid className="app-container">
//         <Button 
//           className="toggle-sidebar-button d-md-none border-0 bg-white" 
//           style={{ background: "darkorange" }} 
//           onClick={handleSidebarToggle}
//         >
//           {isSidebarVisible ? 'X' : <img src={ham} alt="menu" />}
//         </Button>
//         <Row className="gx-0"> {/* Added gx-0 class to remove horizontal gutters */}
//           {isAuthenticated && (
//             <Col xs={12} md={2} className={`sidebar-column ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
//               <Sidebar setSidebarVisible={setSidebarVisible} handleItemClick={handleItemClick} />
//             </Col>
//           )}
//           <Col xs={12} md={isAuthenticated ? 10 : 12} className="bg-light content-area">
//             {renderLoader()}
//             <Routes>
//               {!isAuthenticated ? (
//                 <Route path="*" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//               ) : (
//                 <>
//                   <Route path="/dashboard" element={<Dashb />} />
//                   <Route path="/activities" element={<Activities />} />
//                   <Route path="/my-listing" element={<MyListing />} />
//                   <Route path="/favorites" element={<Favorites />} />
//                   <Route path="/saved-profile" element={<SavedProfile />} />
//                   <Route path="/account-settings" element={<AccountSettings />} />
//                   <Route path="/security" element={<Security />} />
//                   <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
//                   <Route path="*" element={<Navigate to="/dashboard" />} />
//                 </>
//               )}
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashb from './Components/Dash/Dashb';
import Activities from './Components/Activity/Activities';
import Security from "./Components/Security/Security";
import MyListing from './Components/MyListing/MyListing';
import AccountSettings from './Components/AccountingSettings/AccountingSettings';
import Favorites from './Components/Favorites/Favorites';
import SavedProfile from './Components/SavedProfile/SavedProfile';
import Logout from './Components/Logout/Logout';
import Login from './Components/Login/Login';
import Loader from './Components/Loader/Loader';
import './App.css'; 
import ham from "./assets/ham.png";

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Show loader for a brief moment when route changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    // Check localStorage for authentication
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleItemClick = (path) => {
    setSidebarVisible(false);
    navigate(path); // Navigate to the clicked page
  };

  const handleLoginSuccess = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <>
      {loading && <Loader />} {/* Display loader when loading */}
      <Container fluid className={`app-container ${loading ? 'loading' : ''}`}>
        <Button 
          className="toggle-sidebar-button d-md-none border-0 bg-white" 
          style={{ background: "darkorange" }} 
          onClick={handleSidebarToggle}
        >
          {isSidebarVisible ? 'X' : <img src={ham} alt="menu" />}
        </Button>
        <Row className="gx-0"> {/* Added gx-0 class to remove horizontal gutters */}
          {isAuthenticated && (
            <Col xs={12} md={2} className={`sidebar-column ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
              <Sidebar setSidebarVisible={setSidebarVisible} handleItemClick={handleItemClick} />
            </Col>
          )}
          <Col xs={12} md={isAuthenticated ? 10 : 12} className="bg-light content-area">
            <Routes>
              {!isAuthenticated ? (
                <Route path="*" element={<Login onLoginSuccess={handleLoginSuccess} />} />
              ) : (
                <>
                  <Route path="/dashboard" element={<Dashb />} />
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/my-listing" element={<MyListing />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/saved-profile" element={<SavedProfile />} />
                  <Route path="/account-settings" element={<AccountSettings />} />
                  <Route path="/security" element={<Security />} />
                  <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
