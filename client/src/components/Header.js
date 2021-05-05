import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import '../App.css';

const Header = ({ user: { isAuthenticated, loading, user } }) => {

  const guestLinks = (
    <Fragment>
      <Link>
        <div className="header_option">
          <span className="header_option_1">Hello Guest</span>
          <span className="header_option_2">Sign In</span>
        </div>
      </Link>
      <Link>
        <div className="header_option">
          <span className="header_option_1">Returns</span>
          <span className="header_option_2">& Orders</span>
        </div>
      </Link>
      <Link>
        <div className="header_option">
          <span className="header_option_1">Your</span>
          <span className="header_option_2">Prime</span>
        </div>
      </Link>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <Link>
        <div className="header_option">
          <span className="header_option_1">Hello, {user.firstName}</span>
          <span className="header_option_2">Account & Lists</span>
        </div>
      </Link>
      <Link>
        <div className="header_option">
          <span className="header_option_1">Returns</span>
          <span className="header_option_2">& Orders</span>
        </div>
      </Link>
      <Link>
        <div className="header_option">
          <span className="header_option_1">Your</span>
          <span className="header_option_2">Prime</span>
        </div>
      </Link>
      <Link>
        <div className="header_option">
          <span className="header_option_1">Thank You</span>
          <span className="header_option_2">Log Out</span>
        </div>
      </Link>
    </Fragment>
    
  );

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
      	
        { !loading && (
          <Fragment>
            {isAuthenticated ? authLinks : guestLinks}
          </Fragment>)
        }

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

Header.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {})(Header);