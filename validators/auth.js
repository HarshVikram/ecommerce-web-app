const { body } = require('express-validator');

const db = require('../database/db');

exports.signupValidator = [
  body('firstName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name should not be empty.'),
  body('lastName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name should not be empty.'),
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email.'),
  body('password')
    .trim()
    .isLength({ min: 5 })
];