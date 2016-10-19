var express = require('express');
var router = express.Router();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/User');

/* GET Register. */
router.get('/register', ensureAuthenticated, function(req, res) {
  res.render('register', { title: 'Register' });
});

/* GET Login */
router.get('/login', ensureAuthenticated, function(req, res) {
  res.render('login', { title: 'Login' });
});

/* POST Register User */
router.post('/register', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;

  //  Validation
  // req.checkBody('name', 'Name is required').notEmpty();
  // req.checkBody('email', 'Email is required').notEmpty();
  // req.checkBody('email', 'Email is not a valid').isEmail();
  // req.checkBody('password', 'Password is required').notEmpty();
  // req.checkBody('password', 'Password requires 4 to 20 characters').len(4, 20);
  // req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  //
  // var errors = req.validationErrors();
  //
  // if(errors){
  //   res.render('register', {errors: errors});
  // } else {
  //   var newUser = new User({
  //     name: name,
  //     email:email,
  //     password: password
  //   });
  //
  //   User.createUser(newUser, function(err, user){
  //     if(err) throw err;
  //     console.log(user);
  //   });
  //
  //   req.flash('success_msg', 'You are registered and can now login');
  //   res.redirect('/users/login');
  // }

});



module.exports = router;
