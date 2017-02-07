'use strict';
import template from './listview.html';

class listviewController {
  constructor() {
    let navbarCtrl = this;
  }
}

let listviewComponent = {
  template: template,
  controllerAs: 'listviewCtrl',
  controller: [listviewController]
};

export default angular.module('nglistview', [])
  .component('listviewComponent', listviewComponent)
  .name;
