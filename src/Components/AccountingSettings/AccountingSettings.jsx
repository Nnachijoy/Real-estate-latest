import React, { useState } from 'react';
import "./AccountSettings.css"; 
import { ButtonGroup, ToggleButton, Container, Row, Col, Image, FormControl } from 'react-bootstrap';
import settingImage from '../../assets/settingImage.png';
import pencil from '../../assets/pencil.png';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import bell from "../../assets/bell.png";
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import Form from 'react-bootstrap/Form';
import Animation from '../Animation';
import secondcardlisting from '../../assets/secondcardlisting.png';
import Head from '../Head'; 
import CustomNavbar from '../CustomNavbar/CustomNavbar';

const MyListing = () => {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Personal', value: '1' },
    { name: 'Buisness', value: '2' },
    { name: 'Agent', value: '3' },
  ];

  return (
    <div style={{marginTop:"-1px", marginBottom:"180px"}}> 
    <Animation animationClass="animate__slideInRight" delay={200}>
     

       {/* Mobile Navbar with Profile Image and Bell Icon */}
      <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
        <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
          <h3 className="flex-grow-1 mt-1" style={{marginLeft:"70px", color:"#FF7B29", fontFamily:"Syne", fontWeight:"700", fontSize:"22px"}}>RealHomes</h3>
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
    {/* Defines a row to hold the columns */}
    
    {/* First Column: This column takes full width on smaller screens and half width on medium and larger screens */}
    <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
      {/* Column with background color and padding, using Flexbox to justify content between and align items in the center */}
      
      <div className="">
        <div className=''>
          
          {/* ButtonGroup used to group ToggleButton components, providing radio button functionality */}
          <ButtonGroup toggle>
            {/* Map through the 'radios' array to create individual ToggleButton components */}
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}  // Unique key for each ToggleButton
                id={`radio-${idx}`}  // Dynamic ID based on the index for accessibility
                type="radio"  // Define the type as radio button
                style={{
                  borderColor: radioValue === radio.value ? '#FFFFFF' : '#CCCCCC',  // Border color changes based on selected value
                  color: radioValue === radio.value ? 'black' : 'black',  
                  backgroundColor: radioValue === radio.value ? '#FFFFFF' : 'transparent',  // Background color changes when button is selected
                  fontSize:"18px"  // Font size of the radio button label
                }}
                name="radio"  // Defines a common name for the radio buttons (only one can be selected at a time)
                value={radio.value}  // Value assigned to the radio button
                checked={radioValue === radio.value}  // Determine whether this radio button is selected based on the value of 'radioValue'
                onChange={(e) => setRadioValue(e.currentTarget.value)}  // Event handler to update the state when the radio button is selected
              >
                {radio.name}  {/* Display the radio button label */}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      </div>
    </Col>

    {/* Second Column: This column takes full width on smaller screens and half width on medium and larger screens */}
    <Col xs={12} md={6} className="d-flex flex-column align-items-end">
      {/* Column aligned to the right with Flexbox, using column direction */}

      <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
        {/* Inline form for the search bar, with mobile-specific styles */}
        
        <FormControl type="text" placeholder="Search" className="search-input" />
        {/* Text input for search functionality with custom styling */}

        <Image src={searchlight} className="ml-2" />
        {/* Image icon next to the search input (likely a search icon) */}
      </Form>
    </Col>
  </Row>
