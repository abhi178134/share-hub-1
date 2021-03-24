import React, { useState } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import {setToken} from "../services/auth";
import {auth} from '../firebase/config.js';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    };
    auth.signInWithEmailAndPassword(email, password).then(async (cred) => {
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
              LOGIN to ShareHub
            </h2>
          </Col>
        </Row>

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

      <Col xs={{span: 3, offset:4}}>
      <Button className="btn-started" onClick={handleLogin} type="submit">
        Login
      </Button>
      </Col>
    </Form>
  );
}

export default Login;
