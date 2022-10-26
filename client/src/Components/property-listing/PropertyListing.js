import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Listing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://realestate-backen.herokuapp.com/addedproperty")
      .then(res => res.json())
      .then((result) => {
        setItems(result);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(items);


  const searchHandle = async (e) => {
    console.log("*")
    let key = e.target.value;
    if (key) {
      let result = await fetch(`https://realestate-backen.herokuapp.com/search/${key}`);
      const data = await result.json();
      console.log(data);
      if (data) {
        setItems(data);
      }
      console.log(data);
    }
    
  };

  return (
    <>
      <div className="content">

        <div className="searchbar">
          <form class="search-bar">
            <input
              type="text"
              id="search"
              placeholder="Search PPD ID"
              onChange={searchHandle}
            />
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>

        <div className="addbutton">
          <button type="button" class="button"><Link to='/desktop' className="addbutton">
            <span><i class="fa-solid fa-plus"></i></span>Add Property</Link>
          </button>
        </div>
      </div>

      <div class="container">
        <table class="table">
          <tr>
            <th>PPDID</th>
            <th>Image</th>
            <th>Property</th>
            <th>Contact</th>
            <th>Area</th>
            <th>Views</th>
            <th>Status</th>
            <th>DaysLeft</th>
            <th>Action</th>
          </tr>

          {
          // items.length > 0 ? 
            items.map((item, i) => (
              <tr key={i}>
                <td>PPD000{item._id}</td>
                <td><span><i class="fa-solid fa-images"></i></span></td>
                <td>{item.property}</td>
                <td>{item.mobile}</td>
                <td>{item.area}</td>
                <td>00</td>
                <td><span className="sold-unsold">Sold</span></td>
                <td>04</td>
                <td><span><i class="fa-solid fa-eye"></i></span><i class="fa-solid fa-pen"></i><span></span></td>
              </tr>
            ))
          // : 
          //   <p className="res">No Result</p>
          }
        </table>
      </div>
    </>
  );
};

export default Listing;
