'use strict';
import template from './header.html';
// component controller
class headerController {
  constructor() {
    'ngInject';
  }
}

let headerComponent = {
  template: template,
  controllerAs: 'headerCtrl',
  controller: headerController,
  bindings: {

    headerTitle: '=',

    navbarLinkes: '='
  }
};


export default angular.module('ngHeaderModule', [])

  .component('headerComponent', headerComponent)
  .name;
