var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var methodOverride = require('method-override');
var morgan = require('morgan');
var _ = require('lodash');


// Create the application
var app = express();

// Set logger
app.use(morgan('dev'));
// Add Middleware necessary for REST API's
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(cookieParser());

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));
// app.use(methodOverride());

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// In this example, the formParam value is going to get morphed into form body format useful for printing.
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio');
mongoose.connection.once('open', function() {

  // use '/auth' for passport routes
  var auth = require('./routes/passport');
  app.use('/auth', auth);
  // var Resource = require('resourcejs');
  // var User = require('./models/User');
  // var AuthRouter = require('./controllers/AuthController');
  // Resource(app, '/auth', 'user', User).rest();

  // Load all the models (Schema)
  app.models = require('./models/index');
  // Load all the routes
  var routes = require('./routes');

  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });

  console.log('Listening on port 3000...');
  app.listen(3000);
});
