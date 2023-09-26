const express = require("express");
const router = express.Router();
const { Genre } = require("../db/index");

//GET  /api/getGenres
router.get("/", async (req, res, next) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
