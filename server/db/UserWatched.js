const db = require("./db");
const { DECIMAL, UUID, UUIDV4, BOOLEAN } = db.Sequelize;

const UserWatched = db.define("userwatched", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  watched: {
    type: BOOLEAN,
    defaultValue: false,
  },
  rating: {
    type: DECIMAL,
    allowNull: true,
  },
});

module.exports = UserWatched;
