var express = require('express');
var router = express.Router();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/User');

/* GET Register. */
router.get('/register', ensureAuthenticated, function(req, res) {
  res.json({message: 'Get Register'});
});

/* GET Login */
router.get('/login', ensureAuthenticated, function(req, res) {
  // console.log(res);
  res.json({message: 'Get Login'});
});

/* POST Register User */
router.post('/register', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;

  //  Validation
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not a valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password', 'Password requires 4 to 20 characters').len(4, 20);
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors){
    res.json({errors: errors});
  } else {
    var newUser = new User({
      name: name,
      email:email,
      password: password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      console.log(user);
    });
    res.json({
      success: true,
      message: 'You are registered and can now login',
      email: newUser.email
    });
    // req.flash('success_msg', 'You are registered and can now login');
    // res.redirect('/users/login');
  }
});

passport.use(new LocalStrategy({usernameField: 'email'},
  function(username, password, done){
    User.getUserByEmail(username, function(err, user){
      if(err) throw err;
      if(!user){ return done(null, false, { success: false, message: 'Incorrect email.' }) }
      User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null, user);
        } else {
          return done(null, false, { success: false, message: 'Incorrect password.' });
        }
      });
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login', function(req, res, next ){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) { return res.json(info) }
    res.json({
      success: true,
      message: 'You are logged in',
      user: user
    });
  })(req, res, next);
});

router.get('/logout', function(req, res){
  req.logout();
  res.json({
    success: true,
    message: 'You are logged out'
  });
});

// router.post('/login',
//   passport.authenticate('local'),
//   //   {
//   //   successRedirect: '/',
//   //   failureRedirect: '/users/login',
//   //   failureFlash: true
//   // }),
//   function(req, res, info) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.json({
//       success: true,
//       message: 'You are logged in',
//       user: req.user
//     });
//     console.log(req.user);
//   });

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    res.redirect('/');
  } else {
    return next();
  }
}

module.exports = router;
