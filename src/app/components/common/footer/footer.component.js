'use strict';
import template from './footer.html';

/**
 * @class footerController
 * @module ngFooterModule
 * @classdesc This is footer component controller
 */
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
 * @name ngFooterModule
 * @module ngFooterModule
 * @description This is footer component module
 */

export default angular.module('ngFooterModule', [])
  /**
   * @ngdoc directive
   * @name footerComponent
   * @module ngFooterModule
   * @description
   * @example
   * <footer-component projectName='project name'>
   * </footer-component>
   * footer component
   */
  .component('footerComponent', footerComponent)
  .name;
