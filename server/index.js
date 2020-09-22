const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const { PORT } = process.env

const app = express();

app.use(express.json());

const DB_URI = `mongodb://localhost/moixologist`;



//////////////////////////          CONNECTION TO THE DATABASE      ///////////////////////////

mongoose.connect(DB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log(`Server is running on port: ${PORT}`));

//////////////////////////////////////////////////////////////////////////////////////////////


// ////////////////////////          LISTEN TO THE SERVER          /////////////////////////
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`)
})

//////////////////////////////////////////////////////////////////////////////////////////////





// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const {User, router} = require('./routes/users');

// const app = express();
// const { PORT } = process.env;


// ////////////////////////          CONNECTION TO THE DATABASE          /////////////////////////
// mongoose.connect('mongodb://localhost/mixologist', {useNewUrlParser: true, useUnifiedTopology: true})
//   .then(() => `Server running on port ${PORT}`)

// const con = mongoose.connection;

// con.on('open', () => {
//   console.log('connected...');
// });

// app.use('/users', router)

// // app.get('/', (req, res) => {
// //   res.send('Hello?');
// // })
