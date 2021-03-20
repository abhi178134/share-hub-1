import React, { Component } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import axios from "axios";
import auth from "../services/auth";

axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://www.sharehub.com";

class Signup extends Component {
  state = {
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    phoneNumber:"",
  };
  render() {
    console.log(this.state);
    return (
      <Form>
        <Form.Group controlId="">
        <Row>
        <Col xs={{span: 4}} >
          <Form.Label>Name</Form.Label>
        </Col>
        <Col xs={{span: 6}}>
          <Form.Control onChange={(input)=>{
            this.setState({name: input.target.value})
          }} type="text" placeholder="Name" />
        </Col>
        </Row>
        </Form.Group>

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
        <Form.Group>
        <Row>
        <Col xs="4">
          <Form.Label>Confirm Password</Form.Label>
        </Col>
        <Col xs="6">
          <Form.Control onChange={(input)=>{
            this.setState({confirmPassword: input.target.value})
          }} type="password" placeholder="Confirm Password" />
        </Col>
        </Row>
        </Form.Group>
        <Form.Group>
        <Row>
        <Col xs="4">
          <Form.Label>Contact Number</Form.Label>
        </Col>
        <Col xs="6">
          <Form.Control onChange={(input)=>{
            this.setState({phoneNumber: input.target.value})
          }} type="number" placeholder="Phone Number" />
        </Col>
        </Row>
        </Form.Group>
        <Col xs={{span: 3, offset:4}}>
        <Button onClick={(e)=>this.handleSignup(e)} variant="primary" type="submit">
          Signup
        </Button>
        </Col>
      </Form>
    );
  }
  handleSignup = async (e) => {
    console.log(this.state);
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      phoneNumber: this.state.phoneNumber,
    };
    const res = await axios.post("/users/signup", userData);
    auth.setToken(res.headers["x-auth-token"]);
    window.location.assign("/");
  };
}

export default Signup;
