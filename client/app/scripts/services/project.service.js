'use strict';

/**
 * @ngdoc function
 * @name clientApp.service:Project
 * @description
 * # ProjectRestangular, Project
 * Factory for the projects
 */
angular.module('clientApp')
  .factory('ProjectRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Project', function(ProjectRestangular) {
    return ProjectRestangular.service('project');
  });
