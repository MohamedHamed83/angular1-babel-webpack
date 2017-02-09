'use strict';
import template from './footer.html';

class footerController {
  constructor() {
    'ngInject';
  }
}

let footerComponent = {
  template: template,
  controllerAs: 'footerCtrl',
  controller: footerController,
  bindings: {
    projectName: '='
  }
};

export default angular.module('ngFooter.component', [])
  .component('footerComponent', footerComponent)
  .name;
