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

    const [andrew, spike, michele, kevin] = await Promise.all([
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

    const [
      action,
      adventure,
      animation,
      comedy,
      crime,
      documentary,
      drama,
      family,
      fantasy,
      history,
      horror,
      music,
      mystery,
      romance,
      scifi,
      tvmovie,
      thriller,
      war,
      western,
    ] = await Promise.all([
      Genre.create({
        tmdb_id: 28,
        name: "Action",
      }),
      Genre.create({
        tmdb_id: 12,
        name: "Adventure",
      }),
      Genre.create({
        tmdb_id: 16,
        name: "Animation",
      }),
      Genre.create({
        tmdb_id: 35,
        name: "Comedy",
      }),
      Genre.create({
        tmdb_id: 80,
        name: "Crime",
      }),
      Genre.create({
        tmdb_id: 99,
        name: "Documentary",
      }),
      Genre.create({
        tmdb_id: 18,
        name: "Drama",
      }),
      Genre.create({
        tmdb_id: 10751,
        name: "Family",
      }),
      Genre.create({
        tmdb_id: 14,
        name: "Fantasy",
      }),
      Genre.create({
        tmdb_id: 36,
        name: "History",
      }),
      Genre.create({
        tmdb_id: 27,
        name: "Horror",
      }),
      Genre.create({
        tmdb_id: 10402,
        name: "Music",
      }),
      Genre.create({
        tmdb_id: 9648,
        name: "Mystery",
      }),
      Genre.create({
        tmdb_id: 10749,
        name: "Romance",
      }),
      Genre.create({
        tmdb_id: 878,
        name: "Science Fiction",
      }),
      Genre.create({
        tmdb_id: 10770,
        name: "TV Movie",
      }),
      Genre.create({
        tmdb_id: 53,
        name: "Thriller",
      }),
      Genre.create({
        tmdb_id: 10752,
        name: "War",
      }),
      Genre.create({
        tmdb_id: 37,
        name: "Western",
      }),
    ]);
    await Promise.all([
      GenrePref.create({
        userId: michele.id,
        genreTmdbId: comedy.tmdb_id,
      }),
      GenrePref.create({
        userId: michele.id,
        genreTmdbId: romance.tmdb_id,
      }),
      GenrePref.create({
        userId: michele.id,
        genreTmdbId: documentary.tmdb_id,
      }),
      GenrePref.create({
        userId: michele.id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenrePref.create({
        userId: michele.id,
        genreTmdbId: mystery.tmdb_id,
      }),
    ]);
  } catch (err) {
    console.log(err);
  }
  db.close();
};

syncAndSeed();
