const Sequelize = require('sequelize');
const uuid = require('uuid');

const model = (sequelize) => {
  return sequelize.define('products', 
	{
	  id: {
	  	type: Sequelize.UUID,
  	    defaultValue: Sequelize.UUIDV4,
  	    allowNull: false,
        primaryKey: true
	  },
	  name: {
	  	type: Sequelize.STRING,
        allowNull: false
	  },
	  description: {
	  	type: Sequelize.STRING,
        allowNull: false
	  },
	  price: {
	  	type: Sequelize.STRING,
        allowNull: false
	  },
	  photo: {
	  	type: Sequelize.STRING,
        allowNull: false
	  },
	  sold: {
	  	type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
	  },
	  stock: {
	  	type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
	  },
	  seller: {
	  	type: Sequelize.STRING,
        allowNull: false
	  }
	},
	{
	  timestamps: true
	}
  );
}

module.exports = model;




