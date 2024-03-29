const trainings = require('./routes/trainings')

const express = require("express");
require("dotenv").config(); // A .env fájlt olvassa
const app = express();

app.use('/api/trainings', trainings)

app.listen(
  process.env.PORT,
  console.log(`Server running on port ${process.env.PORT}`)
);
