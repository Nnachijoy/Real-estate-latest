

import React from 'react';
import { Container, Row, Col, Card, Form, FormControl, Image } from 'react-bootstrap';
import profileOne from '../../assets/profileOne.png';
import profileTwo from '../../assets/profileTwo.png';
import profileThree from '../../assets/profileThree.png';
import location from '../../assets/location.png';
import ratingstar from '../../assets/ratingstar.png';
import "./savedprofile.css"; 
import bell from "../../assets/bell.png";
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import Animation from '../Animation';

const profiles = [
  {
    id: 1,
    image: profileOne,
    name: 'Abdul Suleiman',
    location: 'Apo Duste, Abuja',
    ratings: 4.5,
    reviews: 0,
    housesSold: 150,
    experience: null,
    buttons: ['Rentals']
  },
  {
    id: 2,
    image: profileTwo,
    name: 'Abdul Suleiman',
    location: 'Apo Duste, Abuja',
    ratings: 4.5,
    reviews: 12,
    housesSold: 150,
    experience: '8 Years experience',
    buttons: ['Selling a house', 'Buying a House']
  },
  {
    id: 3,
    image: profileThree,
    name: 'Abdul Suleiman',
    location: 'Apo Duste, Abuja',
    ratings: 4.5,
    reviews: 0,
    housesSold: 150,
    experience: '8 Years experience',
    buttons: ['Selling a house', 'Buying a House']
  }
];

const SavedProfile = () => {
  return (
    <div>
      {/* Your existing header code here */}

      <Container>
        <Animation animationClass="animate__slideInRight" delay={200}>
          <Row>
            <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
              <div className="m-2"> 
                <h3 className='my-listing mt-1'>Saved Profile</h3>
              </div>  
            </Col>
            <Col xs={12} md={6} className="d-flex flex-column align-items-end mt-4">
              <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
                <FormControl type="text" placeholder="Search" className="search-input" />
                <Image src={searchlight} className="ml-2" />
              </Form>
            </Col>  
          </Row>
        </Animation>
      </Container>

      <div className='mt-3'>
        <Animation animationClass="animate__slideInLeft" delay={200}>
          {profiles.map(profile => (
            <Card key={profile.id} body border='light' bg='' className='mt-3 p-2'>
              <div className="profile-containers">
                <div>
                  <img src={profile.image} alt={`Profile ${profile.id}`} className="saved-profile-image" />
                </div>
                <div className="profile-texts">
                  <h1 className='profile-names m-0 p-0'>{profile.name}</h1>
                  <div className='profile-infos'>
                    <div className='m-0 p-0'>
                      <img src={location} alt="location" className="location" />
                      {profile.location}
                    </div>
                    <div className='m-0 p-0 rating-container'>
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={ratingstar} alt="ratingstar" className="star" />
                      ))}
                      <span className="rating-text">{profile.ratings} * 250 Reviews</span>
                    </div>
                    <div className='m-0 p-0'>{profile.housesSold} Houses sold in total</div>
                    {profile.experience && <button className='profile-buttons mt-2'>{profile.experience}</button>}
                    <div className="button-container mt-1">
                      {profile.buttons.map((buttonText, index) => (
                        <button key={index} className='profile-buttons'>{buttonText}</button>
                      ))}
                    </div>
                  </div>
                  <div className='review-open-container'>
                    <div className="reviews">{profile.reviews ? `${profile.reviews} Reviews` : 'No Reviews'}</div>
                    <button className='open-profiles'>Open profile</button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </Animation>
      </div>
    </div>
  );
};

export default SavedProfile;
