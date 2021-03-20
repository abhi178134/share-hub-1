import React, {useState } from "react";
import {Container} from 'react-bootstrap';
import axios from "axios";
import Item from './Item';
axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://www.sharehub.com";

const RenderItems = ({}) => {
  // array containing items
  const [items, setItems] = useState([{
    id: "id",
    title: "Item Title",
    description: "This is where description will be displayed",
    author: {
      name: "Autor Name",
      phoneNumber: "9876543210",
    },
  },
  {
    id: "idq",
    title: "Item Title",
    description: "This is where description will be displayed",
    author: {
      name: "Autor Name",
      phoneNumber: "9876543210",
    },
  }])

  return (
    <div>
      <h1>Here is some shared items from your peers</h1>
      <div className="row ml-2">
        {items.map((item) => (
          <div key={item.id} className="col mb-4">
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );

  const componentDidMount = async () => {
    console.log(items);
    const { data: items } = await axios.get("/items/");
    setItems(items);
  }
}

export default RenderItems;
