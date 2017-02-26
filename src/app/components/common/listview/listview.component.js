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
  update(item) {
    this.updateListItem({
      listItem: item
    })
  }
  delete(item) {
    this.deleteListItem({
      listItem: item
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
    listSearchString: '=',
    setSelectedItem: '&',
    updateListItem: '&',
    deleteListItem: '&'
  }
};

export default angular.module('nglistviewModule', [])
  .component('listviewComponent', listviewComponent)
  .name;
