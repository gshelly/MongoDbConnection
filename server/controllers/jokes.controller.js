const Joke = require('../models/jokes.models')

const getAllJokes = ((req, res) => {
  Joke.find()
  .then((jokes) => res.json({allJokes: jokes}))
  .catch((err) => res.json({errorMessage: err}))
})

const addNewJokes = (req, res) => {
  Joke.create({
    setup: req.body.setup,
    punchline: req.body.punchline
  })
  .then(newJoke => res.json({newJoke: newJoke}))
  .catch((err) => res.json({errorMessage: err}))
}

const getSingleJoke = ((req, res) => {
  Joke.findOne({_id: req.params.id})
  .then((joke) => res.json({singleJoke: joke}))
  .catch((err) => res.json({errorMessage: err}))
})

const updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate(
    {_id: req.params.id},
    req.body
    )
    .then((updatedJoke => res.json({updatedJoke: updatedJoke})))
    .catch((err) => res.json({errorMessage: err}))
}

const deleteExistingJoke = (req, res) => {
  Joke.deleteOne({_id: req.params.id})
    .then((deletedJoke => res.json({deletedJoke: deletedJoke})))
    .catch((err) => res.json({errorMessage: err}))
}

module.exports = {
  getAllJokes,
  addNewJokes,
  getSingleJoke,
  updateExistingJoke,
  deleteExistingJoke
}