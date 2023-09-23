const { Sequelize, Op } = require("sequelize");
const {
  db,
  User,
  Genre,
  Movie,
  GenreMovie,
  GenrePref,
} = require("../db/index");

const getMoviesForUser = async (userId) => {
  // Fetch the user
  const user = await User.findByPk(userId);
  if (!user) {
    console.log("User not found.");
    return [];
  }

  // Fetch the user's genre preferences
  const userGenrePrefs = await GenrePref.findAll({
    where: { userId },
  });
  const userPrefGenreIds = userGenrePrefs.map((pref) => pref.genreTmdbId);

  // Fetch all movies with a vote_count of at least 100 and include their genres
  const moviesWithGenres = await Movie.findAll({
    where: {
      vote_count: {
        [Op.gte]: 100,
      },
    },
    include: {
      model: Genre,
      through: GenreMovie, // specifying the join table
      as: "genres", // alias
    },
  });

  // Filter movies by user's genre preferences and count matches
  const movieGenreCounts = {};
  moviesWithGenres.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (userPrefGenreIds.includes(genre.tmdb_id)) {
        movieGenreCounts[movie.tmdb_id] =
          (movieGenreCounts[movie.tmdb_id] || 0) + 1;
      }
    });
  });

  // Sort by number of genre matches and then by vote average
  const sortedMoviesWithGenres = moviesWithGenres
    .filter((movie) => movieGenreCounts[movie.tmdb_id])
    .sort((a, b) => {
      const countDiff =
        (movieGenreCounts[b.tmdb_id] || 0) - (movieGenreCounts[a.tmdb_id] || 0);
      if (countDiff !== 0) return countDiff;
      return b.vote_average - a.vote_average;
    })
    .slice(0, 15); // Take top 15 movies

  return sortedMoviesWithGenres;
};

module.exports = { getMoviesForUser };
