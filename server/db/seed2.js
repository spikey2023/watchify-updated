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

const seed = async () => {
  try {
    await db.sync();
    console.log("DB Synced");

    // Seed Genre table
    await Promise.all(
      Object.keys(genreLookup).map((name) => {
        return Genre.upsert({ tmdb_id: genreLookup[name], name });
      })
    );
    console.log("Genre table seeded");
    const batchSize = 500;
    let movieBatch = [];
    let genreMovieBatch = [];
    const closeDb = async () => {
      await db.close();
    };
    const stream = fs
      .createReadStream(
        "/Users/micheletazbaz/Documents/Fullstack2303/Senior/watchify/watchify/movies.csv"
      )
      .pipe(csv())
      .on("data", (row) => {
        movieBatch.push({
          tmdb_id: row.id,
          title: row.title,
          vote_average: row.vote_average,
          vote_count: row.vote_count,
        });
        const genres = row.genres.split("-");

        genres.forEach((genreName) => {
          const genreId = genreLookup[genreName];
          if (genreId) {
            genreMovieBatch.push({
              movieTmdbId: row.id,
              genreTmdbId: genreId,
            });
          }
        });

        if (movieBatch.length >= batchSize) {
          stream.pause();

          Promise.all([
            ...movieBatch.map((record) => {
              return Movie.upsert(record);
            }),
            ...genreMovieBatch.map((record) => {
              return GenreMovie.upsert(record);
            }),
          ])
            .then(() => {
              movieBatch = [];
              genreMovieBatch = [];
              stream.resume();
            })
            .catch((err) => {
              console.error("Error in data event:", err);
              stream.destroy(err);
            });
        }
      })

      .on("end", async () => {
        if (movieBatch.length > 0 || genreMovieBatch.length > 0) {
          await Promise.all([
            ...movieBatch.map((record) => {
              return Movie.upsert(record);
            }),
            ...genreMovieBatch.map((record) => {
              return GenreMovie.upsert(record);
            }),
          ]);
        }
        console.log("CSV file successfully processed");
        await closeDb();
      })
      .on("error", (error) => {
        console.error(`Stream error: ${error}`);
        closeDb().catch((err) =>
          console.error("Failed to close the database:", err)
        );
      });
  } catch (error) {
    console.error(`Seed Failed:`, error);
    await db.close();
  }
};

seed();
