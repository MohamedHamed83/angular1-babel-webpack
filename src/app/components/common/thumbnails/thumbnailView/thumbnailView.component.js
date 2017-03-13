'use strict';
import template from './thumbnailView.html';
// component controller
export class thumbnailViewController {
  constructor() {
    'ngInject';
  }
  getSelectedItem(listitem) {
    this.setSelectedItem({
      item: listitem
    });
  }
  update(item) {
    this.updateListItem({
      listItem: item
    });
  }
  delete(item) {
    this.deleteListItem({
      listItem: item
    });
  }
}
//component settings
export const thumbnailViewComponent = {
  template: template,
  controllerAs: 'thumbnailViewCtrl',
  controller: thumbnailViewController,
  bindings: {
    allItems: '=',
    listSearchString: '=',
    setSelectedItem: '&',
    updateListItem: '&',
    deleteListItem: '&'
  }
};

