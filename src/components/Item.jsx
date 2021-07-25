import React from "react";
import {Card} from 'react-bootstrap';

const Item = ({item}) => {
  const urlExists = item.fileUrl ? (item.fileUrl.includes(".png") || item.fileUrl.includes(".jpeg") || item.fileUrl.includes(".jpg") || item.fileUrl.includes(".gif")) : false;
  return (
    <Card className="card-style" style={{ width: '18rem' }}>
      <Card.Img className="card-img" style={{ width: '18rem', height: '300px' }} variant="top" src={(urlExists && item.fileUrl) || "https://picsum.photos/200/200"} />
      <Card.Body className="card-body">
        <Card.Title style={{ fontWeight:'bold', textTransform:'uppercase' }}>{item.title}</Card.Title>
        <Card.Text>
          {item.description}<br />
          File Url : <a href={item.fileUrl} target="_blank" rel="noreferrer">Click Here</a> <br />
          Shared by : {item.author.name}<br />
          Contact at : {item.author.phone}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;
