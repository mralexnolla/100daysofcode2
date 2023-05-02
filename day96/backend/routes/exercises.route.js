const router = require('express').Router();
let Exercisemodel = require('../models/exercise.model');

router.post("/add", (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercisemodel({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Execise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.get("/",(req, res) => {
  Exercisemodel.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  Exercisemodel.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post('/update/:id',(req, res)=>{
  Exercisemodel.findById(req.params.id)
    .then((exercise) => {
      if (exercise) {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
      }
      exercise.save()
        .then(() => res.json("Exercise Update"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
})

router.delete('/:id',(req, res) => {
  Exercisemodel.findByIdAndDelete(req.params.id)
  .then(() => res.json('Exercise deleted.'))
  .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router;