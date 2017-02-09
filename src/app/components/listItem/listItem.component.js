'use strict';
import template from './listItem.html';

class listItemController {
  constructor() {
    let listviewController = this;
  }
  unSelectAllItems() {
    _.map(this.allItems, (item) => {
      item.selected = false
    })
  }
  selectedListItem(listItem) {
    this.unSelectAllItems();
    listItem.selected = true;
    this.setSelectedItem({item: listItem})
  }
}

export const listviewComponent = {
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
