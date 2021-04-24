const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./database/db');

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
})

const PORT = process.env.PORT || 5000;
(async () => {
  try {
  	await db.initialize();
  	app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
  	console.log(err);
  }
})();