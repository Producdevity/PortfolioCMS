'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserAddCtrl
 * @description
 * # UserAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserAddCtrl', function (User, $location) {
    var vm = this;

    vm.user = {};

    vm.saveUser = function() {
      User.post(vm.user).then(function() {
        $location.path('/users');
      });
    };
  });
