const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  actors: { type: String, required: true },
  plot: String,
  review: {type: String, required: false},
  imageURL: {type: String, required: false},
  users: {type: String, required: false},  
  date: { type: Date, default: Date.now }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
