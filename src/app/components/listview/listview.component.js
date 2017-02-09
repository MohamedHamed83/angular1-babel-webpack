'use strict';
import template from './listview.html';
import listItemComponent from '../listItem/listItem.component';

class listviewController {
  constructor() {
    listviewController = this;
  }
  getSelectedItem(listitem) {
    listviewController.setSelectedItem({
      item: listitem
    })
  }
}

let listviewComponent = {
  template: template,
  controllerAs: 'listviewCtrl',
  controller: [listviewController],
  bindings: {
    allItems: '=',
    setSelectedItem: '&'
  }
};

export default angular.module('nglistview.component', [])
  .component('listviewComponent', listviewComponent)
  .name;
