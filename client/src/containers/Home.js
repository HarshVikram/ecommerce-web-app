import React from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';

import "../App.css";

const Home = props => {
  return (
	<div className="home">
	  <img 
	  	className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Home_Backgorund" 
      />

      <div className="home_row">
      	<Product />
      	<Product />
      </div>

      <div className="home_row">
      	<Product />
      	<Product />
      	<Product />
      </div>

      <div className="home_row">
      	<Product />
      </div>	
	</div>
  );
}

Home.propTypes = {

}

export default Home;