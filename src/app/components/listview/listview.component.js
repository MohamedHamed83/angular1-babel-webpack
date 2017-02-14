'use strict';
import template from './listview.html';
// component controller
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
//component settings
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

export default angular.module('nglistviewModule', [])
  .component('listviewComponent', listviewComponent)
  .name;
