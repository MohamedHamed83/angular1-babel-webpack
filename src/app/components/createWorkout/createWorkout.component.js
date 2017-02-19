'use strict';
import template from './createWorkout.html';

// component controller
class createWorkoutCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.workoutsSvc = $workoutsVmSvc;
    this.searchString = '';
  }
  $onInit() {
    this.workoutsSvc.workoutOnload()
  }
}
//component settings
let createWorkoutComponent = {
  template: template,
  controllerAs: 'createWorkoutCtrl',
  controller: createWorkoutCtrl,
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('createWorkoutModule', [])
  .component('createWorkoutComponent', createWorkoutComponent)
  .name;
