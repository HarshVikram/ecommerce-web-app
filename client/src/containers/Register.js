import React, { useState, useEffect, Fragemnt } from 'react';
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
  	<Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
      	<div className="form-group">
          <input
            type="firstName"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="lastName"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Have an account already? <Link to="/register">Login</Link>
      </p>
    </Fragment>
  );
}

export default Register;