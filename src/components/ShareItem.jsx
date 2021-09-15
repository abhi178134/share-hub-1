import React, { useState, useEffect } from "react";
import {Container, Row, Col, Form, Button, Dropdown} from 'react-bootstrap';
import {getCurrentUser} from '../services/auth';
import { db, storage, timestamp} from '../firebase/config.js';
// import getUrl from '../firebase/getUrl';

const ShareItem = ({}) => {

    const [title, setTitle] = useState(null);
    const [category, setCategory] = useState(null);
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [createdAt, setCreatedAt] = useState(null);
    const [author, setAuthor] = useState({name:"",phone:""});
    // const [progress, setProgress] = useState(0);
    // const [error, setError] = useState(null);

    const handleFile = async (e) => {
      let selected = e.target.files[0];
      if (selected) {
        setFile(selected);
      }
    };
    useEffect(async () => {
      const storageRef = file ? storage.ref(file.name) : null;
      if(storageRef) {
        await storageRef.put(file).then(async () => {
          const fileUrl = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          setFileUrl(fileUrl);
          setCreatedAt(createdAt);
        });
      }
    }, [file]);

    useEffect(async ()=>{
      const user = getCurrentUser();
      let myName = "";
      let myPhone = "";
      const userDB = db.collection('users');
      const me = await userDB.where("email", "==", user.email).get();
      await me.forEach(async (doc) => {
        myName = await doc.data().name;
        myPhone = await doc.data().phone;
        setAuthor({name: myName, phone: myPhone});
      });
      // const stuffDB = db.collection('stuffs');
      // if(user && author) {
      //   console.log(user, author);
      //   stuffDB.add({
      //       title,
      //       category,
      //       fileUrl,
      //       description,
      //       createdAt,
      //       author
      //     }).catch(err => {
      //       console.log(err.message);
      //     });
      // }else {
      //   window.location.assign("/login");

      //   throw(console.error("Login first"));
      // }
    }, []);

    const handleShare = async (e) => {
      e.preventDefault();
      const user = getCurrentUser();
      const stuffDB = await db.collection('stuffs');
      if(user && author) {
        console.log(user, author);
        console.log(title);
        await stuffDB.add({
            title,
            category,
            fileUrl,
            description,
            createdAt,
            author
          }).then(console.log("added")).catch(err => {
            console.log(err.message);
          });
      }else {
        window.location.assign("/login");

        throw(console.error("Login first"));
      }
      // const user = getCurrentUser();
      // let myName = "";
      // let myPhone = "";
      // const userDB = db.collection('users');
      // const stuffDB = db.collection('stuffs');
      // const me = await userDB.where("email", "==", user.email).get();
      // await me.forEach(async (doc) => {
      //  myName = await doc.data().name;
      //  myPhone = await doc.data().phone;
      //  setAuthor({name: myName, phone: myPhone});
      // });
      window.location.assign("/");
    };

    return (
      <Container>


        <Form className="form-style">
        <Row className="mb-5 mt-5">
          <Col className="text-center">
            <h2>
              Wellcome to Share Hub. <br />
              Help those who are in need. <br />
              Start sharring now..
            </h2>
          </Col>
        </Row>

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
              <Dropdown.Item eventKey="note">Notes</Dropdown.Item>
              <Dropdown.Item eventKey="tutorial">Tutorials</Dropdown.Item>
              <Dropdown.Item eventKey="gadget">Gadgets</Dropdown.Item>
              <Dropdown.Item eventKey="link">Important Links</Dropdown.Item>
              <Dropdown.Item eventKey="other">Others</Dropdown.Item>
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
          <Button className="btn-started" onClick={handleShare} type="submit">
            Share
          </Button>
          </Col>

        </Form>
      </Container>
    );

}

export default ShareItem;
