'use strict';

/**
 * @ngdoc function
 * @name clientApp.service:User
 * @description
 * # UserRestangular, User
 * Factory for the users
 */
angular.module('clientApp')
  .factory('UserRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('User', function(UserRestangular) {
    return UserRestangular.service('user');
  });
