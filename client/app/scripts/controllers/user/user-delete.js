'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserDeleteCtrl
 * @description
 * # UserDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserDeleteCtrl', function (User, $location, $routeParams) {
    var vm = this;

    vm.user = User.one($routeParams.id).get().$object;

    vm.deleteUser = function() {
      vm.user.remove().then(function() {
        $location.path('/users');
      });
    };

    vm.back = function() {
      $location.path('/user/' + $routeParams.id);
    };
  });
