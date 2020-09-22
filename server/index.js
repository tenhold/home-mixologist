const express = require('express');
const mongoose = require('mongoose');
const {Users, router} = require('./routes/users')



require('dotenv').config();
const { PORT } = process.env

const app = express();

app.use(express.json());

const DB_URI = `mongodb://localhost/moixologist`;


//////////////////////////          CONNECTION TO THE DATABASE      ///////////////////////////

mongoose.connect(DB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log(`Server is running on port: ${PORT}`))
  .catch((err) => console.log('ERROR DB connection ', err));

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


app.use('/users', router);





// ////////////////////////          LISTEN TO THE SERVER          /////////////////////////
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`)
})

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

