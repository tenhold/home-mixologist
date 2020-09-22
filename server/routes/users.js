const mongoose = require('mongoose');
const router = require('express').Router();
const { Schema } = mongoose;


/**
 * GET: localhost:8080/users
 * POST: localhost:8080/users/add
 * UPDATE: localhost:8080/users/:id
 * DELETE: localhost:8080/users/:id
 */





const userSchema = new Schema({
  username: String
});

const User = mongoose.model('User', userSchema);


router.route('/').get((req, res) => {
  console.log('GET REQUEST')
});

router.route('/add').post((req, res) => {
  console.log(req)
  res.send('hello');
  res.end();
  // const { username } = req.body;
  // console.log(username);

  // const newUser = new User({ username })

  // newUser.save()
  //   .then(() => {
  //     console.log(username)
  //     res.sendStatus(201);
  //   })
});


module.exports = {
  User,
  router
}