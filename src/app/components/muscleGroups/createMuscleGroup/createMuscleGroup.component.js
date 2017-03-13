'use strict';
import template from './createMuscleGroup.html';

// component controller
export class createMuscleGroupCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.$workoutsVmSvc = $workoutsVmSvc;
  }
  $onInit() {
    this.muscleGroup = {
      groupName: '',
      imageUrl: ''
    };
  }
  createNewMuscleGroup(event) {
    this.$workoutsVmSvc.createNewMuscleGroup(event.muscleGroup).then(() => {
      this.$workoutsVmSvc.loadRoute('muscleGroupsListView');
    });
  }
}
//component settings
export const createMuscleGroupComponent = {
  template: template,
  controllerAs: 'createMuscleGroupCtrl',
  controller: createMuscleGroupCtrl,
  bindings: {
    viewStatus: '='
  }
};
