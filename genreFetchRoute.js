const { Sequelize, Model, DataTypes, Op } = require("sequelize");

// Initialize Sequelize and connect to the database
const db = new Sequelize("watchify", "kevinchoi", "password", {
  host: "localhost",
  dialect: "postgres", // or any other dialect you're using
});

// Function to get movies based on user's genre preferences
const getMoviesForUser = async (userId) => {
  // Step 1: Fetch the user's genre preferences
  const userGenrePrefs = await GenrePref.findAll({
    where: { userId },
  });

  const userPrefGenreIds = userGenrePrefs.map((pref) => pref.genreTmdbId);

  // Step 2: Fetch movies that match the user's genre preferences
  const matchingMovies = await Movie.findAll({
    include: [
      {
        model: GenreMovie,
        where: {
          genreTmdbId: {
            [Op.in]: userPrefGenreIds,
          },
        },
      },
    ],
    where: {
      vote_count: {
        [Op.gte]: 100,
      },
    },
    order: [["vote_average", "DESC"]],
    limit: 20,
  });

  return matchingMovies;
};

// Example usage
(async () => {
  const userId = "6f9f15de-c331-4274-8ac4-c055fe23dc7a"; // Replace with the actual user ID
  const recommendedMovies = await getMoviesForUser(userId);
  console.log(recommendedMovies);
})();
