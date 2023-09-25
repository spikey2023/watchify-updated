const db = require("./db");
const { DECIMAL, UUID, UUIDV4, BOOLEAN, INTEGER } = db.Sequelize;

const UserWatched = db.define("userwatched", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  userId: {
    type: UUID,
    references: {
      model: "users",
      key: "id",
    },
    allowNull: false,
    primaryKey: true,
  },
  movieTmdbId: {
    type: INTEGER,
    references: {
      model: "movies",
      key: "tmdb_id",
    },
    allowNull: false,
    primaryKey: true,
  },
  rating: {
    type: DECIMAL,
    allowNull: true,
  },
});

module.exports = UserWatched;
