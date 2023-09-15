const fs = require("fs");
const csv = require("csv-parser");
const {
  db,
  User,
  Genre,
  Movie,
  GenreMovie,
  GenrePref,
  UserWatched,
} = require("./index");

// A lookup object for genre names to their tmdb_ids
const genreLookup = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

async function seed() {
  try {
    await db.sync();
    fs.createReadStream("../../movies.csv")
      .pipe(csv())
      .on("data", async (row) => {
        const movie = await Movie.create({
          tmdb_id: row.id,
          title: row.title,
          vote_average: row.vote_average,
          vote_count: row.vote_count,
        });

        // Split the genres and associate them with the movie
        const genres = row.genres.split("-");
        for (const genreName of genres) {
          const genreId = genreLookup[genreName.trim()];
          // Remove extra spaces if any

          // Create a GenreMovie entry linking the two
          await GenreMovie.create({
            movieTmdbId: movie.tmdb_id,
            genreTmdbId: genreId,
          });
        }
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });
  } catch (error) {
    console.error(`Seed Failed:`, error);
  }
  await db.close();
}

// Run the seed function
seed().catch((error) => {
  console.log("Seeding failed:", error);
});
