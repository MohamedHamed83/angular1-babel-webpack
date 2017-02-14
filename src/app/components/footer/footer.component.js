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

/**
 * @ngdoc module
 * @name ngFooter.component
 * @module ngFooter.component
 * @description This is footer component module
 */

export default angular.module('ngFooterModule', [])
  .component('footerComponent', footerComponent)
  .name;
