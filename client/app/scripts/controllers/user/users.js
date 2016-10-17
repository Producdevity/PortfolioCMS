'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserCtrl', function (User) {
    var vm = this;

    vm.users = User.getList().$object;

  });

// yo angular:route project-add --uri=create/project
// yo angular:route project-view --uri=project/:id
// yo angular:route project-delete --uri=project/:id/delete
// yo angular:route project-edit --uri=project/:id/edit

// yo angular:route user-add --uri=create/user
// yo angular:route user-view --uri=user/:id
// yo angular:route user-delete --uri=user/:id/delete
// yo angular:route user-edit --uri=user/:id/edit