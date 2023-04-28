const router = require('express').Router();
let Exercisemodel = require('../models/exercise.model');

router.get("/",(req, res) => {
  Exercisemodel.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add",(req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercisemodel({
    username,
    decsription,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Execise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;