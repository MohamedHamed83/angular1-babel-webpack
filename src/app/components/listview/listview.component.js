'use strict';
import template from './listview.html';

class listviewController {
  constructor() {
    let listviewCtrl = this;
    listviewCtrl.selectedListItem = false;
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
