const Sequelize = require("sequelize");
require("dotenv").config();
const config = {};

config.logging = false;
if (process.env.QUIET) {
  config.logging = false;
}

const db = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://watchify_2k9k_user:HP5ZED4tIGg0ifWF2PY6XVyMJTZSHUJu@dpg-ckae4nmgtj9c73fhm48g-a.oregon-postgres.render.com/watchify_2k9k",
  { logging: false }
);

module.exports = db;
