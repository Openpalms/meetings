const express = require('express');
const { isValidObjectId } = require('mongoose');
const user = require('../models/user');
const router = express.Router();
const User = require('../models/user');

// router.get('/', async (req, res) => {
//   const userData = await User.find();
//   res.send(console.log(userData));
// });
router.get('/users', async (req, res) => {
  if (req.query.liked === undefined) {
    const Users = await User.find({
      email: {
        $nin: req.query.email,
      },
    });
    res.json(Users);
  } else if (req.query.liked[0] !== undefined) {
    const likedId = req.query.liked[0];
    const Users = await User.find({
      email: {
        $nin: req.query.email,
      },
      _id: {
        $nin: likedId,
      },
    });
    res.json(Users);
  }
});

router.post('/liked', (req, res) => {
  const { email, liked } = req.body;

  User.updateOne(
    { email: email },
    { $push: { liked: liked } },
    (error, doc) => {
      if (error) return console.log(err);
      res.json(doc);
    }
  );
});

router.get('/list', async (req, res) => {
  const userList = await User.find({
    _id: req.query.id,
  });
  if (userList.length >= 1) {
    res.json(userList);
  } else {
    res.json('error');
  }
});

router.post('/desc', (req, res) => {
  const { descriptiton, email } = req.body;

  User.updateOne(
    { email: email },
    { descriptiton: descriptiton },
    (error, doc) => {
      if (error) return console.log(err);
      res.json(doc);
    }
  );
});
module.exports = router;
