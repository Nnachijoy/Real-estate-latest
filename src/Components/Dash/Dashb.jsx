

import React from 'react';
import { Container, Table, Row, Col, Card, Form, FormControl, Image, Button } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import coin from "../../assets/coin.png";
import bag from "../../assets/bag.png";
import trade from "../../assets/trade.png";
import user from "../../assets/user.png";
import bell from "../../assets/bell.png";
import LineChart from './LineChart';
import SalesChart from './SalesChart';
import "./dash.css";
import Animation from '../Animation';
import InspectionTable from './InspectionTable';




const cardData = [
  {
    imgSrc: trade,
    amount: '$5k',
    description: 'Total Sales',
    percentage: '+10% from yesterday',
    color: '#FEB95A',
  },
  {
    imgSrc: bag,
    amount: '50',
    description: 'Property Bought',
    percentage: '+8% from yesterday',
    color: '#A9DFD8',
  },
  {
    imgSrc: coin,
    amount: '900',
    description: 'Property Sold',
    percentage: '+2% from yesterday',
    color: '#F2C8ED',
  },
  {
    imgSrc: user,
    amount: '12',
    description: 'New Views',
    percentage: '+3% from yesterday',
    color: '#20AEF3',
  },
];
export const Dashb = () => {

  

  return (
    <div>
      
      <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
  <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
    <h3 className="flex-grow-1 mt-1" style={{marginLeft:"60px", color:"#FF7B29", fontFamily:"Syne", fontWeight:"700", fontSize:"22px"}}>RealHomes</h3>
    <div className="d-flex align-items-center">
      <Image
        src={bell}
        className="mr-2 mx-2 mb-2 bell"
        style={{
          maxWidth: '15px',
          maxHeight: '15px'
        }}
      />
      <Image
        src={profile}
        className="prof"
        style={{
          maxWidth: '35px',
          maxHeight: '35px',
          marginRight:"20px"
        }}
        roundedCircle
      />
    </div>
  </Container>
</div>

      <div className="container d-none d-md-block">
        <Container className="p-3" style={{ position: 'relative', marginLeft:"-30px" }}>
          <div className="d-flex align-items-center position-absolute  profile-container">
            <Image
              src={bell}
              className="mr-2 mx-2 mb-4 bell"
            />
            <Image
              src={profile}
              className="prof"
              style={{
                maxWidth: '65px',
                maxHeight: '65px'
              }}
              roundedCircle
            />
          </div>
        </Container>
      </div>

      <Animation animationClass="animate__slideInLeft" delay={200}>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
            <div className="mt-3">
              <p>Hi, Andrei,</p>
              <h1>Welcome to RealHomes!</h1>
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
      </Animation>

      <Container className="my-4">
        <Row>
          <Col xs={12} lg={8}>
            <h3>Today's Data</h3>
            <Animation animationClass="animate__slideInRight" delay={200}>
            
              <Row>
    {cardData.map((card, index) => (
      <Col xs={12} sm={6} md={3} className="mb-4" key={index}>
        <Card className="border-0 rounded-4">
          <Card.Body className="mt-2">
            <Image src={card.imgSrc} className="w-25" />
            <h4 className="mt-2">{card.amount}</h4>
            <p>{card.description}</p>
            <p className="fs-6" style={{ color: card.color }}>
              {card.percentage}
            </p>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
              </Animation>
            <InspectionTable />
          </Col>
              
          <Col xs={12} lg={4} className="mt-4">
            <Card.Body>
              <LineChart />
            </Card.Body>
          </Col>
        </Row>
      </Container>

      <Animation animationClass="animate__slideInLeft" delay={200}> 
      <Container>
        <SalesChart />
      </Container>
      </Animation>
    </div>
  );
}

export default Dashb;


