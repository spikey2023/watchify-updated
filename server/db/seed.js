const {
  db,
  User,
  Genre,
  Movie,
  GenreMovie,
  GenrePref,
  UserWatched,
} = require("./index");

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
  } catch (err) {
    db.close();
  }
};

syncAndSeed();
