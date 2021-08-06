const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
  app.get("/api/jokes", JokeController.getAllJokes)
  app.post("/api/jokes", JokeController.addNewJokes)
  app.get("/api/jokes/:id", JokeController.getSingleJoke)
  app.put("/api/jokes/update/:id", JokeController.updateExistingJoke)
  app.delete("/api/jokes/delete/:id", JokeController.deleteExistingJoke)
}