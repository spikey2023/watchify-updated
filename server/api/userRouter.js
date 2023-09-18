const userRouter = require("express").Router();
const { User } = require("../db/index");

//GET /api/user/:id
userRouter.get("/:id", async (req, res, next) => {
  try {
    //console.log("!!!!", req.params.id);
    const user = await User.findByPk(req.params.id);
    console.log("#########", user.username);
    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: "could not get user",
      error: err.message,
    });
  }
});

module.exports = userRouter;
