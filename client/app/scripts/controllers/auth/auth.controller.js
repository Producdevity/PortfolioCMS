'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller for authentication
 */
angular.module('clientApp')
  .controller('AuthCtrl', function (Auth, $location, $auth, $http) {
    var vm = this;

    vm.authenticate = authenticate;
    vm.login = login;
    vm.loginUser = loginUser;
    vm.registerUser = registerUser;

    vm.loginData = {};

    function loginUser() {
      console.log('loginUser');
      console.log(vm.loginData);
      // vm.processing = true;
      // vm.error = '';
      // Auth.login(vm.loginData.email, vm.loginData.password)
      // .success(function (data) {
      //   vm.processing = false;
      //   // Auth.getUser()
      //   // .then(function (data) {
      //   //   vm.user = data.data;
      //   //   console.log(data.data);
      //   // });
      //   if (data.success)
      //     $location.path('/');
      //   else
      //     vm.error = data.message;
      // });
      // $http.post('http://localhost:3000/auth/login', vm.userData);
      $http.post('http://localhost:3000/auth/login',{
        email: vm.userData.email,
        password: vm.userData.password
      })
      .success(function(data){
        console.log(data);
        return data;

      });
    }

    function registerUser() {
      $http.post('http://localhost:3000/auth/register', vm.userData);
    }

    // vm.userData = {};
    // vm.registerUser = function(){
    //   console.log('registerUser');
    //   // vm.userData = {
    //   //   email: vm.loginData.email,
    //   //   password: vm.loginData.password
    //   // };
    //   vm.message = '';
    //   Auth.create(vm.userData)
    //   .then(function(response){
    //     vm.userData = {};
    //     console.log(vm.userData);
    //     vm.message = response.data.message;
    //     $location.path('/login');
    //   });
    // };

    function authenticate(provider) {
      $auth.authenticate(provider);
    }

    vm.loginData = {};
    vm.loginError = false;
    // vm.loginErrorText;

    function login() {
      var credentials = {
        email: vm.loginData.email,
        password: vm.loginData.password
      };
      console.log(credentials);
      console.log($auth);
      $auth.login(credentials).then(function() {
        console.log($auth.login(credentials));
        // Return an $http request for the authenticated user
        // $http.get('http://localhost:3000/api/authenticate/user')
        // .success(function(response){
          // Stringify the retured data
          // var user = JSON.stringify(response.user);

          // Set the stringified user data into local storage
          // localStorage.setItem('user', user);

          // Getting current user data from local storage
          // $rootScope.currentUser = response.user;
          // $rootScope.currentUser = localStorage.setItem('user');

        // });
        // .error(function(){
        //   $scope.loginError = true;
        //   $scope.loginErrorText = error.data.error;
        //   console.log($scope.loginErrorText);
        // })
      });
    }

  });
