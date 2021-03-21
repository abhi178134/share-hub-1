import React, {useState, useEffect} from "react";
import {Container} from 'react-bootstrap';
import {auth, db, storage, timestamp} from '../firebase/config.js';
import Item from './Item';

const RenderItems = ({}) => {
  // array containing items
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const items = await db.collection('stuffs')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let items = [];
        snap.forEach(item => {
          items.push({...item.data(), id: item.id});
        });
        setItems(items);
      })},[]);

  return (
    <div className="heading">
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

  // const componentDidMount = async () => {
  //   console.log(items);
  //   const items = await db.collection('stuffs')
  //     .orderBy('createdAt', 'desc')
  //     .onSnapshot(snap => {
  //       let items = [];
  //       snap.forEach(item => {
  //         items.push({...item.data(), id: item.id});
  //       });
  //       console.log(items);
  //       setItems(items);
  //     });
  // }
}

export default RenderItems;
