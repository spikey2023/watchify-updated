const db = require("./db");
const { STRING, UUID, UUIDV4 } = db.Sequelize;
const jwt = require("jsonwebtoken");
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
    },
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
  },
});

User.addHook("beforeSave", async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 5);
  }
});

User.prototype.getUserByEmail = async function (email) {
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  return user;
};

//the above 2 functions are from andrew

/* generate token function
returns a signed jwt using the environment secret
*/
User.generateToken = (user) => {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET || "abigfatsecretword"
  );
};

/* encryptUser function (for registering new user)
returns a jwt token for the created user
*/

//User.encryptUser = async(user) => {
//create new user
//const { dataValues } = await User.create(user)
//return the jwt for the new user
//return User.generateToken(dataValues)
//}

/**
 create authenticate function
 *
 * Find the user based on the username
 * Compare the password in the db with the password provided by the user with bcrypt
 * If they match then generate a token for the user
 * If not throw an error
 */

User.authenticate = async ({ email, password }) => {
  //find user based on email
  const user = await User.findOne({
    where: { email: email },
  });
  //Compare the password in the db with the password provided by the user with bcrypt
  //If they match then generate a token for the user

  if (user && (await bcrypt.compare(password, user.password))) {
    return {
      user,
      headers: {
        authorization: User.generateToken(user),
      },
    };
    //return User.generateToken(user);
  }
  const error = Error("bad credentials");
  error.status = 401;
  throw error;
};

/**
 * create a User model function to validate the JWT passed
 */

User.validate = async (token) => {
  try {
    const { userId } = await jwt.verify(
      token,
      process.env.JWT_SECRET || "abigfatsecretword"
    );
    const user = await User.findByPk(userId);

    if (user) {
      return user;
    }
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  } catch (err) {
    const error = Error("bad credentials");
    error.status = 401;
    throw (error, err);
  }
};

module.exports = User;
