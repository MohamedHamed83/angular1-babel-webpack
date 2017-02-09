'use strict';
import template from './header.html';

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

export default angular.module('ngHeader.component', [])
  .component('headerComponent', headerComponent)
  .name;
