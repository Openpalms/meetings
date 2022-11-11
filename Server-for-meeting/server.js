const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const PORT = 3001;

app.listen(PORT);
app.use(cors());
app.use(bodyParser.json());

//Import routes
const authRoute = require('./routes/auth');
const signUpRoute = require('./routes/signUp');

app.use('/auth', authRoute);

app.use('/sign-up', signUpRoute);

// /Connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log('connected to db')
);

////
module.exports = app;
