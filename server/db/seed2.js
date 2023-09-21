const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");
const { db, User, Genre, Movie, GenreMovie, GenrePref } = require("./index");

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
    await db.sync({ force: true });
    console.log("DB Synced");

    // Seed Genre table
    const genrePromises = Object.keys(genreLookup).map((genreName) => {
      return Genre.upsert({
        tmdb_id: genreLookup[genreName],
        name: genreName,
      });
    });
    await Promise.all(genrePromises);
    console.log("Genre table seeded");

    // Seed User table
    const users = await Promise.all([
      User.create({
        username: "andrew",
        email: "andrew@aol.com",
        password: "123",
      }),
      User.create({
        username: "spike",
        email: "spike@aol.com",
        password: "123",
      }),
      User.create({
        username: "michele",
        email: "michele@aol.com",
        password: "123",
      }),
      User.create({
        username: "kevin",
        email: "kevin@aol.com",
        password: "123",
      }),
    ]);
    console.log("User table seeded");

    // Seed GenrePref table
    const genrePrefPromises = [];
    users.forEach((user) => {
      genrePrefPromises.push(
        GenrePref.create({
          userId: user.id,
          genreTmdbId: 28,
        }),
        GenrePref.create({
          userId: user.id,
          genreTmdbId: 12,
        })
      );
    });

    await Promise.all(genrePrefPromises);
    console.log("GenrePref table seeded");

    // Seed Movie and GenreMovie tables
    const batchSize = 500;
    let batch = [];
    let genreMovieBatch = [];

    const stream = fs
      .createReadStream(path.join(process.cwd(), "movies.csv"))
      .pipe(csv())
      .on("data", (row) => {
        batch.push({
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

        if (batch.length >= batchSize) {
          stream.pause();
          Promise.all(
            batch.map((record) => Movie.upsert(record)),
            genreMovieBatch.map((record) => GenreMovie.upsert(record))
          )
            .then(() => {
              batch = [];
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
        if (batch.length > 0 || genreMovieBatch.length > 0) {
          await Promise.all(
            batch.map((record) => Movie.upsert(record)),
            genreMovieBatch.map((record) => GenreMovie.upsert(record))
          );
        }
        console.log("CSV file successfully processed");
        await db.close();
      })
      .on("error", (error) => {
        console.error(`Stream error: ${error}`);
        db.close().catch((err) => {
          console.error("Error closing database:", err);
        });
      });
  } catch (error) {
    console.error(`Seed Failed:`, error);
    await db.close();
  }
};

seed();
