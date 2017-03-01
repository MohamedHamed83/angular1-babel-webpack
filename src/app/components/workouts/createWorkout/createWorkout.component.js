'use strict';
import template from './createWorkout.html';

// component controller
class createWorkoutCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.$workoutsVmSvc = $workoutsVmSvc;
  }
  $onInit() {
    this.workout = {
      workoutName: '',
      muscleGroupId:'',
      imageUrl: ''
    }
  }
  createNewWorkout(event) {
    this.$workoutsVmSvc.createNewWorkout(event.workout)
  }
}
//component settings
let createWorkoutComponent = {
  template: template,
  controllerAs: 'createWorkoutCtrl',
  controller: createWorkoutCtrl,
  bindings: {
    viewStatus: '=',
    muscleGroups:'='
  }
};

export default angular.module('createWorkoutModule', [])
  .component('createWorkoutComponent', createWorkoutComponent)
  .name;
