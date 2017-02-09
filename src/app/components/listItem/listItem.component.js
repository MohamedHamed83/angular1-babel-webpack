'use strict';
import template from './listItem.html';

class listItemController {
  constructor() {
    'ngInject';
  }

  selectedListItem(listItem) {
    listItem.selected = true;
    this.setSelectedItem({
      item: listItem
    })
  }
}

export const listItemComponent = {
  template: template,
  controllerAs: 'listItemCtrl',
  controller: listItemController,
  bindings: {
    listItem: '=',
    setSelectedItem: '&'
  }
};

export default angular.module('nglistItem.component', [])
  .component('listItemComponent', listItemComponent)
  .name;
