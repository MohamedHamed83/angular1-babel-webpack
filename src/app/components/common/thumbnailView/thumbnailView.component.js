'use strict';
import template from './thumbnailView.html';
// component controller
class thumbnailViewController {
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
let thumbnailViewComponent = {
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

export default angular.module('ngthumbnailViewModule', [])
  .component('thumbnailViewComponent', thumbnailViewComponent)
  .name;
