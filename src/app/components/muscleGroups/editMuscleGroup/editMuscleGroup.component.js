'use strict';
import template from './editMuscleGroup.html';

// component controller
class editMuscleGroupCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.$workoutsVmSvc = $workoutsVmSvc;
  }
  $onInit() {

  }
  updateMuscleGroup(event) {
    this.$plansSvc.updateMuscleGroup(event.muscleGroup).then(() => {
      this.$plansSvc.loadUiRoute('muscleGroupListView');
    });
  }
  deleteMuscleGroup(event) {
    this.$workoutsVmSvc.deleteMuscleGroup(event.muscleGroup).then(() => {
      this.$workoutsVmSvc.loadUiRoute('muscleGroupListView');
    });
  }
}
//component settings
let editMuscleGroupComponent = {
  template: template,
  controllerAs: 'editMuscleGroupCtrl',
  controller: editMuscleGroupCtrl,
  bindings: {
    viewStatus: '=',
    muscleGroup: '=',
  }
};

export default angular.module('editMuscleGroupModule', [])
  .component('editMuscleGroupComponent', editMuscleGroupComponent)
  .name;
