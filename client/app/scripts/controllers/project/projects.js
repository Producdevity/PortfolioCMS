'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProjectsController
 * @description
 * # ProjectsController
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProjectsController', function (Project) {
    var vm = this;

    vm.projects = Project.getList().$object;

  });

// yo angular:route project-add --uri=create/project
// yo angular:route project-view --uri=project/:id
// yo angular:route project-delete --uri=project/:id/delete
// yo angular:route project-edit --uri=project/:id/edit