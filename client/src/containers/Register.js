import React, { useState, useEffect, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Register = () => {
  const [formData, setFormData] = useState({
  	firstName: '',
  	lastName: '',
  	email: '',
  	password: ''
  });

  const { firstName, lastName, email, password } = formData;

  const onChange = e => {
  	setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
    e.preventDefault();
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

export default Register;