'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProjectViewCtrl
 * @description
 * # ProjectViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProjectViewCtrl', function (Project, $routeParams) {
    var vm = this;

    vm.viewProject = true;
    vm.project = Project.one($routeParams.id).get().$object;

  });
