'use strict';
import template from './navbar.html';

class navbarController {
  constructor() {
        'ngInject';
  }
}

let navbarComponent = {
  template: template,
  controllerAs: 'navbarCtrl',
  controller: navbarController,
  bindings: {
    mainLinks: '='
  }
};

export default angular.module('ngNavbar.component', [])
  .component('navbarComponent', navbarComponent)
  .name;
