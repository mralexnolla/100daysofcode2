const express = require("express");
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");

//environmental variables in the dotenv file
require("dotenv").config();

//express server
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
//app.use(cors());

const uri = process.env.COMPASS_URI;

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log(
    `MongoDB database connection established successfully`.bgGreen.white
  );
});

const exercisesRouter = require("./routes/exercises.route");
const usersRouter = require("./routes/users.route");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is runnin on port ${port}`.bgWhite.green);
});


