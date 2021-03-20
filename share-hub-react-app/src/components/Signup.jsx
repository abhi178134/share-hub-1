import React, { useState } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import axios from "axios";
import auth from "../services/auth";

axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://www.sharehub.com";

const Signup = ({}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [phone, setPhone] = useState(null);

  console.log({name, email, password, confirmPassword, phone});

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      confirmPassword,
      phone,
    };
    console.log("data",userData);
    const res = await axios.post("/users/signup", userData);
    auth.setToken(res.headers["x-auth-token"]);
    window.location.assign("/");
  };

  return (
    <Form>
      <Form.Group controlId="">
      <Row>
      <Col xs={{span: 4}} >
        <Form.Label>Name</Form.Label>
      </Col>
      <Col xs={{span: 6}}>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
      </Col>
      </Row>
      </Form.Group>

      <Form.Group>
      <Row>
      <Col xs="4">
        <Form.Label>Email</Form.Label>
      </Col>
      <Col xs="6">
      <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="example@email.com" />
      </Col>
      </Row>
      </Form.Group>
      <Form.Group>
      <Row>
      <Col xs="4">
        <Form.Label>Password</Form.Label>
      </Col>
      <Col xs="6">
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Col>
      </Row>
      </Form.Group>
      <Form.Group>
      <Row>
      <Col xs="4">
        <Form.Label>Confirm Password</Form.Label>
      </Col>
      <Col xs="6">
        <Form.Control onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
      </Col>
      </Row>
      </Form.Group>
      <Form.Group>
      <Row>
      <Col xs="4">
        <Form.Label>Contact Number</Form.Label>
      </Col>
      <Col xs="6">
        <Form.Control onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Phone Number" />
      </Col>
      </Row>
      </Form.Group>
      <Col xs={{span: 3, offset:4}}>
      <Button onClick={handleSignup} variant="primary" type="submit">
        Signup
      </Button>
      </Col>
    </Form>
  );


}

export default Signup;
