const express = require('express');
const cors = require('cors');
const router = express.Router();

const productController = require('../controllers/product');

router.post('/', productController.create);
router.delete('/:id', productController.delete);
router.get('/', productController.getAll);
router.get('/:id', productController.read);

module.exports = router;