import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../components/Product';
import { getProducts } from '../actions/product';

import "../App.css";

const Home = ({ user, product, getProducts }) => {
  useEffect(() => {
    getProducts()
  }, [getProducts]);

  return (
	<div className="home">
	  <img 
	  	className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Home_Backgorund" 
      />

      <div className="home_row">
      	{product.products.map((product) => (
          <Product 
            key={product.id}
            product={product}
          />
        ))}
      </div>
	</div>
  );
}

Home.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  product: state.product
})

export default connect(mapStateToProps, { getProducts })(Home);