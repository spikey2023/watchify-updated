const userGenreRouter = require("express").Router();
const { Genre, GenrePref } = require("../db/index");

//GET /api/genres/user/:id  get user genre prefs
userGenreRouter.get("/:id", async (req, res, next) => {
  try {
    //this sends back the user genre prefs and token is still attached to headers
    const userGenrePrefs = await GenrePref.findAll({
      where: { userId: req.params.id },
      include: [{ model: Genre }],
    });
    res.json(userGenrePrefs);
  } catch (err) {
    res.status(500).json({
      message: "could not get user",
      error: err.message,
    });
  }
});

//PUT /api/genres/user/:id  update user genre prefs
//this probably won't work
userGenreRouter.put("/:id", async (req, res, next) => {
  try {
    //destroy all previous prefs
    await GenrePref.destroy({
      where: { userId: req.params.id },
    });

    //is this right?
    const newUserPrefs = req.body;
    await newUserPrefs.map((genrePref) => {
      GenrePref.bulkCreate({ userId: req.params.id, genreTmdbId: genrePref });
    });
    //return updated user genre prefs
    const userGenrePrefs = await GenrePref.findAll({
      where: { userId: req.params.id },
      include: [{ model: Genre }],
    });
    res.json(userGenrePrefs);
  } catch (err) {
    res.status(500).json({
      message: "could not update user genre preferences",
      error: err.message,
    });
  }
});

module.exports = userGenreRouter;
