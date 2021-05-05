const express = require('express');
const cors = require('cors');
const router = express.Router();
const { body } = require('express-validator');

const userController = require('../controllers/user');

const userValidator = require('../validators/auth');

const isValid = require('../middlewares/is-valid');
const isAuth = require('../middlewares/is-auth');

router.post('/register', userValidator.signupValidator, isValid, userController.register);
router.post('/login', userController.login);
router.get('/', isAuth, userController.loadUser);


module.exports = router;