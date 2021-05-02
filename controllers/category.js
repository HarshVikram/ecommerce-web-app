const db = require('../database/db');

exports.create = async (req, res) => {
  try {
  	const data = await db.Category.create(req.body);
    res.status(201).json({
      message: 'Category created successfully.',
      category: data
    });
  } catch(err) {
  	console.error(err.message);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
}

exports.delete = async (req, res) => {
  const categoryID = req.params.id
  try {
  	const category = await db.Category.destroy({ where: { id: categoryID } });
  	res.status(201).json({
      message: 'Category deleted successfully.'
    });
  } catch(err) {
	res.status(500).json({
      message: 'Category cannot be deleted if there are products under it.'
    });
  }
}

exports.read = async (req, res) => {
  const categoryID = req.params.id;
  try {
    const category = await db.Category.findByPk(categoryID);
    res.status(200).json({
      category: category
    });
  } catch(err) {
    res.status(500).json({
      message: 'Categories cannot be fetched'
    });
  }
}

exports.getAll = async (req, res) => {
  try {
    const categories = await db.Category.findAll();
    res.status(200).json({
      categories: categories
    });
  } catch (err) {
    res.status(500).json({
      message: 'Categories cannot be fetched'
    });
  }
}