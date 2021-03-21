import React, {useState, useEffect} from "react";
import {Container, Button, Row} from 'react-bootstrap';
import {auth, db, storage, timestamp} from '../firebase/config.js';
import Item from './Item';

const RenderItems = ({}) => {
  // array containing items
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [category, setCategory] = useState("all");
  const categories = ["all","book", "note", "tutorial", "link", "gadget", "other"]

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
  const handleFilter = (e) => {
    e.preventDefault();
    const c = e.target.innerHTML;
    if(c != "all") {
      const filter = [];
      console.log(items, c);
      items.map((item)=>{
        if(item.category == c) {
          console.log(item);
          filter.push(item);
        }
      });
      setFilteredItems(filter);
    } else {setFilteredItems(items);}
  }
  // useEffect(() => {
  //   if(category) {
  //     const filter = [];
  //     console.log(items, category);
  //     items.map((item)=>{
  //       if(item.category == category) {
  //         filter.push(item);
  //       }
  //     });
  //     setFilteredItems(filter);
  //   }
  // },[category, filteredItems]);
  //   console.log(filteredItems);
  return (
    <div className="heading">
      <Row> {
        categories.map((c) => (
            <Button className="btn-started col"
                    style={{margin:"10px"}}
                    key={c}
                    value={c}
                    onClick={handleFilter}>
                    {c}
            </Button>
        ))
      }</Row>
      <div className="row ml-2">
        {filteredItems.map((item) => (
          <div key={item.id} className="col mb-4">
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RenderItems;
