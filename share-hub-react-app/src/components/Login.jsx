import React, { Component } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import axios from "axios";
import auth from "../services/auth";

axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://www.sharehub.com";

class Login extends Component {
  state = {
    email:"",
    password:"",
  };
  render() {
    return (
      <Form>

        <Form.Group>
        <Row>
        <Col xs="4">
          <Form.Label>Email</Form.Label>
        </Col>
        <Col xs="6">
        <Form.Control onChange={(input)=>{
          this.setState({email: input.target.value})
        }} type="email" placeholder="example@email.com" />
        </Col>
        </Row>
        </Form.Group>
        <Form.Group>
        <Row>
        <Col xs="4">
          <Form.Label>Password</Form.Label>
        </Col>
        <Col xs="6">
          <Form.Control onChange={(input)=>{
            this.setState({password: input.target.value})
          }} type="password" placeholder="Password" />
        </Col>
        </Row>
        </Form.Group>

        <Col xs={{span: 3, offset:4}}>
        <Button onClick={(e)=>this.handleLogin(e)} variant="primary" type="submit">
          Login
        </Button>
        </Col>
      </Form>
    );
  }
  handleLogin = async (e) => {
    console.log(this.state);
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    const res = await axios.post("/users/login", userData);
    console.log(res.headers["x-auth-token"]);
    auth.setToken(res.headers["x-auth-token"]);
    window.location.assign("/");
  };
}

export default Login;
