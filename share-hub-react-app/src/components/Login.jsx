import React, { useState } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import axios from "axios";
import auth from "../services/auth";

axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://www.sharehub.com";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    };
    const res = await axios.post("/users/login", userData);
    console.log(res.headers["x-auth-token"]);
    auth.setToken(res.headers["x-auth-token"]);
    window.location.assign("/");
  };

  return (
    <Form>

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
      <Button onClick={handleLogin} variant="primary" type="submit">
        Login
      </Button>
      </Col>
    </Form>
  );
}

export default Login;
