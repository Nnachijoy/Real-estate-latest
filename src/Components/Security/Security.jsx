

import React from 'react';
import { Container, Row, Col, FormControl, Image, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import bell from "../../assets/bell.png";
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import 'animate.css/animate.min.css';
import Head from '../Head'; 
import CustomNavbar from '../CustomNavbar/CustomNavbar';

const Security = () => {
  return (
    <div className="container" style={{ marginTop: "-1px", marginBottom: "180px", position: "relative" }}>
      {/* Mobile Navbar with Profile Image and Bell Icon */}
      <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
        <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
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
          <Head bellIcon={bell} profileImage={profile} />
        </Container>
      </div>

      <Container>
        <Row>
          <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
            <motion.div
              className="m-2"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className='my-listing'>Sign in & Security</h3>
            </motion.div>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column align-items-end mt-4">
            <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
              <FormControl type="text" placeholder="Search" className="search-input" />
              <Image src={searchlight} className="ml-2" />
            </Form>
          </Col>
        </Row>
      </Container>

      <CustomNavbar />

      {/* Form Elements */}
      <Form className='mt-5'>
        {/* Email Verification for Mobile */}
        <motion.div
          className="d-block d-sm-none"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Form.Group className="mb-3 position-relative custom-form-group" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="verify your email address linked to your account"
              className="custom-inputs"
              style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
            />
            <div className="position-absolute d-flex flex-column flex-md-row align-items-start align-items-md-center custom-content" style={{ top: '40%', transform: 'translateY(-50%)', right: '10px' }}>
              <div>
                <div className="me-md-5 mt-4 na" style={{ fontSize: '0.875rem' }}>igorfriday@gmail.org</div>
              </div>
              <div className="d-flex">
                <div className="me-md-5 text-danger" style={{ fontSize: '0.875rem' }}>unverified</div>
                 <h1 className="edit mx-2 mb-4 mt-md-0 verify" style={{ fontSize: '1rem' }}>verify</h1>
              </div>
            </div>
            <Form.Label className="custom-placeholder-labels mt-2">Verify Email</Form.Label>
          </Form.Group>
        </motion.div>

        {/* Email Verification for Desktop */}
        <motion.div
          className="d-none d-sm-block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Form.Group className="mb-3 position-relative custom-form-group" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="verify your email address linked to your account"
              className="custom-inputs"
              style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
            />
            <div className="position-absolute d-flex flex-column flex-md-row align-items-start align-items-md-center custom-content" style={{ top: '40%', transform: 'translateY(-50%)', right: '10px' }}>
              <div>
                <div className="me-md-5 mt-4 na">igorfriday@gmail.org</div>
                <div className="me-md-5 text-danger">unverified</div>
              </div>
              <h1 className="edit mt-2 mt-md-0 mb-1">verify</h1>
            </div>
            <Form.Label className="custom-placeholder-labels mt-2">Verify Email</Form.Label>
          </Form.Group>
        </motion.div>

        {/* Password Setup */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput2">
            <Form.Control
              type="password"
              placeholder="set a unique password to protect your account"
              className="custom-inputs"
              style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
            />
            <div className="position-absolute d-flex align-items-center custom-password" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
              <div className="me-2 na"></div>
              <h1 className='edit mt-2' style={{ fontSize: '1rem' }}>create password</h1>
            </div>
            <Form.Label className="custom-placeholder-labels">Password</Form.Label>
          </Form.Group>
        </motion.div>

        {/* Google Account Link */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput3">
            <Form.Control
              type="text"
              placeholder="make your account extra secure"
              className="custom-inputs"
              style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
            />
            <div className="position-absolute d-flex align-items-center custom-verification" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
              <div className="me-2 na"></div>
              <h1 className='edit mt-2' style={{ fontSize: '1rem' }}>enable</h1>
            </div>
            <Form.Label className="custom-placeholder-labels">2-step verification</Form.Label>
          </Form.Group>
        </motion.div>

        {/* Account Alerts */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput4">
            <Form.Control
              type="number"
              placeholder="Link your google account to REALHOMES"
              className="custom-inputs"
              style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
            />
            <div className="position-absolute d-flex align-items-center custom-google" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
              <div className="me-2 na"></div>
              <h1 className='edit mt-2' style={{ fontSize: '1rem' }}>Deactivate account</h1>
            </div>
            <Form.Label className="custom-placeholder-labels">Google Account</Form.Label>
          </Form.Group>
        </motion.div>

        {/* Account Alerts */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput5">
            <Form.Control
              type="text"
              placeholder="set account alerts"
              className="custom-inputs"
              style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} 
            />
            <div className="position-absolute d-flex align-items-center custom-alerts" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
              <div className="me-2 na"></div>
              <h1 className='edit mt-2' style={{ fontSize: '1rem' }}>Go to privacy portal</h1>
            </div>
            <Form.Label className="custom-placeholder-labels">Account Alerts</Form.Label>
          </Form.Group>
        </motion.div>
      </Form>
    </div>
  );
};

export default Security;
