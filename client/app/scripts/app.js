'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000/api');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      })
      .when('/projects', {
        templateUrl: 'views/project/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'vm'
      })
      .when('/create/project', {
        templateUrl: 'views/project/project-add.html',
        controller: 'ProjectAddCtrl',
        controllerAs: 'vm'
      })
      .when('/project/:id', {
        templateUrl: 'views/project/project-view.html',
        controller: 'ProjectViewCtrl',
        controllerAs: 'vm'
      })
      .when('/project/:id/delete', {
        templateUrl: 'views/project/project-delete.html',
        controller: 'ProjectDeleteCtrl',
        controllerAs: 'vm'
      })
      .when('/project/:id/edit', {
        templateUrl: 'views/project/project-edit.html',
        controller: 'ProjectEditCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('ProjectRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Project', function(ProjectRestangular) {
    return ProjectRestangular.service('project');
  })
  .directive('preview', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/directives/preview.html'
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });