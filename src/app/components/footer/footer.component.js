'use strict';
import template from './footer.html';

class footerController {
  constructor() {
  }
}

let footerComponent = {
  template: template,
  controllerAs: 'footerCtrl',
  controller: [footerController],
  bindings: {
    projectName: '='
  }
};

export default angular.module('ngFooter', [])
  .component('footerComponent', footerComponent)
  .name;
