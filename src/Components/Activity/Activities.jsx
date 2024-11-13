import React from 'react';
// Importing necessary components from react-bootstrap for layout and styling
import { Container, Row, Col, Card, Form, FormControl, Image } from 'react-bootstrap';
// Importing static assets for profile, bell icon, searchlight, etc.
import profile from '../../assets/profile.png';
import bell from '../../assets/bell.png';
import searchlight from '../../assets/searchlight.png';
// Importing child components and custom styles
import Calendar from './Calendar';
import freshtop from "../../assets/freshtop.png";
import x from "../../assets/x.png";
import './Activities.css'; 
import Animation from '../Animation';
import InspectionTable from './InspectionTable';
import RecentInspectionTable from './RecentInspectionTable';
import Head from '../Head'; 
import CustomNavbar from '../CustomNavbar/CustomNavbar';

// Static data representing inspection summary
const inspectionSummary = [
  { title: "Successful Inspection", count: 321, image: freshtop },
  { title: "Unsuccessful Inspection", count: 0, image: x },
];

export const Dashb = () => {
  return (
    <div className="container">

      {/* Mobile Navbar with Profile Image and Bell Icon */}
      <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
        <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
          {/* RealHomes brand title */}
          <h3 className="flex-grow-1 mt-1" style={{marginLeft:"60px", color:"#FF7B29", fontFamily:"Syne", fontWeight:"700", fontSize:"22px"}}>RealHomes</h3>
          {/* Bell Icon */}
          <Image src={bell} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
          {/* Profile Image */}
          <Image src={profile} roundedCircle style={{ width: "40px", height: "40px", marginRight: "35px" }} />
        </Container>
      </div>

      {/* Desktop Navbar with Head Component */}
      <div className="container d-none d-md-block">
        <Container className="p-3" style={{ position: 'relative', marginLeft:"-30px" }}>
          <Head bellIcon={bell} profileImage={profile} /> {/* Head component for the desktop view */}
        </Container>
      </div>

      {/* Main content container */}
      <Container className="mt-4">
        <Row>
          {/* Left section with the inspection count and date */}
          <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
            <div className="">
              <Row>
                <Col>
                  {/* Inspection count display */}
                  <h1 style={{color:"#16314E", width:"0px", fontSize:"400%", height:"0px"}}>01</h1> 
                </Col>
                {/* Displaying the date for mobile view */}
                <Col className="mt-3 ms-4 d-block d-md-none"> 
                  <p className="" style={{color:"#324A63", fontSize:"13.87"}}>JANUARY <span className="me-4" style={{color:"#324A63", fontSize:"13.87"}}>2021</span></p>
                </Col>
                {/* Displaying the date for desktop view */}
                <Col className="mt-3 d-none d-md-block"> 
                  <p className="" style={{color:"#324A63", fontSize:"13.87"}}>JANUARY <span className="me-4" style={{color:"#324A63", fontSize:"13.87"}}>2021</span></p>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Right section with search bar */}
          <Col xs={12} md={6} className="d-flex flex-column align-items-end mt-4">
            <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
              {/* Search input field */}
              <FormControl type="text" placeholder="Search" className="search-input" />
              {/* Search icon */}
              <Image src={searchlight} className="ml-2" />
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Custom Navbar for mobile and desktop */}
      <CustomNavbar />

      {/* Animation and content layout for the inspection summary */}
      <Container className="my-4">
        <Animation animationClass="animate__slideInRight" delay={100}>
          <Row>
            <Col xs={12} lg={8}>
              <Row>
                {/* Loop through inspection summary data to display successful and unsuccessful inspections */}
                {inspectionSummary.map((item, index) => (
                  <Col xs={12} sm={6} md={6} className="mb-4" key={index}>
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <Row>
                            <Col xs="auto">
                              {/* Image for each inspection type */}
                              <Image src={item.image} style={{ width: "100px", height: "100px" }} />
                            </Col>
                            <Col className="mt-4">
                              {/* Title and count for each inspection type */}
                              <p style={{ fontFamily: "SF Pro Display", fontWeight: "700" }}>{item.title}</p>
                              <p style={{ fontWeight: "400", fontSize: "28px" }}>{item.count}</p>
                            </Col>
                          </Row>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              {/* Inspection table component */}
              <InspectionTable />
            </Col>

            {/* Right column displaying the calendar */}
            <Col xs={12} lg={4} className="">
              <Calendar />
            </Col>
          </Row>
        </Animation>
      </Container>

      {/* Recent inspection table at the bottom */}
      <Container className="mt-3" style={{marginBottom:"180px"}}>
        <RecentInspectionTable />
      </Container>
    </div>
  );
}

export default Dashb;
