import React, {Component} from "react";
import {Container} from 'react-bootstrap';
import axios from "axios";
import Item from './Item';
axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://www.sharehub.com";

class RenderItems extends Component {
  state = {
    items: [
      {
        _id: "id",
        title: "Item Title",
        description: "This is where description will be displayed",
        author: {
          name: "Autor Name",
          phoneNumber: "9876543210",
        }
      },
      {
        _id: "id",
        title: "Item Title",
        description: "This is where description will be displayed",
        author: {
          name: "Autor Name",
          phoneNumber: "9876543210",
        }
      },
      {
        _id: "id",
        title: "Item Title",
        description: "This is where description will be displayed",
        author: {
          name: "Autor Name",
          phoneNumber: "9876543210",
        }
      },
      {
        _id: "id",
        title: "Item Title",
        description: "This is where description will be displayed",
        author: {
          name: "Autor Name",
          phoneNumber: "9876543210",
        }
      },
      {
        _id: "id",
        title: "Item Title",
        description: "This is where description will be displayed",
        author: {
          name: "Autor Name",
          phoneNumber: "9876543210",
        }
      },
      {
        _id: "id",
        title: "Item Title",
        description: "This is where description will be displayed",
        author: {
          name: "Autor Name",
          phoneNumber: "9876543210",
        }
      },
      {
        _id: "id",
        title: "Item Title",
        description: "This is where description will be displayed",
        author: {
          name: "Autor Name",
          phoneNumber: "9876543210",
        }
      },
      {
        _id: "id",
        title: "Item Title",
        description: "This is where description will be displayed",
        author: {
          name: "Autor Name",
          phoneNumber: "9876543210",
        }
      },
    ],
  };
  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Here is some shared items from your peers</h1>
        <div className="row ml-2">
          {items.map((item) => (
            <div key={item._id} className="col mb-4">
              <Item item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    const { data: items } = await axios.get("/items/");
    this.setState({ items: items });
  }
}

export default RenderItems;
