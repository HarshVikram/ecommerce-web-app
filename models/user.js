const Sequelize = require('sequelize');
const uuid = require('uuid');

const model = (sequelize) => {
  return sequelize.define('users',
	{
	  id: {
	  	type: Sequelize.UUID,
  	    defaultValue: Sequelize.UUIDV4,
  	    allowNull: false,
        primaryKey: true
      },
	  firstName: {
	  	type: Sequelize.STRING,
        allowNull: false
	  },
	  lastName: {
	  	type: Sequelize.STRING,
        allowNull: false
	  },
	  email: {
	  	type: Sequelize.STRING,
        allowNull: false,
        unique: true
	  },
	  password: {
	  	type: Sequelize.STRING,
	  	allowNull: false
	  }
	},
	{
      timestamps: true
    }
  );
};

module.exports = model;