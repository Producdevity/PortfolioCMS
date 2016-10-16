'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProjectEditCtrl
 * @description
 * # ProjectEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProjectEditCtrl', function (Project, $location, $routeParams) {
    var vm = this;

    vm.editProject = true;
    vm.project = {};

    Project.one($routeParams.id).get().then(function(project) {
      vm.project = project;
      vm.saveProject = function() {
        vm.project.save().then(function() {
          $location.path('/project/' + $routeParams.id);
        });
      };
    });

  });
