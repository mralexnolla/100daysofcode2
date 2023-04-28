const router = require("express").Router();
let Usermodel = require("../models/user.model");

router.get("/",(req, res) => {
  Usermodel.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Err: " + err));
});

router.post("/add",(req, res) => {
  const username = req.body.username;
  const newUser = new Usermodel({ username });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
