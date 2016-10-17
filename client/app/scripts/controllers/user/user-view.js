'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserViewCtrl
 * @description
 * # UserViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserViewCtrl', function (User, $routeParams) {
    var vm = this;

    vm.viewUser = true;
    vm.user = User.one($routeParams.id).get().$object;

  });