const Sequelize = require("sequelize");
require("dotenv").config();
const config = {};

config.logging = false;
if (process.env.QUIET) {
  config.logging = false;
}

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/watchifydb",
  { logging: false }
);

module.exports = db;
