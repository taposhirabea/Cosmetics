import React from 'react';
import {Link} from "react-router-dom"
import SHOP_DATA from './shop.data';

const Product = ({ id }) => {
  const listItems = SHOP_DATA.map((item) =>
  <div className="card" key={item.id}>
    <div className="card-img">
      <img src={item.imageUrl} alt="Item" className="img-rounded col-sm-4" />
    </div>
    <div className="card-header">
      <h2>{item.name}</h2>
      <p className="price">{item.price}<span>{item.currency}</span></p>
      <Link to={`item/${id}`} className="btn btn-primary product-link">Details</Link>
    </div>
  </div>);
  return  (
    <div className="main-content">
      <h3>Cosmetics</h3>
      {listItems}
      
    </div>
  );
}
 
export default Product;