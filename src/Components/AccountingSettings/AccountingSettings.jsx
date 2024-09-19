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
     {/* <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
  <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
    <h3 className="flex-grow-1 mt-1" style={{marginLeft:"60px", color:"#FF7B29", fontFamily:"Syne", fontWeight:"700", fontSize:"22px"}}>RealHomes</h3>
   
  </Container>
</div>

      <div className="container d-none d-md-block">
        <Container className="p-3" style={{ position: 'relative', marginLeft:"-30px" }}>
        <div className="container d-none d-md-block">
      <Head 
        bellIcon={bell} 
        profileImage={profile} 
      />
      </div>
        </Container>
      </div> */}

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
            <div className="">
            <div className=''>
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                style={{
                  borderColor: radioValue === radio.value ? '#FFFFFF' : '#CCCCCC',
                  color: radioValue === radio.value ? 'black' : 'black',
                  backgroundColor: radioValue === radio.value ? '#FFFFFF' : 'transparent',
                  fontSize:"18px"
                }}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column align-items-end">
            <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
              <FormControl type="text" placeholder="Search" className="search-input" />
              <Image src={searchlight} className="ml-2" />
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
               <div>
                  <div className='mt-3'>
            <h4 className='my-listing'> Personal Info</h4>
            <div className='image-container-setting'>
        <img src={settingImage} alt="image" className="rounded-circle" />
        <img src={pencil} alt="image" className="pencil" />
        </div>
        </div>
          
<Form className='mt-4'>
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="Your first and last given name"
      className="custom-inputs"   style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Name</Form.Label>
  </Form.Group>

  
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="add your id"
      className="custom-inputs"   style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">ID Name</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="add an email address for easy accessibility"
      className="custom-inputs"   style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Email Address</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"
      placeholder="add a phone number for easy accessibility"
      className="custom-inputs"   style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Phone no</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="Add your state"
      className="custom-inputs"   style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">State</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="Add your city"
      className="custom-inputs"   style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">City</Form.Label>
  </Form.Group>
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="kind of services you offer"
      className="custom-inputs"   style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Your Services</Form.Label>
  </Form.Group>

<Row>
  {/* <Col>
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"
      placeholder="add your state"
      className="custom-inputs"   style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">State</Form.Label>
  </Form.Group>
  </Col> */}


  {/* <Col>
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"
      placeholder="add your city"
      className="custom-inputs"   style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">City</Form.Label>
  </Form.Group>
  </Col> */}
</Row>
{/* 
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"
      placeholder="kind of services you offer"
      className="custom-inputs"
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Your services</Form.Label>
  </Form.Group> */}

</Form>




               </div>
              }

               {/* Buisness */}
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
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="add your company name"
      className="custom-inputs"
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Name of company</Form.Label>
  </Form.Group>

  
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="tell us about your company "
      className="custom-inputs"
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">About company</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="name"
      placeholder="add an email address for easy accessibility"
      className="custom-inputs"
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Email Address</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"
      placeholder="add a phone number for easy accessibility"
      className="custom-inputs"
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Phone no</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"
      placeholder="add a license number"
      className="custom-inputs"
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">Lincense</Form.Label>
  </Form.Group>

<Row>
  <Col>
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"
      placeholder="add your state"
      className="custom-inputs"
    />
       <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
      <div className="me-2 na">N/A</div>
      <h1 className='edit mt-2'>Edit</h1>
    </div>
    <Form.Label className="custom-placeholder-labels">State</Form.Label>
  </Form.Group>
  </Col>


  <Col>
  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"
      placeholder="add your city"
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

  <Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
    <Form.Control
      type="number"
      placeholder="kind of services you offer"
      className="custom-inputs"
    />
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
              
             
              // agent
              <div>
                <div className='mt-3'>
            <h4 className='my-listing'>Agent</h4>
            <div className='image-container-setting'>
        <img src={settingImage} alt="image" className="rounded-circle" />
        <img src={pencil} alt="image" className="pencil" />
        </div>
        </div>
              <Form className='mt-4'>
<Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
  <Form.Control
    type="name"
    placeholder="add your company name"
    className="custom-inputs"
  />
     <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
    <div className="me-2 na">N/A</div>
    <h1 className='edit mt-2'>Edit</h1>
  </div>
  <Form.Label className="custom-placeholder-labels">Name of Agent</Form.Label>
</Form.Group>


<Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
  <Form.Control
    type="name"
    placeholder="tell us about you"
    className="custom-inputs"
  />
     <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
    <div className="me-2 na">N/A</div>
    <h1 className='edit mt-2'>Edit</h1>
  </div>
  <Form.Label className="custom-placeholder-labels">About Agent</Form.Label>
</Form.Group>

<Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
  <Form.Control
    type="name"
    placeholder="add an email address for easy accessibility"
    className="custom-inputs"
  />
     <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
    <div className="me-2 na">N/A</div>
    <h1 className='edit mt-2'>Edit</h1>
  </div>
  <Form.Label className="custom-placeholder-labels">Email Address</Form.Label>
</Form.Group>

<Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
  <Form.Control
    type="number"
    placeholder="add a phone number for easy accessibility"
    className="custom-inputs"
  />
     <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
    <div className="me-2 na">N/A</div>
    <h1 className='edit mt-2'>Edit</h1>
  </div>
  <Form.Label className="custom-placeholder-labels">Phone no</Form.Label>
</Form.Group>

<Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
  <Form.Control
    type="number"
    placeholder="add a license number"
    className="custom-inputs"
  />
     <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
    <div className="me-2 na">N/A</div>
    <h1 className='edit mt-2'>Edit</h1>
  </div>
  <Form.Label className="custom-placeholder-labels">Lincense</Form.Label>
</Form.Group>

<Row>
<Col>
<Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
  <Form.Control
    type="number"
    placeholder="add your state"
    className="custom-inputs"
  />
     <div className="position-absolute  d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: '20px' }}>
    <div className="me-2 na">N/A</div>
    <h1 className='edit mt-2'>Edit</h1>
  </div>
  <Form.Label className="custom-placeholder-labels">State</Form.Label>
</Form.Group>
</Col>


<Col>
<Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
  <Form.Control
    type="number"
    placeholder="add your city"
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

<Form.Group className="mb-3 position-relatives" controlId="exampleForm.ControlInput1">
  <Form.Control
    type="number"
    placeholder="kind of services you offer"
    className="custom-inputs"   style={{ outline: 'none', boxShadow: 'none', borderColor: 'none' }}
  />
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
