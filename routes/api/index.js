const router = require("express").Router();
const movieRoutes = require("./movies");
const userRoutes = require("./user")
const saveMovieRoutes = require("./saveMovie")
const movieDetail = require("./movieDetail")

// Movie routes
router.use("/movies", movieRoutes);
router.use("/user", userRoutes);
router.use("/saveMovie", saveMovieRoutes);
router.use("/movieDetail", movieDetail);

module.exports = router;
