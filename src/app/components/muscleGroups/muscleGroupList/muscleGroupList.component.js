'use strict';
import template from './muscleGroupList.html';
// component controller
export class muscleGroupListController {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.workoutsVmSvc = $workoutsVmSvc;
    // plans list
    this.allMuscleGroups = this.workoutsVmSvc.getMuscleGroups();
    this.searchString = '';
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    this.workoutsVmSvc.loadRoute('workoutsByMuscle', item.$id);
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
export const muscleGroupListComponent = {
  template: template,
  controllerAs: 'muscleGroupListCtrl',
  controller: muscleGroupListController
};
