const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');
const { validationResult } = require('express-validator');

const db = require('../database/db');

exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
  	const user = await db.User.findOne({
  	  where: { email: email }
  	})
  	if (user) {
  	  return res
  	    .status(401)
  	    .json({ errors: [{ msg: 'A user with this email already exists.' }] });
  	}
  	const hashedPassWord = await bcrypt.hash(password, 12);
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassWord
    }
      const createdUser = await db.User.create(userData);
      res.status(201).json({
        message: 'Signup successful',
        user: userData
      });
  } catch (err) {
  	console.error(err.message);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
  	const user = await db.User.findOne({
  	  where: { email: email }
  	});
  	if (!user) {
  	  return res
  	  	.status(401)
  	  	.json({ errors: [{ msg: 'Either email or the password is wrong' }] })
  	}
  	let loadedUser = user;
  	const isEqual = bcrypt.compare(password, user.password);
    if (!isEqual) {
      return res
        .status(400)
  	  	.json({ errors: [{ msg: 'Either email or the password is wrong' }] })
    }

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      config.JWTSECRET,
      { expiresIn: '24h' },
      (err, token) => {
      	if (err) 
      	  throw err;
      	else 
      	  res.json({ token });
      }
    );
  } catch (err) {
  	console.error(err.message);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
}
