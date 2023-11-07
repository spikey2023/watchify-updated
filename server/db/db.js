const Sequelize = require("sequelize");
require("dotenv").config();
const config = {};

config.logging = false;
if (process.env.QUIET) {
  config.logging = false;
}

const db = new Sequelize(
  // process.env.DATABASE_URL || "postgres://localhost/watchify",
  process.env.DATABASE_URL || "postgres://watchify_db_user:M9kX35FbPOW1JUS9ETq1yI1KRYJJztUB@dpg-cl19noi4i3ns739jjgug-a/watchify_db",
  { logging: false }
);

module.exports = db;
