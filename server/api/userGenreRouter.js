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

module.exports = userGenreRouter;
