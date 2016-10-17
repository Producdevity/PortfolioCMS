'use strict';

/**
 * @ngdoc function
 * @name clientApp.directive:preview
 * @description
 * # preview
 * preview directive
 */
angular.module('clientApp')
  .directive('preview', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/directives/preview.html'
    };
  });