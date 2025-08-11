import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SignupForm from "../components/layout/SignupForm";

const Signup = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded-5">
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center bg-dark text-white p-5"
        >
          <div>
            <h1>Library Management System</h1>
          </div>
        </Col>
        <Col lg={6} className=" d-flex flex-column p-5">
          {/* SIGNUP FORM */}
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
