const userRouter = require("express").Router();
const { User } = require("../db/index");

//GET /api/user/:id
userRouter.get("/:id", async (req, res, next) => {
  try {
    //this sends back the user and token is still attached to headers
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: "could not get user",
      error: err.message,
    });
  }
});

//PUT /api/user/:id  update user account info(username, password, email)
userRouter.put("/:id", async (req, res, next) => {
  try {
    console.log("req.params.id", req.params.id);
    const user = await User.findByPk(req.params.id);
    console.log("updated", user);
    const updated = await user.update(req.body);
    console.log("updated", updated);
    res.send(updated);
  } catch (err) {
    res.status(500).json({
      message: "could not update user",
      error: err.message,
    });
  }
});

module.exports = userRouter;
