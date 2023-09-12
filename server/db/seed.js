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
    const [
      Meg2,
      popesExorcist,
      transformers,
      antMan,
      creed3,
      insidious,
      barbie,
      flash,
      plane,
      spiderMan,
    ] = await Promise.all([
      Movie.create({
        tmbd_id: "615656",
        title: "Meg 2: The Trench",
        vote_average: "7.079",
        vote_count: "1365.0",
      }),
      Movie.create({
        tmbd_id: "758323",
        title: "The Pope's Exorcist",
        vote_average: "Chief Exorcist of the Vatican.",
        vote_count: "7.433",
      }),
      Movie.create({
        tmbd_id: "667538",
        title: "Transformers: Rise of the Beasts",
        vote_average: "7.34",
        vote_count: "1007.0",
      }),
      Movie.create({
        tmbd_id: "640146",
        title: "Ant-Man and the Wasp: Quantumania",
        vote_average: "6.507",
        vote_count: "2811.0",
      }),
      Movie.create({
        tmbd_id: "677179",
        title: "Creed III",
        vote_average: "7.262",
        vote_count: "1129.0",
      }),
      Movie.create({
        tmbd_id: "614479",
        title: "Insidious: The Red Door",
        vote_average: "6.75",
        vote_count: "564.0",
      }),
      Movie.create({
        tmbd_id: "346698",
        title: "Barbie",
        vote_average: "7.495",
        vote_count: "2406.0",
      }),
      Movie.create({
        tmbd_id: "298618",
        title: "The Flash",
        vote_average: "6.947",
        vote_count: "1979.0",
      }),
      Movie.create({
        tmbd_id: "646389",
        title: "Plane",
        vote_average: "6.901",
        vote_count: "785.0",
      }),
      Movie.create({
        tmbd_id: "569094",
        title: "Spider-Man: Across the Spider-Verse",
        vote_average: "8.64",
        vote_count: "1684.0",
      }),
    ]);
    await Promise.all([
      GenreMovie.create({
        movieTmbdId: Meg2.tmbd_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: Meg2.tmbd_id,
        genreTmdbId: scifi.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: Meg2.tmbd_id,
        genreTmdbId: horror.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: popesExorcist.tmbd_id,
        genreTmdbId: horror.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: popesExorcist.tmbd_id,
        genreTmdbId: mystery.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: popesExorcist.tmbd_id,
        genreTmdbId: thriller.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: transformers.tmbd_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: transformers.tmbd_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: transformers.tmbd_id,
        genreTmdbId: scifi.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: antMan.tmbd_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: antMan.tmbd_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: antMan.tmbd_id,
        genreTmdbId: scifi.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: creed3.tmbd_id,
        genreTmdbId: drama.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: creed3.tmbd_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: insidious.tmbd_id,
        genreTmdbId: horror.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: insidious.tmbd_id,
        genreTmdbId: mystery.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: insidious.tmbd_id,
        genreTmdbId: thriller.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: barbie.tmbd_id,
        genreTmdbId: comedy.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: barbie.tmbd_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: barbie.tmbd_id,
        genreTmdbId: fantasy.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: flash.tmbd_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: flash.tmbd_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: flash.tmbd_id,
        genreTmdbId: scifi.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: plane.tmbd_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: plane.tmbd_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: plane.tmbd_id,
        genreTmdbId: thriller.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: spiderMan.tmbd_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: spiderMan.tmbd_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: spiderMan.tmbd_id,
        genreTmdbId: animation.tmdb_id,
      }),
      GenreMovie.create({
        movieTmbdId: spiderMan.tmbd_id,
        genreTmdbId: scifi.tmdb_id,
      }),
    ]);
    db.close();
  } catch (err) {
    db.close();
  }
};

syncAndSeed();

// tmbd_id: "615656",
//     title: "Meg 2: The Trench",
//     genres: "Action-Science Fiction-Horror",
//     vote_average: "7.079",
//     vote_count: "1365.0",

// tmbd_id: "758323",
// title: "The Pope's Exorcist",
// genres: "Horror-Mystery-Thriller",
// vote_average: "Chief Exorcist of the Vatican.",
// vote_count: "7.433",

// tmbd_id: "667538",
// title: "Transformers: Rise of the Beasts",
// genres: "Action-Adventure-Science Fiction",
// vote_average: "7.34",
// vote_count: "1007.0",

// tmbd_id: "640146",
// title: "Ant-Man and the Wasp: Quantumania",
// genres: "Action-Adventure-Science Fiction",
// vote_average: "6.507",
// vote_count: "2811.0",

// tmbd_id: "677179",
// title: "Creed III",
// genres: "Drama-Action",
// vote_average: "7.262",
// vote_count: "1129.0",

// tmbd_id: "614479",
// title: "Insidious: The Red Door",
// genres: "Horror-Mystery-Thriller",
// vote_average: "6.75",
// vote_count: "564.0",

// tmbd_id: "346698",
// title: "Barbie",
// genres: "Comedy-Adventure-Fantasy",
// vote_average: "7.495",
// vote_count: "2406.0",

// tmbd_id: "298618",
// title: "The Flash",
// genres: "Action-Adventure-Science Fiction",
// vote_average: "6.947",
// vote_count: "1979.0",

// tmbd_id: "646389",
// title: "Plane",
// genres: "Action-Adventure-Thriller",
// vote_average: "6.901",
// vote_count: "785.0",

// tmbd_id: "569094",
// title: "Spider-Man: Across the Spider-Verse",
// genres: "Action-Adventure-Animation-Science Fiction",
// vote_average: "8.64",
// vote_count: "1684.0",
