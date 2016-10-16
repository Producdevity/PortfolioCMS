'use strict';

describe('Controller: ProjectAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ProjectAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectAddCtrl = $controller('ProjectAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectAddCtrl.awesomeThings.length).toBe(3);
  });
});
