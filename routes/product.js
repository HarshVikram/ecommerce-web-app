const express = require('express');
const cors = require('cors');
const router = express.Router();

const productController = require('../controllers/product');

router.post('/', productController.create);
router.delete('/:id', productController.delete);

module.exports = router;