</Container>


            <CustomNavbar />

    <div className="mt-5">
      <div className="">

        <Container className="mt-3">
          <Row>
            <Col md={12}>
              {radioValue === '1' && 

              // personal info tab
               <div>
                  <div className='mt-3'>
            <h4 className='my-listing'> Personal Info</h4>
            <div className='image-container-setting'>
        <img src={settingImage} alt="image" className="rounded-circle" />
        <img src={pencil} alt="image" className="pencil" />
        </div>
        </div>
          
<Form className='mt-4'> 
  {/* First input group for Name */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name" // Input type is set as 'name'
      placeholder="Your first and last given name"
      className="custom-inputs"   
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }} // Custom style to remove outline, shadow, and border color
    />
    {/* Positioned 'N/A' and 'Edit' button */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1> {/* 'Edit' button to edit the field */}
    </div>
    <Form.Label className="custom-placeholder-labels">Name</Form.Label> {/* Label for Name */}
  </Form.Group>

  {/* Second input group for ID */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="add your id"
      className="custom-inputs"   
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
    {/* Positioned 'N/A' and 'Edit' button */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">ID Name</Form.Label>
  </Form.Group>

  {/* Third input group for Email */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="add an email address for easy accessibility"
      className="custom-inputs"   
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
    {/* Positioned 'N/A' and 'Edit' button */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Email Address</Form.Label>
  </Form.Group>

  {/* Fourth input group for Phone Number */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number" // Input type is set as 'number'
      placeholder="add a phone number for easy accessibility"
      className="custom-inputs"   
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
    {/* Positioned 'N/A' and 'Edit' button */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Phone no</Form.Label>
  </Form.Group>

  {/* Fifth input group for State */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="Add your state"
      className="custom-inputs"   
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
    {/* Positioned 'N/A' and 'Edit' button */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">State</Form.Label>
  </Form.Group>

  {/* Sixth input group for City */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="Add your city"
      className="custom-inputs"   
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
    {/* Positioned 'N/A' and 'Edit' button */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">City</Form.Label>
  </Form.Group>

  {/* Seventh input group for Services */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="kind of services you offer"
      className="custom-inputs"   
      style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
    {/* Positioned 'N/A' and 'Edit' button */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Your Services</Form.Label>
  </Form.Group>

  {/* Empty Row component for layout structure */}
  <Row>
  </Row>
</Form>

               </div>
              }

               {/* Buisness info tab */}
              {radioValue === '2' &&              
              <div>
<div className='mt-3'>
            <h4 className='my-listing'>Buisness</h4>
            <div className='image-container-setting'>
        <img src={settingImage} alt="image" className="rounded-circle" />
        <img src={pencil} alt="image" className="pencil" />
        </div>
        </div>

        <Form className='mt-4'>
  {/* Form Group for Company Name */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="add your company name"  // Placeholder text to guide the user
      className="custom-inputs"
    />
    {/* Absolute positioned 'Edit' button with N/A label */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>  {/* N/A text */}
      <h1 className='edit mt-2'>Edit</h1>  {/* 'Edit' button to be styled accordingly */}
    </div>
    {/* Label for the input field */}
    <Form.Label className="custom-placeholder-labels">Name of company</Form.Label>
  </Form.Group>

  {/* Form Group for Company Description */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="tell us about your company"  // Placeholder text for description
      className="custom-inputs"
    />
    {/* Edit functionality */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">About company</Form.Label>
  </Form.Group>

  {/* Form Group for Email Address */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="add an email address for easy accessibility"  // Email input with placeholder
      className="custom-inputs"
    />
    {/* Edit functionality */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Email Address</Form.Label>
  </Form.Group>

  {/* Form Group for Phone Number */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"  // Input type set to 'number' for phone number
      placeholder="add a phone number for easy accessibility"  // Placeholder for phone number
      className="custom-inputs"
    />
    {/* Edit functionality */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Phone no</Form.Label>
  </Form.Group>

  {/* Form Group for License Number */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"  // License number should also be a number input
      placeholder="add a license number"  // Placeholder for license input
      className="custom-inputs"
    />
    {/* Edit functionality */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">License</Form.Label>
  </Form.Group>

  {/* Form Group for State and City inputs, arranged in columns */}
  <Row>
    <Col>
      {/* Form Group for State */}
      <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="number"  // State input as a number type
          placeholder="add your state"  // Placeholder for state
          className="custom-inputs"
        />
        {/* Edit functionality */}
        <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na">N/A</div>
          <h1 className='edit mt-2'>Edit</h1>
        </div>
        <Form.Label className="custom-placeholder-labels">State</Form.Label>
      </Form.Group>
    </Col>

    <Col>
      {/* Form Group for City */}
      <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="number" 
          placeholder="add your city"  // Placeholder for city
          className="custom-inputs"
        />
        <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na">N/A</div>
          <h1 className='edit mt-2'>Edit</h1>
        </div>
        <Form.Label className="custom-placeholder-labels">City</Form.Label>
      </Form.Group>
    </Col>
  </Row>

  {/* Form Group for Services Provided */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number" 
      placeholder="kind of services you offer"  // Placeholder for services description
      className="custom-inputs"
    />
    {/* Edit functionality */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Your services</Form.Label>
  </Form.Group>

</Form>

              </div>
              }
              {radioValue === '3' && 
              
             
              // agent tab
              <div>
                <div className='mt-3'>
            <h4 className='my-listing'>Agent</h4>
            <div className='image-container-setting'>
        <img src={settingImage} alt="image" className="rounded-circle" />
        <img src={pencil} alt="image" className="pencil" />
        </div>
        </div>
        <Form className='mt-4'>
  {/* Form Group for Company Name */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="add your company name"  // Placeholder text to guide the user
      className="custom-inputs"
    />
    {/* Absolute positioned 'Edit' button with N/A label */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>  {/* N/A text */}
      <h1 className='edit mt-2'>Edit</h1>  {/* 'Edit' button to be styled accordingly */}
    </div>
    {/* Label for the input field */}
    <Form.Label className="custom-placeholder-labels">Name of company</Form.Label>
  </Form.Group>

  {/* Form Group for Company Description */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="tell us about your company"  // Placeholder text for description
      className="custom-inputs"
    />
    {/* Edit functionality */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">About company</Form.Label>
  </Form.Group>

  {/* Form Group for Email Address */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="add an email address for easy accessibility"  // Email input with placeholder
      className="custom-inputs"
    />
    {/* Edit functionality */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Email Address</Form.Label>
  </Form.Group>

  {/* Form Group for Phone Number */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"  // Input type set to 'number' for phone number
      placeholder="add a phone number for easy accessibility"  // Placeholder for phone number
      className="custom-inputs"
    />
    {/* Edit functionality */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Phone no</Form.Label>
  </Form.Group>

  {/* Form Group for License Number */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"  // License number should also be a number input
      placeholder="add a license number"  // Placeholder for license input
      className="custom-inputs"
    />
    {/* Edit functionality */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">License</Form.Label>
  </Form.Group>

  {/* Form Group for State and City inputs, arranged in columns */}
  <Row>
    <Col>
      {/* Form Group for State */}
      <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="number"  // State input as a number type
          placeholder="add your state"  // Placeholder for state
          className="custom-inputs"
        />
        {/* Edit functionality */}
        <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na">N/A</div>
          <h1 className='edit mt-2'>Edit</h1>
        </div>
        <Form.Label className="custom-placeholder-labels">State</Form.Label>
      </Form.Group>
    </Col>

    <Col>
      {/* Form Group for City */}
      <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="number"  
          placeholder="add your city"  // Placeholder for city
          className="custom-inputs"
        />
        {/* Edit functionality */}
        <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
          <div className="me-2 na">N/A</div>
          <h1 className='edit mt-2'>Edit</h1>
        </div>
        <Form.Label className="custom-placeholder-labels">City</Form.Label>
      </Form.Group>
    </Col>
  </Row>

  {/* Form Group for Services Provided */}
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number" 
      placeholder="kind of services you offer"  // Placeholder for services description
      className="custom-inputs"
    />
    {/* Edit functionality */}
    <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Your services</Form.Label>
  </Form.Group>

</Form>

            </div>
              }
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </Animation>
    </div>
  );
};

export default MyListing;




