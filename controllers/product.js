const db = require('../database/db');

exports.create = async (req, res) => {
  const { name, description, price, photo, sold, stock, seller, categoryId } = req.body;
  try {
    const data = { name, description, price, photo, sold, stock, seller, categoryId }
  	const product = await db.Product.create(data);
    res.status(201).json({
      message: 'Product created successfully.',
      product: product
    });
  } catch(err) {
  	console.error(err.message);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
}

exports.delete = async (req, res) => {
  const productID = req.params.id
  try {
  	const product = await db.Product.destroy({ where: { id: productID } });
  	res.status(201).json({
      message: 'Product deleted successfully.'
    });
  } catch(err) {
  	res.status(500).json({
      message: 'Product cannot be deleted if there are products under it.'
    });
  }
}





