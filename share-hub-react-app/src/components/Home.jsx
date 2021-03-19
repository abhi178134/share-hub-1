import React, {Component} from "react";
import {Container, Row, Col, Form, Button, Dropdown} from 'react-bootstrap'
class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p>
              Wellcome to Share Hub. <br />
              Help those who are in need. <br />
              Start sharring now..
            </p>
          </Col>
        </Row>

        <Form>

          <Form.Group controlId="">
          <Row>
          <Col xs="4" >
            <Form.Label>Stuff Title</Form.Label>
          </Col>
          <Col>
            <Form.Control className="col" type="text" placeholder="Title" />
          </Col>
          <Col xs="12">
            <Form.Text className="text-muted">
            eg. Book on C++, Link to React tutorial, Unused Laptop, etc
            </Form.Text>
          </Col>
          </Row>
          </Form.Group>

          <Form.Group controlId="">
          <Row>
          <Col xs="4">
            <Form.Label>Category</Form.Label>
          </Col>
          <Col xs ="6">
            <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Select Category of Your Stuff
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Books</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Tutorials</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Gadgets</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          </Col>
          </Row>
          </Form.Group>

          <Form.Group>
          <Row>
          <Col xs="4">
            <Form.Label>Choose file</Form.Label>
          </Col>
          <Col xs="6">
            <Form.File id="exampleFormControlFile1"/>
          </Col>
          </Row>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          
        </Form>
      </Container>
    );
  }
}

export default Home;
