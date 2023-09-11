const db = require("./db");
const { DECIMAL, STRING, INTEGER } = db.Sequelize;

const Movie = db.define("movie", {
  tmbd_id: {
    type: INTEGER,
    primaryKey: true,
  },
  title: {
    type: STRING,
  },
  avg_rating: {
    type: DECIMAL,
    allowNull: true,
  },
  rating_count: {
    type: INTEGER,
    allowNull: true,
  },
});

module.exports = Movie;
