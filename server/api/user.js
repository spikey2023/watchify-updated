const router = require("express").Router();
const { User, GenrePref } = require("../db/index");

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
        const newUser = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        }

        //create the new user entry in the database
        const user = await User.create(newUser);

        //with the new user created, use its ID to make the new genre pref entries
        for(let i = 0; i < req.body.genres.length; i++){
          await GenrePref.create({
            userId: user.dataValues.id,
            genreTmdbId: req.body.genres[i],
          })
        }

        res.json(user);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
