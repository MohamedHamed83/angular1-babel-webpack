'use strict';
import template from './footer.html';
// component controller
class footerController {
  constructor() {
    'ngInject';
  }
}
//component settings
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
