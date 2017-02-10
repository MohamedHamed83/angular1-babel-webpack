'use strict';
import template from './navbar.html';
// component controller
class navbarController {
  constructor() {
        'ngInject';
  }
}
//component settings
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
