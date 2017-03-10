'use strict';

import <%= cameledName %>Module from './<%= cameledName %>.component';

describe('Component: <%= cameledName %>', function() {
  // load the component's module
  beforeEach(angular.mock.module(<%= cameledName %>Module));

  var <%= cameledName %>Component;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    <%= cameledName %>Component = $componentController('<%= cameledName %>', {});
  }));

  it('should ...', function() {<% if(hasFilter('jasmine')) { %>
    expect(1).toEqual(1);<% } if(hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal(1);<% } %>
  });
});
