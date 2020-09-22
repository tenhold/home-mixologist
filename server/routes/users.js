const { concat } = require('lodash');
const mongoose = require('mongoose');
const router = require('express').Router();
const { Schema } = mongoose;


/**
 * GET: localhost:8080/users
 * POST: localhost:8080/users/add
 * UPDATE: localhost:8080/users/:id
 * DELETE: localhost:8080/users/:id
 */


// user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
});

// user model
const User = mongoose.model('User', userSchema);

router.route('/').get((req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
      res.end();
    })
    .catch(err => res.sendStatus(404));
});

router.route('/add').post(async(req, res) => {
  const { username } = req.body;
  console.log(req.body);
  
  const newUser = new User({ username })

  await newUser.save()
  try {
    res.json('user added!')
  } catch(err) {
    res.sendStatus(404);
  }
})

module.exports = {
  User,
  router
}