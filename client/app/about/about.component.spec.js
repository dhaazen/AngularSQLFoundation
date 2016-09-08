'use strict';

import about from './about.component';

describe('Component: AboutComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(about));

  var AboutComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AboutComponent = $componentController('about', {});
  }));

  it('should have a hello message', function() {
    expect(AboutComponent.message).to.equal('Hello');
  });
});
