const router = require("express").Router();
const { User } = require("../db/index");

router.get("/:id", async (req, res, next) => {
    console.log(req.params.id);
    try {
    } catch (err) {
      next(err);
    }
  });

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