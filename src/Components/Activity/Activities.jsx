// import React from 'react';
// import { Container, Table, Row, Col, Card, Form, FormControl, Navbar, Image, Button } from 'react-bootstrap';
// import profile from '../../assets/profile.png';
// import bell from '../../assets/bell.png';
// import searchlight from '../../assets/searchlight.png';
// import Calendar from './Calendar';
// import { FaRegistered } from 'react-icons/fa';
// import freshtop from "../../assets/freshtop.png"
// import x from "../../assets/x.png"
// import './Activities.css'; 
// import { MdMargin } from 'react-icons/md';
// import Animation from '../Animation';
// import InspectionTable from './InspectionTable';
// import RecentInspectionTable from './RecentInspectionTable';
// import Head from '../Head'; 



// const inspectionSummary = [
//   { title: "Successful Inspection", count: 321, image: freshtop },
//   { title: "Unsuccessful Inspection", count: 0, image: x },
//   // Add more objects here if needed
// ];

// export const Dashb = () => {
//   return (
//     <div className="container">


   

// <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
//   <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
//     <h3 className="flex-grow-1 mt-1" style={{marginLeft:"60px", color:"#FF7B29", fontFamily:"Syne", fontWeight:"700", fontSize:"22px"}}>RealHomes</h3>
   
//   </Container>
// </div>

//       <div className="container d-none d-md-block">
//         <Container className="p-3" style={{ position: 'relative', marginLeft:"-30px" }}>
//         <div className="container d-none d-md-block">
//       <Head 
//         bellIcon={bell} 
//         profileImage={profile} 
//       />
//       </div>
//         </Container>
//       </div>



// <Container className="mt-4">
//   <Row>
//     <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
//       <div className="">
//       <Row>
//                   <Col>
//                     <h1 style={{width:"0px", fontSize:"400%", height:"0px"}}>01</h1> 
//                   </Col>
//                   <Col className="mt-3">
//                     <p className="">JANUARY <span className="me-4">2021</span></p>
                    
//                   </Col>
//                 </Row>
//       </div>
//     </Col>
//     <Col xs={12} md={6} className="d-flex flex-column align-items-end mt-4">
//     <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
//                     <FormControl type="text" placeholder="Search" className="search-input" />
//                     <Image src={searchlight} className="ml-2" />
//                 </Form>
//     </Col>
//   </Row>
// </Container>


//    <Container className="my-4">
//    <Animation animationClass="animate__slideInRight" delay={100}>
//       <Row>
//         <Col xs={12} lg={8}>
//           <Row>
//       {inspectionSummary.map((item, index) => (
//         <Col xs={12} sm={6} md={6} className="mb-4" key={index}>
//           <Card>
//             <Card.Body>
//               <Card.Title>
//                 <Row>
//                   <Col xs="auto">
//                     <Image src={item.image} style={{ width: "100px", height: "100px" }} />
//                   </Col>
//                   <Col className="mt-4">
//                     <p style={{ fontFamily: "SF Pro Display", fontWeight: "700" }}>{item.title}</p>
//                     <p style={{ fontWeight: "400", fontSize: "28px" }}>{item.count}</p>
//                   </Col>
//                 </Row>
//               </Card.Title>
//               <Card.Text></Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//           <InspectionTable />
//         </Col>

//         <Col xs={12} lg={4} className="">
//           <Calendar/>
//         </Col>
//       </Row>
//       </Animation>
//     </Container>


    
    
//   <Container className="mt-3" style={{marginBottom:"180px"}}>
//       <RecentInspectionTable />
//     </Container>


//     </div>
//   );
// }

// export default Dashb;


// import React from 'react';
// import { Container, Row, Col, Card, Form, FormControl, Image } from 'react-bootstrap';
// import profile from '../../assets/profile.png';
// import bell from '../../assets/bell.png';
// import searchlight from '../../assets/searchlight.png';
// import Calendar from './Calendar';
// import freshtop from "../../assets/freshtop.png";
// import x from "../../assets/x.png";
// import './Activities.css'; 
// import Animation from '../Animation';
// import InspectionTable from './InspectionTable';
// import RecentInspectionTable from './RecentInspectionTable';
// import Head from '../Head'; 

