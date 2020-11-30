var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/news');
var eventRouter = require('./routes/event');
var eventsRouter = require('./routes/events');
var registeredUsersRouter = require('./routes/users')
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8081);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())

app.use('/', indexRouter);
app.use('/news', usersRouter);
app.use('/events', eventRouter);
app.use('/events', eventsRouter);
app.use('/users', registeredUsersRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


(function() {


  // const preObject = document.getElementById('object');
  //
  // const dbRefObject = firebase.database().ref().child('object')
  //
  // dbRefObject.on('value', snap => console.log(snap.val()));


}());
