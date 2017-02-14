'use strict';
import template from './footer.html';

/**
 * @ngdoc method
 * @name ngFooterModule#footerController
 * @module ng
 * @description
 * See {@link ng.$controllerProvider#register $controllerProvider.register()}.
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
  .component('footerComponent', footerComponent)
  .name;
