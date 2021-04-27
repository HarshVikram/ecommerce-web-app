import React from 'react';
import PropTypes from 'prop-types';

import "../App.css";

const Checkout = props => {
  return (
	<div className="checkout_product">
	  <img 
	    src="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
	  	alt=""
	  />

	  <div className="checkout_product_info">
	  	<p className="checkout_product_title">The Lean Startup</p>
	  	<p className="checkout_product_price">
	  	  <small>$</small>
          <strong>19.99</strong>
	  	</p>
	  	<div className="checkout_product_rating">
		  	<p>⭐️</p>
		  	<p>⭐️</p>
		  	<p>⭐️</p>
		  	<p>⭐️</p>
		  </div>	
		  <button>Remove from Basket</button>	
	  </div>
	  
	</div>
  );
}

Checkout.propTypes = {

}

export default Checkout;