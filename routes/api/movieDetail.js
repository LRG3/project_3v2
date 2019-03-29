const router = require("express").Router();
const moviesController = require("../../controllers/moviesController");


router
  .route("/:id")
  .get(moviesController.findById)
  .put(moviesController.update)
  .delete(moviesController.remove);


module.exports = router;