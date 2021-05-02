import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/user';
import PropTypes from 'prop-types';

import "../App.css";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
  	firstName: '',
  	lastName: '',
  	email: '',
  	password: '',
    password2: ''
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = e => {
  	setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      register({ firstName, lastName, email, password });
    }
  }

  if(isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
  	<div className="login">
      <Link to='/'>
        <img
          className="login_logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        />
      </Link>
      <div className="login_container">
        <h1 >Login</h1>
        <p className="lead">
          Login your account
        </p>

        <form onSubmit={onSubmit}>
          <h5>First Name</h5>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
          />
          <h5>Last Name</h5>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
          />
          <h5>Email</h5>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
          <h5>Confirm Password</h5>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength="6"
          />
          <button type='submit' className='login_button'>Login</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <p>Have an account?</p>
        <button className='login_register_button'>Login with your Amazon Account</button>
      </div>  
    </div>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);