'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './sandbox.routes';

export class SandboxComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }

  logSomething() {
    console.log("Something");
  }
}

export default angular.module('newProjectApp.sandbox', [ngRoute])
  .config(routes)
  .component('sandbox', {
    template: require('./sandbox.html'),
    controller: SandboxComponent,
    controllerAs: 'sandboxCtrl'
  })
  .name;
