'use strict';
import template from './footer.html';
/**
 *
 * @ngdoc controller
 * @name footerController
 * @module ngFooter.component

 * @description
 * footer component controller
 *
**/
class footerController {
  constructor() {
    'ngInject';
  }
}
/**
  * @ngdoc object
  * @name  ngFooter.component
  * @description component settings
  */
let footerComponent = {
  template: template,
  controllerAs: 'footerCtrl',
  controller: footerController,
  bindings: {
    /**
     * @ngdoc property
     * @property  {String} projectName.
     * @module ngFooter.component
     * @returns {}  //project Name.
     */
    projectName: '='
  }
};

/**
 * @ngdoc module
 * @name ngFooter.component
 * @module ngFooter.component
 * @description This module includes footer component
 */

export default angular.module('ngFooter.component', [])
  /**
   * @ngdoc component
   * @name footerComponent
   * @module ngFooter.component
   * @description this Component includes application footer
   */
  .component('footerComponent', footerComponent)
  .name;
