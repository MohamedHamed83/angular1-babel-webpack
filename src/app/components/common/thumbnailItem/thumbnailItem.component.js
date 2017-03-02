'use strict';
import template from './thumbnailItem.html';

// component controller
class thumbnailItemController {
  constructor() {
    'ngInject';

  }
  $onInit() {
    if (this.listItem.imageUrl) {
      this.listItem.imageUrl = require('../../../../img/' + this.listItem.imageUrl);
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
    })
  }
}
//component settings
const thumbnailItemComponent = {
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
//list item is nested component in list view
export default angular.module('ngThumbnailItemModule', [])
  .component('thumbnailItemComponent', thumbnailItemComponent)
  .name;
