'use strict';
import template from './editWorkout.html';

// component controller
export class editWorkoutCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.$workoutsVmSvc = $workoutsVmSvc;
  }
  $onInit() {

  }
  updateWorkout(event) {
    this.$workoutsVmSvc.updateWorkout(event.workout).then(() => {
      this.$workoutsVmSvc.loadRoute('workoutsByPlan');
    });
  }
  deleteWorkout(event) {
    this.$workoutsVmSvc.deleteWorkout(event.workout).then(() => {
      this.$workoutsVmSvc.loadRoute('workoutsByPlan');
    });
  }
}
//component settings
export const editWorkoutComponent = {
  template: template,
  controllerAs: 'editWorkoutCtrl',
  controller: editWorkoutCtrl,
  bindings: {
    viewStatus: '=',
    workout: '=',
  }
};
