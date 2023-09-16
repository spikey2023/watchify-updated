const db = require('./db');
const { STRING, UUID, UUIDV4 } = db.Sequelize;
const bcrypt = require("bcrypt");

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT = process.env.JWT_SECRET;
// //create a function to generate a web token
// User.generateToken=(user)=>{
//     return jwt.sign({id:user.id},JWT)
// }

// //create ecryptUser function

// User.encryptUser = async (user) =>{
//     const { dataValues } = await User.create(user)
//     return User.generateToken(dataValues)
// }
// //authenticate user

// User.authenticate = async function ({ username, password }) {
//     const user = await User.findOne({
//       where: {
//         username,
//       },
//     });
//     if (user && (await bcrypt.compare(password, user.password))) {
//       return jwt.sign({ id: user.id }, JWT);
//     }
//     const error = new Error('bad credentials');
//     error.status = 401;
//     throw error;
//   };

  
//   User.addHook('beforeSave', async (user) => {
//     if (user.changed('password')) {
//       user.password = await bcrypt.hash(user.password, 5);
//     }
//   });

//   // Create a User model function to validate JWT passed
//   User.findByToken = async function (token) {
//     try {
//       const { id } = jwt.verify(token, process.env.JWT);
//       const user = await this.findByPk(id);
//       if (user) {
//         return user;
//       }
//       throw 'user not found';
//     } catch (ex) {
//       const error = new Error('bad credentials');
//       error.status = 401;
//       throw error;
//     }
//   };

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
