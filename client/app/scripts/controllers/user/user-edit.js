'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserEditCtrl
 * @description
 * # UserEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserEditCtrl', function (User, $location, $routeParams) {
    var vm = this;

    vm.editUser = true;
    vm.user = {};

    User.one($routeParams.id).get().then(function(user) {
      vm.user = user;
      vm.saveUser = function() {
        console.log('saveUser');
        vm.user.save().then(function() {
          console.log('save.then');
          $location.path('/user/' + $routeParams.id);
        });
      };
    });

  });
