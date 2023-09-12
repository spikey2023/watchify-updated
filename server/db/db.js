const Sequelize = require("sequelize");
const config = {};

config.logging = false;
if (process.env.QUIET) {
  config.logging = false;
}

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/watchify",
  config
);

module.exports = db;
