const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { ObjectId: ObjectIdType } = mongoose.Schema.Types

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  age: { type: String, required: false },
  gender: { type: String, required: false },
  occupation: { type: String, required: false },
  facebook: { type: String, required: false },
  twitter: { type: String, required: false },
  instagram: { type: String, required: false },  
  snapchat: {type: String, required: false},
  youtube: {type: String, required: false},
  date: { type: Date, default: Date.now },
  // movies: [{ ref: 'Movie', type: ObjectIdType }],
});

// User.find({}).populate('movies').exec()

// User.findOneAndUpdate({ _id: userId }, { $addToSet: { movies: movie._id } })
// User.findOneAndUpdate({ _id: userId }, { $pull: { movies: movie._id } })

const User = mongoose.model("User", userSchema);

module.exports = User;
