import React, {useState, useEffect} from "react";
import {Button, Row} from 'react-bootstrap';
import {db} from '../firebase/config.js';
import Item from './Item';

const RenderItems = () => {
  // array containing items
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const categories = ["all","book", "note", "tutorial", "link", "gadget", "other"]

  useEffect( () => {
    const fetchItems = async () => {
      await db.collection('stuffs')
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
          let items = [];
          snap.forEach(item => {
            items.push({...item.data(), id: item.id});
          });
          setItems(items);
          setFilteredItems(items);
        })
    }

    fetchItems();

  },[]);
  const handleFilter = (e) => {
    e.preventDefault();
    const c = e.target.innerHTML;
    if(c !== "all") {
      const filter = [];
      console.log(items, c);
      items.forEach((item)=>{
        if(item.category === c) {
          console.log(item);
          filter.push(item);
        }
      });
      setFilteredItems(filter);
    } else {
       setFilteredItems(items);}
  }

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
      <div className="setting row ml-2">
        {filteredItems?.map((item) => (
          <div key={item.id} className="col mb-4">
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RenderItems;
