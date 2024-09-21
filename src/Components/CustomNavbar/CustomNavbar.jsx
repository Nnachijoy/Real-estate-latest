import { Navbar, Row, Col, Button } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';
import set from "../../assets/set.png";
import shield from "../../assets/shield.png";
import pf from "../../assets/pf.png";
import list from "../../assets/list.png";
import graph from "../../assets/graph.png";
import fav from "../../assets/fav.png";
import { LuLayoutDashboard } from "react-icons/lu";

function CustomNavbar() {
  const location = useLocation();
  const dashboardRef = useRef(null);
  const activitiesRef = useRef(null);
  const listingsRef = useRef(null);
  const favoritesRef = useRef(null);
  const profileRef = useRef(null);
  const settingsRef = useRef(null);
  const securityRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // Scroll the active button into view when the component mounts or the path changes
  useEffect(() => {
    const scrollActiveButton = () => {
      const activeButton = [
        dashboardRef,
        activitiesRef,
        listingsRef,
        favoritesRef,
        profileRef,
        settingsRef,
        securityRef
      ].find((ref) => ref.current && ref.current.classList.contains('active-link'));
      
      if (activeButton && activeButton.current) {
        activeButton.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    };

    scrollActiveButton();
  }, [location]);

  return (
    <div className="custom-navbar-container">
      <Navbar className="custom-navbar" expand="lg">
        <Row className="navbar-row mx-auto">
          <Col className="nav-col">
            <Button
              ref={dashboardRef}
              as={Link}
              to="/"
              className={isActive('/') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <LuLayoutDashboard className="icon mx-2" style={{ fontSize: "25px" }} />
                <span style={{ fontSize: "12px" }}>Dashboard</span>
              </div>
            </Button>
          </Col>

          <Col className="nav-col">
            <Button
              ref={activitiesRef}
              as={Link}
              to="/activities"
              className={isActive('/activities') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={graph} alt="Activity" className="icon" />
                <span style={{ fontSize: "12px" }}>Activity</span>
              </div>
            </Button>
          </Col>

          <Col className="nav-col">
            <Button
              ref={listingsRef}
              as={Link}
              to="/my-listing"
              className={isActive('/my-listing') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={list} className="icon" />
                <span style={{ fontSize: "12px" }}>My Listings</span>
              </div>
            </Button>
          </Col>

          <Col className="nav-col">
            <Button
              ref={favoritesRef}
              as={Link}
              to="/favorites"
              className={isActive('/favorites') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={fav} alt="Favourites" className="icon" />
                <span style={{ fontSize: "12px" }}>Favourites</span>
              </div>
            </Button>
          </Col>

          <Col className="nav-col">
            <Button
              ref={profileRef}
              as={Link}
              to="/saved-profile"
              className={isActive('/saved-profile') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={pf} alt="Saved Profile" className="icon" />
                <span style={{ fontSize: "12px" }}>Saved Profile</span>
              </div>
            </Button>
          </Col>

          <Col className="nav-col">
            <Button
              ref={settingsRef}
              as={Link}
              to="/account-settings"
              className={isActive('/account-settings') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
            >
              <div className="icon-text">
                <img src={shield} alt="Account Settings" className="icon" />
                <span style={{ fontSize: "12px" }}>Account Settings</span>
              </div>
            </Button>
          </Col>
          <Col className="nav-col">
            <Button
              ref={securityRef}
              as={Link}
               to="/security"
               className={isActive('/security') ? 'active-link btn btn-primary' : 'inactive-link btn btn-light'}
               >
              <div className="icon-text">
                <img src={set} alt="Security" className="icon" />
                <span style={{ fontSize: "12px" }}>Security</span>
              </div>
            </Button>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
