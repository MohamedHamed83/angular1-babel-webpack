'use strict';
import template from './searchBar.html';

// component controller
class searchBarController {
  constructor() {
    'ngInject';
  }
}
//component settings
let searchBarComponent = {
  template: template,
  controllerAs: 'searchBarCtrl',
  controller: searchBarController,
  bindings: {
    searchBarString: '='
  }
};

export default angular.module('ngSearchBar.component', [])
  .component('searchBarComponent', searchBarComponent)
  .name;
