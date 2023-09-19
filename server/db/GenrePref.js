const db = require("./db");
const { UUID, UUIDV4, INTEGER } = db.Sequelize;

const GenrePref = db.define("genrepref", {
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

module.exports = GenrePref;
