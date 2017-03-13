'use strict';
import template from './thumbnailItem.html';

// component controller
export class thumbnailItemController {
  constructor() {
    'ngInject';

  }
  $onInit() {
    if (this.listItem.imageUrl) {
      this.listItem.imageUrl = require('../../../../../img/' + this.listItem.imageUrl);
    } else if (this.listItem.imgUrl) {
      this.listItem.imageUrl = require('../../../../../img/' + this.listItem.imgUrl);
    } else {
      this.listItem.imageUrl = '';
    }
  }
  updateItem(item) {
    this.updateListItem({
      listItem: item
    });
  }
  deleteItem(item) {
    this.deleteListItem({
      listItem: item
    });
  }
  selectedListItem(listItem) {
    //select list item and add active class to the item
    listItem.selected = true;
    //passing selected item to list view component
    this.setSelectedItem({
      item: listItem
    });
  }
}
//component settings
export const thumbnailItemComponent = {
  template: template,
  controllerAs: 'thumbnailItemCtrl',
  controller: thumbnailItemController,
  bindings: {
    listItem: '=',
    setSelectedItem: '&',
    updateListItem: '&',
    deleteListItem: '&'
  }
};

