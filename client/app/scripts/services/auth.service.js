'use strict';

/**
 * @ngdoc function
 * @name clientApp.service:User
 * @description
 * # UserRestangular, User
 * Factory for the users
 */

angular
.module('clientApp')
.factory('Auth', function($http) {
  var authFactory = {};

  authFactory.login = function (email, password) {
    return $http.post('http://localhost:3000/auth/login', {
      email: email,
      password: password
    })
    .success(function (data) {
      return data;
    });
  };

  // function loginUser() {
  //   console.log('loginUser');
  //   console.log(vm.userData);
  //   // $http.post('http://localhost:3000/auth/login', vm.userData);
  //   // Auth.login(vm.loginData.email, vm.loginData.password)
  //   $http.post('http://localhost:3000/auth/login', {
  //     email: vm.userData.email,
  //     password: vm.userData.password
  //   })
  //   .success(function(data){
  //     console.log(data);
  //     return data;
  //
  //   })
  // }

  authFactory.create = function(userData){
    return $http.post('http://localhost:3000/auth/register', userData);
  };

  return authFactory;

});