import React, {Component} from "react";
import {Container, Row, Col, Form, Button, Dropdown} from 'react-bootstrap'
class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="mb-5 mt-5">
          <Col xs={{ offset:5}}>
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
          <Col xs={{span: 4}} >
            <Form.Label>Stuff Title</Form.Label>
          </Col>
          <Col xs={{span: 6}}>
            <Form.Control className="col" type="text" placeholder="Title" />
          </Col>
          <Col xs={{offset:4, span:12}}>
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
          <Form.Group>
          <Row>
          <Col xs="4">
            <Form.Label>Description of the item</Form.Label>
          </Col>
          <Col xs="6">
            <Form.Control as="textarea" />
          </Col>
          </Row>
          </Form.Group>
          <Col xs={{span: 3, offset:4}}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Col>


        </Form>
      </Container>
    );
  }
}

export default Home;
