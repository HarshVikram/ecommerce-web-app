const express = require('express');
const cors = require('cors');
const router = express.Router();

const categoryController = require('../controllers/category');

router.post('/', categoryController.create);
router.delete('/:id', categoryController.delete);

module.exports = router;