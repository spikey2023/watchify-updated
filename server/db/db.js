const Sequelize = require("sequelize");
const config = require("../index.js");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/watchify",
  config
);

module.exports = db;
