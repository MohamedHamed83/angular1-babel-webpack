'use strict';
import template from './navbar.html';
// component controller
class navbarController {
  constructor() {
    'ngInject';
  }
  menuCollapsed() {
    $('.menu-collapsed').toggleClass('menu-expanded');
  };
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

export default angular.module('ngNavbarModule', [])
  .component('navbarComponent', navbarComponent)
  .name;
