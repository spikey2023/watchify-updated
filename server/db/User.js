const db = require('./db');
const { STRING, UUID, UUIDV4 } = db.Sequelize;
const bcrypt = require("bcrypt");

const User = db.define("user", {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    username: {
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

User.addHook("beforeSave", async (user) => {
    if (user.changed("password")) {
      user.password = await bcrypt.hash(user.password, 5);
    }
});

User.prototype.getUserByEmail = async function (email){
    const user = await user.find({where: {
        email: email
    }});
    return user;
}


module.exports = User;
