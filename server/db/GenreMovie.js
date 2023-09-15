const db = require("./db");
const { INTEGER } = db.Sequelize;

const GenreMovie = db.define("genremovie", {
  movieTmdbId: {
    type: INTEGER,
    references: {
      model: "movies",
      key: "tmdb_id",
    },
    allowNull: false,
    primaryKey: true,
  },
  genreTmdbId: {
    type: INTEGER,
    references: {
      model: "genres",
      key: "tmdb_id",
    },
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = GenreMovie;
