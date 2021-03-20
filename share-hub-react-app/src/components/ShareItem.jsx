import React, { useState, useEffect } from "react";
import {Container, Row, Col, Form, Button, Dropdown} from 'react-bootstrap';
import {getCurrentUser} from '../services/auth';
import {auth, db, storage, timestamp} from '../firebase/config.js';
// import getUrl from '../firebase/getUrl';

const ShareItem = ({}) => {

    const [title, setTitle] = useState(null);
    const [category, setCategory] = useState(null);
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [createdAt, setCreatedAt] = useState(null);
    // const [progress, setProgress] = useState(0);
    // const [error, setError] = useState(null);

    const handleFile = (e) => {
      let selected = e.target.files[0];
      if (selected) {
        setFile(selected);
      }
    };

    const handleShare = async (e) => {
      e.preventDefault();
      const shareData = {
        title,
        category,
        file,
        description
      };
      // add shareData to firebase
      const user = getCurrentUser();
      if(user) {
        const storageRef = storage.ref(file.name);
        const collectionRef = db.collection('stuffs');

        storageRef.put(file).then(async () => {
          const fileUrl = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          setFileUrl(fileUrl);
          setCreatedAt(createdAt);
        });

        collectionRef.add({
            title,
            category,
            fileUrl,
            description,
            createdAt
          }).catch(err => {
            console.log(err.message);
          });
      }else {
        throw(console.error("Login first"))
      }
    };

    return (
      <Container>
        <Row className="mb-5 mt-5">
          <Col className="text-center">
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
            <Form.Control onChange={(e)=>setTitle(e.target.value)} className="col" type="text" placeholder="Title" />
          </Col>
          <Col xs={{offset:4, span:6}}>
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
            <Dropdown onSelect={(e)=>setCategory(e)}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Select Category for Your Stuff
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="book">Books</Dropdown.Item>
              <Dropdown.Item eventKey="tutorial">Tutorials</Dropdown.Item>
              <Dropdown.Item eventKey="gadget">Gadgets</Dropdown.Item>
              <Dropdown.Item eventKey="link">Important Links</Dropdown.Item>
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
          <Col xs="7">
            <Form.File onChange={handleFile} id="exampleFormControlFile1"/>
          </Col>
          </Row>
          </Form.Group>
          <Form.Group>
          <Row>
          <Col xs="4">
            <Form.Label>Description of the item</Form.Label>
          </Col>
          <Col xs="6">
            <Form.Control onChange={(e)=>setDescription(e.target.value)} as="textarea" placeholder="Also add links if available or share file above" />
          </Col>
          </Row>
          </Form.Group>
          <Col xs={{span: 3, offset:4}}>
          <Button onClick={handleShare} variant="success" type="submit">
            Share
          </Button>
          </Col>

        </Form>
      </Container>
    );

}

export default ShareItem;
