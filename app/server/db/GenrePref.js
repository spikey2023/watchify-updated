const db = require("./db");
const { UUID, UUIDV4 } = db.Sequelize;

const GenrePref = db.define("genrepref", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
});

module.exports = GenrePref;
