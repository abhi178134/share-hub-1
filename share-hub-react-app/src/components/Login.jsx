import React, { Component } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <Form>

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

        <Col xs={{span: 3, offset:4}}>
        <Button variant="primary" type="submit">
          Login
        </Button>
        </Col>
      </Form>
    );
  }
}

export default Login;
