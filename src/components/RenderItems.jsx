import React, {useState, useEffect} from "react";
import { Button, Row} from 'react-bootstrap';
import { db} from '../firebase/config.js';
//import Item from './Item';
import Grid from "./Grid";
import Thumb from "./Thumb";

const RenderItems = ({}) => {
  // array containing items
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  // const [category, setCategory] = useState("all");
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
        setFilteredItems(items);
  })},[]);

  const handleFilter = (e) => {
    e.preventDefault();
    const c = e.target.innerHTML;
    if(c !== "all") {
      const filter = [];
      console.log(items, c);
      items.map((item)=>{
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
      <Grid>
          {
            filteredItems.map((item) => (
              <Thumb
              key={item.id}
              clickable
              desc={item.description}
              image="https://picsum.photos/200/200"
              fileUrl={item.fileUrl}
              author={item.author.name}
              contact={item.author.phone}
              />
            ))
          })
      </Grid>
      {/* <div className="setting row ml-2">
        {filteredItems.map((item) => (
          <div key={item.id} className="col mb-4">
            <Item item={item} />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default RenderItems;
