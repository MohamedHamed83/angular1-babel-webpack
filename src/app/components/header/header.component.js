'use strict';
import template from './header.html';
// component controller
class headerController {
  constructor() {
    'ngInject';
  }
}
//component settings
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
