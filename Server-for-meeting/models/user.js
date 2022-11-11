const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    descriptiton: {
      type: String,
      default: 'Hello everyone!',
    },
    age: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    liked: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
