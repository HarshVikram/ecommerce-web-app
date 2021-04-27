import React from 'react';
import PropTypes from 'prop-types';
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';

import "../App.css";

const Checkout = props => {
  return (
	<div className="checkout">
      <div className="checkout_left">
      	<img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
	      <h3>Hello, Harsh</h3>
	      <h2 className="checkout_title">Your shopping Basket</h2>
      	
	      <CheckoutProduct />
	      <CheckoutProduct />
	      <CheckoutProduct />
      	</div>
      </div>

      <div className="checkout_right">
      	<Subtotal />
      </div>
	</div>
  );
}

Checkout.propTypes = {

}

export default Checkout;