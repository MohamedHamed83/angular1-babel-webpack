'use strict';
import template from './listItem.html';
// component controller
class listItemController {
  constructor() {
    'ngInject';
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
    setSelectedItem: '&'
  }
};
//list item is nested component in list view
export default angular.module('nglistItem.component', [])
  .component('listItemComponent', listItemComponent)
  .name;
