const express = require("express");
const router = express.Router();
const { UserWatched, Movie } = require("../db/index");

router.post("/", async (req, res, next) => {
  const { userId, movieTmdbId, rating } = req.body;
  console.log("Incoming Data for /api/updateRating:", req.body);

  // Validation
  if (!userId || !movieTmdbId || rating == null) {
    return res.status(400).json({
      success: false,
      error: "userId, movieTmdbId, and rating are required.",
    });
  }

  // rating range validation
  if (rating < 0 || rating > 10) {
    return res
      .status(400)
      .json({ success: false, error: "Rating must be between 0 and 10." });
  }

  try {
    //Creating new entry for User watched Movie with movie rating
    await UserWatched.create({ userId, movieTmdbId, rating });

    // Fetching the movie to update its vote_count and vote_average
    const movie = await Movie.findOne({ where: { tmdb_id: movieTmdbId } });
    if (!movie) {
      return res
        .status(404)
        .json({ success: false, error: "Movie not found." });
    }

    // Updating vote_count and vote_average
    const newVoteCount = movie.vote_count + 1;
    const newVoteAverage =
      (movie.vote_average * movie.vote_count + rating) / newVoteCount;
    await movie.update({
      vote_count: newVoteCount,
      vote_average: newVoteAverage,
    });

    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
