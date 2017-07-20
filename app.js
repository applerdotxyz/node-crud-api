/* eslint-disable */
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const habitat = require('habitat');
const index = require('./routes/index');
/* eslint-enable */

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// My custom middleware
app.use((req, res, next) => {
  /* eslint-disable */
  console.log('VISITORS IP:', req.ip);
  /* eslint-enable */
  next();
});

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');

  err.status = 404;
  next(err);
});

if(process.env.NODE_ENV == 'dev') {
  habitat.load('.env.dev');
  app.listen(process.env.NODE_PORT);
}else if(process.env.NODE_ENV == 'prod') {
  habitat.load('.env.prod');
  app.lister(process.env.NODE_PORT);
}

/* eslint-disable */
module.exports = app; //@todo :: use es6 import/export
/* eslint-enable */
