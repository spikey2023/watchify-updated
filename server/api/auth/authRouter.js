const authRouter = require("express").Router();
const { User } = require("../../db/index");

//Post /api/auth/login
authRouter.post("/login", async (req, res, next) => {
  try {
    //console.log("!!!!", req.body);
    const user = await User.authenticate(req.body);
    //console.log("USER", user);
    res.send(user);
  } catch (error) {
    res.status(500).json({
      message: "could not login user",
      error: err.message,
    });
  }
});

module.exports = authRouter
