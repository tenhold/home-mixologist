require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const { PORT } = process.env;

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/mixologist', {useNewUrlParser: true});


app.get('/', (req, res) => {
  res.send('Hello?');
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`)
})