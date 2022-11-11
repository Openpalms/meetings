const express = require('express');
const { updateMany } = require('../models/user');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
  const userData = await User.find({
    email: req.query.login,
    password: req.query.password,
  });
  if (userData.length === 1) {
    res.json(userData);
  } else {
    res.json('error');
  }
});

router.post('/', async (req, res) => {
  const { firstName, lastName, email, password, age } = req.body;
  const verification = await User.find({
    email: email,
  });
  if (verification.length === 0) {
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      age: age,
    });
    user.save().then((data) => res.json('ok'));
  } else if (verification.length > 0) {
    res.json('This email is already in base');
  }
});

router.post('/image', (req, res) => {
  const { email, image } = req.body;
  User.updateOne({ email: email }, { image: image }, (error, doc) => {
    if (error) return console.log(err);
    res.json(doc);
  });
  // user.save().then((data) => res.status(200));
});
module.exports = router;
