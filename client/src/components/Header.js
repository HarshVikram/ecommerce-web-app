import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import '../App.css';

const Navgation = props => {
  return (
    <div className="header">
      <Link to="/">
        <img 
        	className="header_logo" 
        	src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        	alt="Amazon_Logo" 
        />
      </Link>

      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_search_icon" />
      </div>

      <div className="header_nav">
      	<div className="header_option">
      	  <span className="header_option_1">Hello Guest</span>
      	  <span className="header_option_2">Sign In</span>
      	</div>

      	<div className="header_option">
      	  <span className="header_option_1">Returns</span>
      	  <span className="header_option_2">& Orders</span>
      	</div>

      	<div className="header_option">
      	  <span className="header_option_1">Your</span>
      	  <span className="header_option_2">Prime</span>
      	</div>

        <div className="header_option_basket">
          <ShoppingBasketIcon />
          <span className="header_option_2 header_basket_count">
            2
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navgation;