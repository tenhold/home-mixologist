require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {User, router} = require('./routes/users');

const app = express();
const { PORT } = process.env;


////////////////////////          CONNECTION TO THE DATABASE          /////////////////////////
mongoose.connect('mongodb://localhost/mixologist', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => `Server running on port ${PORT}`)

const con = mongoose.connection;

con.on('open', () => {
  console.log('connected...');
});

app.use('/users', router)

// app.get('/', (req, res) => {
//   res.send('Hello?');
// })



////////////////////////          LISTEN TO THE SERVER          /////////////////////////
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`)
})