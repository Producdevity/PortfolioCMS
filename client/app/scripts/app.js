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
        controller: 'ProjectsCtrl',
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
      .when('/users', {
        templateUrl: 'views/user/users.html',
        controller: 'UserCtrl',
        controllerAs: 'vm'
      })
      .when('/create/user', {
        templateUrl: 'views/user/user-add.html',
        controller: 'UserAddCtrl',
        controllerAs: 'vm'
      })
      .when('/user/:id', {
        templateUrl: 'views/user/user-view.html',
        controller: 'UserViewCtrl',
        controllerAs: 'vm'
      })
      .when('/user/:id/delete', {
        templateUrl: 'views/user/user-delete.html',
        controller: 'UserDeleteCtrl',
        controllerAs: 'vm'
      })
      .when('/user/:id/edit', {
        templateUrl: 'views/user/user-edit.html',
        controller: 'UserEditCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });