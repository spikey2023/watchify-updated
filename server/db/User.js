const db = require('./db');
const { STRING, UUID, UUIDV4 } = db.Sequelize;

const User = db.define("user", {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
        unique: true,
    },
    password: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    }
});

module.exports = User;
