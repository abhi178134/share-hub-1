import React, { Component } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';

class Signup extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="">
        <Row>
        <Col xs={{span: 4}} >
          <Form.Label>Name</Form.Label>
        </Col>
        <Col xs={{span: 6}}>
          <Form.Control className="col" type="text" placeholder="Name" />
        </Col>
        </Row>
        </Form.Group>

        <Form.Group>
        <Row>
        <Col xs="4">
          <Form.Label>Email</Form.Label>
        </Col>
        <Col xs="6">
        <Form.Control className="col" type="email" placeholder="example@email.com" />
        </Col>
        </Row>
        </Form.Group>
        <Form.Group>
        <Row>
        <Col xs="4">
          <Form.Label>Password</Form.Label>
        </Col>
        <Col xs="6">
          <Form.Control type="password" placeholder="Password" />
        </Col>
        </Row>
        </Form.Group>
        <Form.Group>
        <Row>
        <Col xs="4">
          <Form.Label>Confirm Password</Form.Label>
        </Col>
        <Col xs="6">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Col>
        </Row>
        </Form.Group>
        <Form.Group>
        <Row>
        <Col xs="4">
          <Form.Label>Contact Number</Form.Label>
        </Col>
        <Col xs="6">
          <Form.Control type="number" placeholder="Phone Number" />
        </Col>
        </Row>
        </Form.Group>
        <Col xs={{span: 3, offset:4}}>
        <Button variant="primary" type="submit">
          Signup
        </Button>
        </Col>
      </Form>
    );
  }
}

export default Signup;
