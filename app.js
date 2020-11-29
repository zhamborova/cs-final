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
  const firebase = require("firebase-admin");
  var serviceAccount = require("./web-dev-db-firebase-adminsdk-x91jw-42b9658cb1.json");
  var config = {
    apiKey: "AIzaSyCSLmHe0D9T6d-ms7JhYU7O2FM-LGztQuM",
    authDomain: "web-dev-db.firebaseapp.com",
    databaseURL: "https://web-dev-db.firebaseio.com",
    projectId: "web-dev-db",
    storageBucket: "web-dev-db.appspot.com",
    messagingSenderId: "795302758366",
    appId: "1:795302758366:web:75350a7da03574f1fcff4f",
    measurementId: "G-SZQL25KFY4",
    credential: firebase.credential.cert(serviceAccount),
  };
  firebase.initializeApp(config);

  var db = firebase.database();
  var users = db.ref().child('users');
  users.on('value', snap => console.log(snap.val()));

  // const preObject = document.getElementById('object');
  //
  // const dbRefObject = firebase.database().ref().child('object')
  //
  // dbRefObject.on('value', snap => console.log(snap.val()));


}());
