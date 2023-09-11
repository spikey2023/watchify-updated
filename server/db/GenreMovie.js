const db = require("./db");
const { INTEGER } = db.Sequelize;

const GenreMovie = db.define("genremovie", {
  id: {
    type: INTEGER,
    primaryKey: true,
  },
});

module.exports = GenreMovie;