// const inspectionSummary = [
//   { title: "Successful Inspection", count: 321, image: freshtop },
//   { title: "Unsuccessful Inspection", count: 0, image: x },
// ];

// export const Dashb = () => {
//   return (
//     <div className="container">

//       {/* Mobile Navbar with Profile Image */}
//       <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
//         <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
//           <h3 className="flex-grow-1 mt-1" style={{marginLeft:"60px", color:"#FF7B29", fontFamily:"Syne", fontWeight:"700", fontSize:"22px"}}>RealHomes</h3>
//           <Image src={profile} roundedCircle style={{ width: "40px", height: "40px", marginRight: "35px" }} />
//         </Container>
//       </div>

//       {/* Desktop Navbar with Head Component */}
//       <div className="container d-none d-md-block">
//         <Container className="p-3" style={{ position: 'relative', marginLeft:"-30px" }}>
//           <Head bellIcon={bell} profileImage={profile} />
//         </Container>
//       </div>

//       <Container className="mt-4">
//         <Row>
//           <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
//             <div className="">
//               <Row>
//                 <Col>
//                   <h1 style={{width:"0px", fontSize:"400%", height:"0px"}}>01</h1> 
//                 </Col>
//                 <Col className="mt-3">
//                   <p className="">JANUARY <span className="me-4">2021</span></p>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//           <Col xs={12} md={6} className="d-flex flex-column align-items-end mt-4">
//             <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
//               <FormControl type="text" placeholder="Search" className="search-input" />
//               <Image src={searchlight} className="ml-2" />
//             </Form>
//           </Col>
//         </Row>
//       </Container>

//       <Container className="my-4">
//         <Animation animationClass="animate__slideInRight" delay={100}>
//           <Row>
//             <Col xs={12} lg={8}>
//               <Row>
//                 {inspectionSummary.map((item, index) => (
//                   <Col xs={12} sm={6} md={6} className="mb-4" key={index}>
//                     <Card>
//                       <Card.Body>
//                         <Card.Title>
//                           <Row>
//                             <Col xs="auto">
//                               <Image src={item.image} style={{ width: "100px", height: "100px" }} />
//                             </Col>
//                             <Col className="mt-4">
//                               <p style={{ fontFamily: "SF Pro Display", fontWeight: "700" }}>{item.title}</p>
//                               <p style={{ fontWeight: "400", fontSize: "28px" }}>{item.count}</p>
//                             </Col>
//                           </Row>
//                         </Card.Title>
//                         <Card.Text></Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//               <InspectionTable />
//             </Col>

//             <Col xs={12} lg={4} className="">
//               <Calendar />
//             </Col>
//           </Row>
//         </Animation>
//       </Container>

//       <Container className="mt-3" style={{marginBottom:"180px"}}>
//         <RecentInspectionTable />
//       </Container>
//     </div>
//   );
// }

// export default Dashb;


import React from 'react';
import { Container, Row, Col, Card, Form, FormControl, Image } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import bell from '../../assets/bell.png';
import searchlight from '../../assets/searchlight.png';
import Calendar from './Calendar';
import freshtop from "../../assets/freshtop.png";
import x from "../../assets/x.png";
import './Activities.css'; 
import Animation from '../Animation';
import InspectionTable from './InspectionTable';
import RecentInspectionTable from './RecentInspectionTable';
import Head from '../Head'; 
import CustomNavbar from '../CustomNavbar/CustomNavbar';

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

      <Container className="mt-4">
        <Row>
          <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
            <div className="">
              <Row>
                <Col>
                  <h1 style={{width:"0px", fontSize:"400%", height:"0px"}}>01</h1> 
                </Col>
                <Col className="mt-3 ms-4 d-block d-md-none"> 
                  <p className="">JANUARY <span className="me-4">2021</span></p>
                </Col>

                <Col className="mt-3 d-none d-md-block"> 
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

      <CustomNavbar />

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
              <Calendar />
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
