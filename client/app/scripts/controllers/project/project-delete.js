'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProjectDeleteCtrl
 * @description
 * # ProjectDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProjectDeleteCtrl', function (Project, $location, $routeParams) {
    var vm = this;

    vm.project = Project.one($routeParams.id).get().$object;

    vm.deleteProject = function() {
      vm.project.remove().then(function() {
        $location.path('/projects');
      });
    };

    vm.back = function() {
      $location.path('/project/' + $routeParams.id);
    };

  });
