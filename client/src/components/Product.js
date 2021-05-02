import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import "../App.css";

const Product = ({ product: { name, price, photo } }) => {

  return (
  	<div className="product">
	  <div className="product_info">
	  	<p>{name}</p>
	  	<p className="product_price">
	  	  <small>$</small>
	  	  <strong>{price}</strong>
	  	</p>
	  	<div className="product_rating">
	  	  <p>⭐️</p>
	  	  <p>⭐️</p>
	  	  <p>⭐️</p>
	  	  <p>⭐️</p>
	  	</div>
	  </div>
	  	
	  	<img 
	  	  src={photo}	  	
	  	/>

	  	<button>Add to Cart</button>
	  	
	</div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}


export default Product;