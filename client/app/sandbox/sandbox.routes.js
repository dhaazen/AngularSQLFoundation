'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/sandbox', {
      template: '<sandbox></sandbox>'
    });
}
