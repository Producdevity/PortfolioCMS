'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProjectAddCtrl
 * @description
 * # ProjectAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProjectAddCtrl', function (Project, $location) {
    var vm = this;

    vm.project = {};

    vm.saveProject = function() {
      Project.post(vm.project).then(function() {
        $location.path('/projects');
      });
    };
  });
