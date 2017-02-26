'use strict';
import template from './muscleGroupList.html';
// component controller
class muscleGroupListController {
  constructor($plansSvc) {
    'ngInject';
    this.plansSvc = $plansSvc;
    // plans list
    this.allMuscleGroups = this.plansSvc.getMuscleGroups()
    this.searchString = '';
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    this.plansSvc.loadUiRoute('workoutsListView', item.$id);
  }
  updateListItem(listItem) {
    this.plansSvc.loadUiRoute('updateMuscleGroup', listItem.$id);
  }
  deleteListItem(listItem) {
    this.plansSvc.loadUiRoute('deleteMuscleGroup', listItem.$id);
  }
  $onInit() {

  }
}
//component settings
let muscleGroupListComponent = {
  template: template,
  controllerAs: 'muscleGroupListCtrl',
  controller: muscleGroupListController
};

export default angular.module('muscleGroupListModule', [])
  .component('muscleGroupListComponent', muscleGroupListComponent)
  .name;
