const db = require("../models");

// Defining methods for the moviesController
module.exports = {
  findAll: function (req, res) {
    var user = req.params.user    
    db.Movie
      .find({users: user})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function (req, res) {
    var user = req.params.user
    console.log(user)
    db.Movie
    // NEED TO GET QUERY FIGURED OUT TO FIND MOVIES WITH THE CURRENT USER IN USERS
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  findById: function (req, res) {
    
    db.Movie
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Movie
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Movie
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Movie
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
