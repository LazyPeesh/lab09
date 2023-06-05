var mongoose = require('mongoose');

var MovieSchemer = mongoose.Schema(
    {
        title: String,
        actor: String,
        director: String,
        year: Number,
        poster: String,
        trailer: String
    }
);

var MovieModel = mongoose.model("movie", MovieSchemer, "movie");
module.exports = MovieModel;