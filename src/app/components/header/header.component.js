'use strict';
import template from './header.html';
// component controller
class headerController {
  constructor() {
    'ngInject';
  }
}
/**
  * @ngdoc object
  * @name  ngFooter.component
  * @description component settings
  */
let headerComponent = {
  template: template,
  controllerAs: 'headerCtrl',
  controller: headerController,
  bindings: {
    /**
     * @ngdoc property
     * @property  {String} headerTitle.
     * @module ngHeader.component
     * @returns {}  //header Title.
     */
    headerTitle: '=',
    /**
     * @ngdoc property
     * @property  {String} headerTitle.
     * @module ngHeader.component
     * @returns {}  //navigation links.
     */
    navbarLinkes: '='
  }
};

/**
 * @ngdoc module
 * @name ngHeader.componen
 * @module ngHeader.componen
 * @description This module includes Header component
 */

export default angular.module('ngHeader.component', [])
  /**
   * @ngdoc component
   * @name headerComponent
   * @module ngFooter.component
   * @description this Component includes application header
   */
  .component('headerComponent', headerComponent)
  .name;
