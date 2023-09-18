const { Sequelize, Op } = require("sequelize");
const {
  db,
  User,
  Genre,
  Movie,
  GenreMovie,
  GenrePref,
} = require("./server/db/index");

const getMoviesForUser = async (userId) => {
  //Fetch the user's genre preferences
  const userGenrePrefs = await GenrePref.findAll({
    where: { userId },
  });
  const userPrefGenreIds = userGenrePrefs.map((pref) => pref.genreTmdbId);

  //Fetch all movies with a vote_count of at least 100
  const allMovies = await Movie.findAll({
    where: {
      vote_count: {
        [Op.gte]: 100,
      },
    },
  });

  //Fetch genre associations for those movies
  const allMovieIds = allMovies.map((movie) => movie.tmdb_id);
  const allGenreMovies = await GenreMovie.findAll({
    where: {
      movieTmdbId: {
        [Op.in]: allMovieIds,
      },
    },
  });

  //Filter movies by user's genre preferences and count matches
  const movieGenreCounts = {};
  allGenreMovies.forEach((gm) => {
    if (userPrefGenreIds.includes(gm.genreTmdbId)) {
      movieGenreCounts[gm.movieTmdbId] =
        (movieGenreCounts[gm.movieTmdbId] || 0) + 1;
    }
  });

  //Sort by number of genre matches and then by vote average
  const sortedMovies = allMovies
    .filter((movie) => movieGenreCounts[movie.tmdb_id])
    .sort((a, b) => {
      const diff = movieGenreCounts[b.tmdb_id] - movieGenreCounts[a.tmdb_id];
      if (diff !== 0) return diff;
      return b.vote_average - a.vote_average;
    })
    .slice(0, 20); // Take top 20 movies

  return sortedMovies;
};

(async () => {
  const userId = "6f9f15de-c331-4274-8ac4-c055fe23dc7a";
  const recommendedMovies = await getMoviesForUser(userId);
  console.log("HERE ARE THE RECOMMENDED MOVIES", recommendedMovies);
})();
