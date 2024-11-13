

import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Accept any credentials
    onLoginSuccess(); // Call the login success callback
    navigate('/dashboard'); // Navigate to the dashboard
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col md={12}>
          <div className="text-center mb-4">
            <h2 className="font-weight-bold">Account Login</h2>
            <p>If you are already a member you can login with your email address and password.</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Placeholder" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Placeholder" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100">
              Log in
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p>Don't have an account? <a href="#signup">Sign up here</a></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
