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
    michele.save();
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
      meg2,
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
        tmdb_id: 615656,
        title: "Meg 2: The Trench",
        vote_average: 7.079,
        vote_count: 1365.0,
      }),
      Movie.create({
        tmdb_id: 758323,
        title: "The Pope's Exorcist",
        vote_average: 7.161,
        vote_count: 1899,
      }),
      Movie.create({
        tmdb_id: 667538,
        title: "Transformers: Rise of the Beasts",
        vote_average: 7.34,
        vote_count: 1007.0,
      }),
      Movie.create({
        tmdb_id: 640146,
        title: "Ant-Man and the Wasp: Quantumania",
        vote_average: 6.507,
        vote_count: 2811.0,
      }),
      Movie.create({
        tmdb_id: 677179,
        title: "Creed III",
        vote_average: 7.262,
        vote_count: 1129.0,
      }),
      Movie.create({
        tmdb_id: 614479,
        title: "Insidious: The Red Door",
        vote_average: 6.75,
        vote_count: 564.0,
      }),
      Movie.create({
        tmdb_id: 346698,
        title: "Barbie",
        vote_average: 7.495,
        vote_count: 2406.0,
      }),
      Movie.create({
        tmdb_id: 298618,
        title: "The Flash",
        vote_average: 6.947,
        vote_count: 1979.0,
      }),
      Movie.create({
        tmdb_id: 646389,
        title: "Plane",
        vote_average: 6.901,
        vote_count: 785.0,
      }),
      Movie.create({
        tmdb_id: 569094,
        title: "Spider-Man: Across the Spider-Verse",
        vote_average: 8.64,
        vote_count: 1684.0,
      }),
    ]);
    // await meg2.save();
    // await action.save();
    // console.log(meg2);
    // console.log(action.tmdb_id);

    await Promise.all([
      GenreMovie.create({
        movieTmdbId: meg2.tmdb_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: meg2.tmdb_id,
        genreTmdbId: scifi.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: meg2.tmdb_id,
        genreTmdbId: horror.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: popesExorcist.tmdb_id,
        genreTmdbId: horror.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: popesExorcist.tmdb_id,
        genreTmdbId: mystery.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: popesExorcist.tmdb_id,
        genreTmdbId: thriller.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: transformers.tmdb_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: transformers.tmdb_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: transformers.tmdb_id,
        genreTmdbId: scifi.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: antMan.tmdb_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: antMan.tmdb_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: antMan.tmdb_id,
        genreTmdbId: scifi.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: creed3.tmdb_id,
        genreTmdbId: drama.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: creed3.tmdb_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: insidious.tmdb_id,
        genreTmdbId: horror.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: insidious.tmdb_id,
        genreTmdbId: mystery.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: insidious.tmdb_id,
        genreTmdbId: thriller.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: barbie.tmdb_id,
        genreTmdbId: comedy.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: barbie.tmdb_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: barbie.tmdb_id,
        genreTmdbId: fantasy.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: flash.tmdb_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: flash.tmdb_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: flash.tmdb_id,
        genreTmdbId: scifi.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: plane.tmdb_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: plane.tmdb_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: plane.tmdb_id,
        genreTmdbId: thriller.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: spiderMan.tmdb_id,
        genreTmdbId: action.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: spiderMan.tmdb_id,
        genreTmdbId: adventure.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: spiderMan.tmdb_id,
        genreTmdbId: animation.tmdb_id,
      }),
      GenreMovie.create({
        movieTmdbId: spiderMan.tmdb_id,
        genreTmdbId: scifi.tmdb_id,
      }),
    ]);
    db.close();
  } catch (err) {
    db.close();
  }
};

syncAndSeed();
