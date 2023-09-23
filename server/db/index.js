const db = require("./db");
const User = require("./User");
const Genre = require("./Genre");
const Movie = require("./Movie");
const GenreMovie = require("./GenreMovie");
const GenrePref = require("./GenrePref");
const UserWatched = require("./UserWatched");

User.hasMany(GenrePref);
GenrePref.belongsTo(User);
GenrePref.belongsTo(Genre);
Movie.hasMany(GenreMovie);
GenreMovie.belongsTo(Movie);
GenreMovie.belongsTo(Genre);
User.hasMany(UserWatched);
UserWatched.belongsTo(User);
UserWatched.belongsTo(Movie);
Genre.hasMany(GenreMovie);

Movie.belongsToMany(Genre, { through: GenreMovie, as: "genres" });
Genre.belongsToMany(Movie, { through: GenreMovie });

module.exports = {
  db,
  User,
  Genre,
  Movie,
  GenreMovie,
  GenrePref,
  UserWatched,
};
