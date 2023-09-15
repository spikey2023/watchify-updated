const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/watchify",
  {logging: false}
);

module.exports = db;
