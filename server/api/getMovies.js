// ./api/getMovies.js
const express = require("express");
const router = express.Router();
const { getMoviesForUser } = require("./genreFetchRoute");

router.get("/", async (req, res, next) => {
  try {
    // const userId = req.query.userId;
    const userId = req.query.userId;
    const movies = await getMoviesForUser(userId);
    res.json(movies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
