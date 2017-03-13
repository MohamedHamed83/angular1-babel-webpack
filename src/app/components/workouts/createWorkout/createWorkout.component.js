'use strict';
import template from './createWorkout.html';

// component controller
export class createWorkoutCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.$workoutsVmSvc = $workoutsVmSvc;
  }
  $onInit() {
    this.workout = {
      workoutName: '',
      muscleGroupId:'',
      imageUrl: '',
      workoutDetail:''
    };
  }
  createNewWorkout(event) {
    this.$workoutsVmSvc.createNewWorkout(event.workout);
  }
}
//component settings
export const createWorkoutComponent = {
  template: template,
  controllerAs: 'createWorkoutCtrl',
  controller: createWorkoutCtrl,
  bindings: {
    viewStatus: '=',
    muscleGroups:'='
  }
};


