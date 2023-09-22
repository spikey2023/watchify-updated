const router = require("express").Router();
const { User } = require("../db/index");

router.get("/:id", async (req, res, next) => {
    const param = req.params.id;

    //check the :id to see if it includes an @. If it does, that means we're trying to see
    //if that email exists in the db already
    if(param.includes("@")){
        const user = await User.findOne({where: {email: param}});
        res.send(user);
    }
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