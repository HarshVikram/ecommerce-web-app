const Sequelize = require("sequelize");
const mysql = require('mysql2/promise');

const config = require("../config/config.json");

module.exports = db = {};

const initialize = async () => {
  const host = config.HOST;
  const port = config.PORT;
  const user = config.USER;
  const password = config.PASSWORD;
  const database = config.DATABASE;

  const wait = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  let second = 5;
  let retryTime = 2;
  
  for (let i = 0; i < retryTime; ++i) {
    try {
      let connection = await mysql.createConnection({ host: host, port: port, user: user, password: password });
      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
      break;
    } catch (err) {
      console.log(`[${i + 1}/${retryTime}] Database not ready yet, wait for ${second} seconds`);
      await wait(second * 1000);
    }
  }
  console.log('connected to Database!');

  const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
    host: host
  });

  //importing models
  db.User = require("../models/user")(sequelize);
  db.Product = require("../models/product")(sequelize);
  db.Category = require("../models/category")(sequelize);

  //creating associations
  db.Product.belongsTo(db.Category);
  db.Category.hasMany(db.Product);

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  await sequelize.sync();
}

db.initialize = initialize;
