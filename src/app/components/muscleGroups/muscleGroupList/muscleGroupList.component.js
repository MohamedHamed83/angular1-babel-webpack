'use strict';
import template from './muscleGroupList.html';
// component controller
class muscleGroupListController {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.workoutsVmSvc = $workoutsVmSvc;
    // plans list
    this.allMuscleGroups = this.workoutsVmSvc.getMuscleGroups()
    this.searchString = '';
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    this.workoutsVmSvc.loadRoute('updateMuscleGroup', item.$id);
  }
  updateListItem(listItem) {
    this.workoutsVmSvc.loadRoute('updateMuscleGroup', listItem.$id);
  }
  deleteListItem(listItem) {
    this.workoutsVmSvc.loadRoute('deleteMuscleGroup', listItem.$id);
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
