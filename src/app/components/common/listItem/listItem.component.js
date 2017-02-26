'use strict';
import template from './listItem.html';

// component controller
class listItemController {
  constructor() {
    'ngInject';

  }
  $onInit() {
    if (this.listItem.imgUrl) {
      this.listItem.imageUrl = require('../../../../img/workouts/' + this.listItem.imgUrl);
    } else if (this.listItem.imageUrl) {
      this.listItem.imageUrl = require('../../../../img/muscleGroups/' + this.listItem.imageUrl);
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
const listItemComponent = {
  template: template,
  controllerAs: 'listItemCtrl',
  controller: listItemController,
  bindings: {
    listItem: '=',
    setSelectedItem: '&',
    updateListItem: '&',
    deleteListItem: '&'
  }
};
//list item is nested component in list view
export default angular.module('nglistItemModule', [])
  .component('listItemComponent', listItemComponent)
  .name;