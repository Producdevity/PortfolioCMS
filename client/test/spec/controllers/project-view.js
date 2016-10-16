'use strict';

describe('Controller: ProjectViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ProjectViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectViewCtrl = $controller('ProjectViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectViewCtrl.awesomeThings.length).toBe(3);
  });
});
