import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/product';
import PropTypes from 'prop-types';


import "../App.css";

const Product = ({ products,  getProducts }) => {
  useEffect(() => {
  	getProducts()
  }, [getProducts]);

  return (
  	<div className="product">
	  <div className="product_info">
	  	<p>The Lean Startup</p>
	  	<p className="product_price">
	  	  <small>$</small>
	  	  <strong>19.99</strong>
	  	</p>
	  	<div className="product_rating">
	  	  <p>⭐️</p>
	  	  <p>⭐️</p>
	  	  <p>⭐️</p>
	  	  <p>⭐️</p>
	  	</div>
	  </div>
	  	
	  	<img 
	  	  src="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
	  	/>

	  	<button>Add to Cart</button>
	  	
	</div>
  );
}

Product.propTypes = {
  getPost: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect( mapStateToProps, { getProducts })(Product);