import React, { useState } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import {setToken} from "../services/auth";
import {auth, db} from '../firebase/config.js';

const Signup = ({}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [phone, setPhone] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      confirmPassword,
      phone,
    };
    // check if password === confirmPassword
    console.log("data",userData);
    //add user to firebase and get auth token
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        name,
        email,
        phone
      });
    }).then(async() => {
      const token = await auth.currentUser.getIdToken();
      console.log(token);
      setToken(token);
      window.location.assign("/");
    });
  };

  return (
    <Form className="form-style">
      <Row className="mb-5 mt-5">
          <Col className="text-center">
            <h2>
             SIGNUP to ShareHub
            </h2>
          </Col>
        </Row>
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
      <Button className="btn-started" onClick={handleSignup} variant="primary" type="submit">
        Signup
      </Button>
      </Col>
    </Form>
  );


}

export default Signup;
