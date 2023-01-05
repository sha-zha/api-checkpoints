const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv').config();

/***************Mongodb configuratrion********************/
const mongoose = require('mongoose');
const configDB = require('./config/database.js');

mongoose.set('strictQuery', false);
mongoose.connect(configDB.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
})
  .then(() => {
    console.log('connection to database established successfully');
  })
  .catch(err => {
    console.log('An error occursed ', err);
  });

/***********************************/

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',apiRouter);

module.exports = app;
