import axios from "axios";

export default {
  // Gets all movies
  getMovies: function(user) {    
    return axios.get("/api/movies/" + user);
  },
  // Gets the movie with the given id
  getMovie: function(id) {
    return axios.get("/api/movieDetail/" + id);
  },
  // Deletes the movie with the given id
  deleteMovie: function(id) {
    return axios.delete("/api/movieDetail/" + id);
  },
  // Saves a movie to the database
  saveMovie: function(movieData) {
    return axios.post("/api/saveMovie", movieData);
  },
  saveUser: function(user) {
    return axios.post("/api/user", user);
  },
  verifyCredentials: function(username, password){
    return axios.get("api/user/" + username + "/" + password)
  }
};
// /api/user/:id/movies/