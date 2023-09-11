const db = require('./db');
const { STRING, INTEGER } = db.Sequelize;

const Genre = db.define("genre", {
    tmdb_id: {
        type: INTEGER,
        primaryKey: true,
    },
    name: {
        type: STRING,
        allowNull: false,
        unique: true,
    }
});

module.exports = Genre;
