'use strict';
import template from './editWorkout.html';

// component controller
class editWorkoutCtrl {
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
let editWorkoutComponent = {
  template: template,
  controllerAs: 'editWorkoutCtrl',
  controller: editWorkoutCtrl,
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('editWorkoutModule', [])
  .component('editWorkoutComponent', editWorkoutComponent)
  .name;
