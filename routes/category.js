const express = require('express');
const cors = require('cors');
const router = express.Router();

const categoryController = require('../controllers/category');

router.post('/', categoryController.create);
router.delete('/:id', categoryController.delete);
router.get('/', categoryController.getAll);
router.get('/:id', categoryController.read);

module.exports = router;