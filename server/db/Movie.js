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
  vote_average: {
    type: DECIMAL,
    allowNull: true,
  },
  vote_count: {
    type: INTEGER,
    allowNull: true,
  },
});

module.exports = Movie;
