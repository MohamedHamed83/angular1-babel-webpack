'use strict';
import template from './searchBar.html';

class searchBarController {
  constructor() {
    'ngInject';
  }
}

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
