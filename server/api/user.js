const router = require("express").Router();
const { User } = require("../db/index");

router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
