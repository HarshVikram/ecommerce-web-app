const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

const db = require('../database/db');

// to protect routes that require authentication
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  } else {
    console.log(token);
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.JWTSECRET);
        console.log(decoded.user);
        console.log(decoded);
        req.user = decoded.user;
        next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};