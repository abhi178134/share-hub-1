import React, {useState} from "react";
import {Container, Card, Button} from 'react-bootstrap';

const Item = ({item}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.fileUrl || "https://picsum.photos/200/200"} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}<br />
          File Url : <a href={item.fileUrl} target="_blank">Click Here</a> <br />
          Shared by : {item.author.name}<br />
          Contact at : {item.author.phone}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;
