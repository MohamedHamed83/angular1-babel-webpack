'use strict';
import template from './editMuscleGroup.html';

// component controller
export class editMuscleGroupCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.$workoutsVmSvc = $workoutsVmSvc;
  }
  $onInit() {

  }
  updateMuscleGroup(event) {
    this.$workoutsVmSvc.updateMuscleGroup(event.muscleGroup).then(() => {
      this.$workoutsVmSvc.loadRoute('muscleGroupsListView');
    });
  }
  deleteMuscleGroup(event) {
    this.$workoutsVmSvc.deleteMuscleGroup(event.muscleGroup).then(() => {
      this.$workoutsVmSvc.loadRoute('muscleGroupsListView');
    });
  }
}
//component settings
export const editMuscleGroupComponent = {
  template: template,
  controllerAs: 'editMuscleGroupCtrl',
  controller: editMuscleGroupCtrl,
  bindings: {
    viewStatus: '=',
    muscleGroup: '=',
  }
};
