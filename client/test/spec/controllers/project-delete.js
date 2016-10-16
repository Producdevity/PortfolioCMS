'use strict';

describe('Controller: ProjectDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ProjectDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectDeleteCtrl = $controller('ProjectDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
