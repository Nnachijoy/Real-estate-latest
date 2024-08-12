import React from 'react';
import { Container, Table, Row, Col, Card, Form, FormControl, Navbar, Image, Button } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import bell from '../../assets/bell.png';
import searchlight from '../../assets/searchlight.png';
import Calendar from './Calendar';
import { FaRegistered } from 'react-icons/fa';
import freshtop from "../../assets/freshtop.png"
import x from "../../assets/x.png"
import './Activities.css'; 
import { MdMargin } from 'react-icons/md';
import Animation from '../Animation';
import InspectionTable from './InspectionTable';
import RecentInspectionTable from './RecentInspectionTable';
import Head from '../Head'; 



const inspectionSummary = [
  { title: "Successful Inspection", count: 321, image: freshtop },
  { title: "Unsuccessful Inspection", count: 0, image: x },
  // Add more objects here if needed
];

export const Dashb = () => {
  return (
    <div>


      <div className="container d-none d-md-block">
      <Head 
        bellIcon={bell} 
        profileImage={profile} 
      />
      </div>

<Container className="mt-4">
  <Row>
    <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
      <div className="">
      <Row>
                  <Col>
                    <h1 style={{width:"0px", fontSize:"400%", height:"0px"}}>01</h1> 
                  </Col>
                  <Col className="mt-3">
                    <p className="">JANUARY <span className="me-4">2021</span></p>
                    
                  </Col>
                </Row>
      </div>
    </Col>
    <Col xs={12} md={6} className="d-flex flex-column align-items-end mt-4">
    <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
                    <FormControl type="text" placeholder="Search" className="search-input" />
                    <Image src={searchlight} className="ml-2" />
                </Form>
    </Col>
  </Row>
</Container>


   <Container className="my-4">
   <Animation animationClass="animate__slideInRight" delay={100}>
      <Row>
        <Col xs={12} lg={8}>
          <Row>
      {inspectionSummary.map((item, index) => (
        <Col xs={12} sm={6} md={6} className="mb-4" key={index}>
          <Card>
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col xs="auto">
                    <Image src={item.image} style={{ width: "100px", height: "100px" }} />
                  </Col>
                  <Col className="mt-4">
                    <p style={{ fontFamily: "SF Pro Display", fontWeight: "700" }}>{item.title}</p>
                    <p style={{ fontWeight: "400", fontSize: "28px" }}>{item.count}</p>
                  </Col>
                </Row>
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
          <InspectionTable />
        </Col>

        <Col xs={12} lg={4} className="">
          <Calendar/>
        </Col>
      </Row>
      </Animation>
    </Container>


    
    
  <Container className="mt-3" style={{marginBottom:"180px"}}>
      <RecentInspectionTable />
    </Container>


    </div>
  );
}

export default Dashb;

