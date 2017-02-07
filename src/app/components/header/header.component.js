'use strict';
import template from './header.html';

class headerController {
  constructor() {
    let headerCtrl = this;
  }
}

let headerComponent = {
  template: template,
  controllerAs: 'headerCtrl',
  controller: [headerController],
  bindings: {
    headerTitle: '=',
    navbarLinkes:'='
  }
};

export default angular.module('ngHeader', [])
  .component('headerComponent', headerComponent)
  .name;
