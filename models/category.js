const Sequelize = require('sequelize');
const uuid = require('uuid');

const model = (sequelize) => {
  return sequelize.define('categories', {
  	id: {
	  	type: Sequelize.UUID,
  	    defaultValue: Sequelize.UUIDV4,
  	    allowNull: false,
        primaryKey: true
	  },
	  name: {
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