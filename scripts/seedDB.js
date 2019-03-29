const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Movies collection and inserts the movies below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactmovieslist"
);

const movieSeed = [
  {
    title: "Title Test 1",
    actors: "Test Actors 1",
    plot: "Test Plot 1",
    review: "Test Review 1",
    imageURL: "https://test-ipv6.com/images/hires_ok.png",
    date: new Date(Date.now())
  },
  {
    title: "Title Test 2",
    actors: "Test Actors 2",
    plot: "Test Plot 2",
    review: "Test Review 2",
    imageURL: "https://test-ipv6.com/images/hires_ok.png",
    date: new Date(Date.now())
  }
  
];

db.Movie
  .remove({})
  .then(() => db.Movie.collection.insertMany(movieSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
