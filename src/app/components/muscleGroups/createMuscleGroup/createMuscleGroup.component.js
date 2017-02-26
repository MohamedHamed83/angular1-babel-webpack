'use strict';
import template from './createMuscleGroup.html';

// component controller
class createMuscleGroupCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.$workoutsVmSvc = $workoutsVmSvc;
  }
  $onInit() {
    this.muscleGroup = {
      groupName: '',
      imageUrl: ''
    }
  }
  createNewMuscleGroup(event) {
    this.$workoutsVmSvc.createNewMuscleGroup(event.muscleGroup).then(() => {
      this.$workoutsVmSvc.loadUiRoute('muscleGroupListView');
    })
  }
}
//component settings
let createMuscleGroupComponent = {
  template: template,
  controllerAs: 'createMuscleGroupCtrl',
  controller: createMuscleGroupCtrl,
  bindings: {
    viewStatus: '='
  }
};

export default angular.module('createMuscleGroupModule', [])
  .component('createMuscleGroupComponent', createMuscleGroupComponent)
  .name;
