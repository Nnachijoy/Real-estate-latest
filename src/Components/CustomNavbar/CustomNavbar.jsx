import { Navbar, Row, Col, Button } from 'react-bootstrap'; // Importing components from react-bootstrap for layout and styling
import { useLocation, Link } from 'react-router-dom'; // useLocation to access current path, Link for navigation
import { useEffect, useRef } from 'react'; // useRef to store references for buttons, useEffect for side-effects
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS for default styling
import './CustomNavbar.css'; // Custom CSS file for additional navbar styling
import set from "../../assets/set.png"; // Importing image assets for navbar icons
import shield from "../../assets/shield.png";
import pf from "../../assets/pf.png";
import list from "../../assets/list.png";
import graph from "../../assets/graph.png";
import fav from "../../assets/fav.png";
import { LuLayoutDashboard } from "react-icons/lu"; // Importing icon for dashboard from react-icons

function CustomNavbar() {
  // Hook to access current location/path
  const location = useLocation();
  
  // Creating references for each navigation button for later use (scrolling into view)
  const dashboardRef = useRef(null);
  const activitiesRef = useRef(null);
  const listingsRef = useRef(null);
  const favoritesRef = useRef(null);
  const profileRef = useRef(null);
  const settingsRef = useRef(null);
  const securityRef = useRef(null);

  // Function to determine if the current path is the one passed as an argument
  const isActive = (path) => location.pathname === path;

  // useEffect hook to scroll the active link into view when the component mounts or the location changes
  useEffect(() => {
    const scrollActiveButton = () => {
      // Find the button that has the 'active-link' class and scroll it into view
      const activeButton = [
        dashboardRef,
        activitiesRef,
        listingsRef,
        favoritesRef,
        profileRef,
        settingsRef,
        securityRef
      ].find((ref) => ref.current && ref.current.classList.contains('active-link'));
      
      // If an active button is found, scroll it smoothly into view
      if (activeButton && activeButton.current) {
        activeButton.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    };

    scrollActiveButton(); // Calling the function to apply the scroll effect

  }, [location]); // Triggered whenever the location (path) changes

  return (
    <div className="custom-navbar-container">
      <Navbar className="custom-navbar" expand="lg"> {/* Custom navbar with responsive design */}
        <Row className="navbar-row mx-auto"> {/* Row to align navbar items */}
          {/* Each navigation button is wrapped in a column for flexible layout */}
          
          {/* Dashboard Button */}
          <Col className="nav-col">
            <Button
              ref={dashboardRef} // Setting the ref to this button
              as={Link} // Using Link component from react-router-dom for navigation
              to="/" // Link to the home page (Dashboard)
              className={isActive('/') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'} // Dynamically add active or inactive class
            >
              <div className="icon-text"> {/* Div to wrap the icon and text */}
                <LuLayoutDashboard className="icon mx-2" style={{ fontSize: "25px" }} /> {/* Dashboard icon */}
                <span style={{ fontSize: "12px" }}>Dashboard</span> {/* Text for the button */}
              </div>
            </Button>
          </Col>

          {/* Activity Button */}
          <Col className="nav-col">
            <Button
              ref={activitiesRef}
              as={Link}
              to="/activities"
              className={isActive('/activities') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={graph} alt="Activity" className="icon" /> {/* Activity icon */}
                <span style={{ fontSize: "12px" }}>Activity</span>
              </div>
            </Button>
          </Col>

          {/* My Listings Button */}
          <Col className="nav-col">
            <Button
              ref={listingsRef}
              as={Link}
              to="/my-listing"
              className={isActive('/my-listing') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={list} className="icon" /> {/* My Listings icon */}
                <span style={{ fontSize: "12px" }}>My Listings</span>
              </div>
            </Button>
          </Col>

          {/* Favourites Button */}
          <Col className="nav-col">
            <Button
              ref={favoritesRef}
              as={Link}
              to="/favorites"
              className={isActive('/favorites') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={fav} alt="Favourites" className="icon" /> {/* Favourites icon */}
                <span style={{ fontSize: "12px" }}>Favourites</span>
              </div>
            </Button>
          </Col>

          {/* Saved Profile Button */}
          <Col className="nav-col">
            <Button
              ref={profileRef}
              as={Link}
              to="/saved-profile"
              className={isActive('/saved-profile') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={pf} alt="Saved Profile" className="icon" /> {/* Saved Profile icon */}
                <span style={{ fontSize: "12px" }}>Saved Profile</span>
              </div>
            </Button>
          </Col>

          {/* Account Settings Button */}
          <Col className="nav-col">
            <Button
              ref={settingsRef}
              as={Link}
              to="/account-settings"
              className={isActive('/account-settings') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={shield} alt="Account Settings" className="icon" /> {/* Account Settings icon */}
                <span style={{ fontSize: "12px" }}>Account Settings</span>
              </div>
            </Button>
          </Col>

          {/* Security Button */}
          <Col className="nav-col">
            <Button
              ref={securityRef}
              as={Link}
              to="/security"
              className={isActive('/security') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={set} alt="Security" className="icon" /> {/* Security icon */}
                <span style={{ fontSize: "12px" }}>Security</span>
              </div>
            </Button>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}

export default CustomNavbar; // Export the CustomNavbar component for use in other parts of the app
