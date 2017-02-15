'use strict';
import template from './footer.html';

/**
 * @ngdoc controller
 * @name ngFooterModule.controller:footerComponent
 * @description footer component controller.
 */
class footerController {
  constructor() {
    'ngInject';
  }
}
/**
 * @ngdoc object
 * @name footerSetting
 * @methodOf footerComponent.
 */
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
 * @name ngFooterModule
 * @module ngFooterModule
 * @description This is footer component module
 */

export default angular.module('ngFooterModule', [])
  /**
   * @ngdoc directive
   * @name ngFooterModule.directive:footerComponent
   * @restrict A
   * @module ngFooterModule
   * @description
   * footer component
   */
  .component('footerComponent', footerComponent)
  .name;
