'use strict';
import template from './listview.html';

class listviewController {
  constructor() {
    'ngInject';
  }
  getSelectedItem(listitem) {
    this.setSelectedItem({
      item: listitem
    })
  }
}

let listviewComponent = {
  template: template,
  controllerAs: 'listviewCtrl',
  controller: listviewController,
  bindings: {
    allItems: '=',
    appSearchString:'=',
    setSelectedItem: '&'
  }
};

export default angular.module('nglistview.component', [])
  .component('listviewComponent', listviewComponent)
  .name;
