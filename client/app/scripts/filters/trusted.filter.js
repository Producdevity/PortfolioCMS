'use strict';

/**
 * @ngdoc function
 * @name clientApp.filter:trusted
 * @description
 * # trusted
 * Make url trusted
 */
angular.module('clientApp')
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });