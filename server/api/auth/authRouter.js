const authRouter = require("express").Router();
const { User } = require("../../db/index");

//Post /api/auth/login
authRouter.post("/login", async (req, res, next) => {
  try {
    const user = await User.authenticate(req.body);

    res.send(user);
  } catch (error) {
    res.status(500).json({
      message: "could not login user",
      error: err.message,
    });
  }
});

module.exports = authRouter;
