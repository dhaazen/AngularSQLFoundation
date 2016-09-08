'use strict';

import sandbox from './sandbox.component';

describe('Component: SandboxComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(sandbox));

  var SandboxComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SandboxComponent = $componentController('sandbox', {});
  }));

  it('should have a log something function', function() {
    expect(SandboxComponent.logSomething).to.exist;
    // expect(1).to.equal(1);
  });
});
