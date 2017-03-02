'use strict';
import template from './editWorkout.html';

// component controller
class editWorkoutCtrl {
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
let editWorkoutComponent = {
  template: template,
  controllerAs: 'editWorkoutCtrl',
  controller: editWorkoutCtrl,
  bindings: {
    viewStatus: '=',
    workout: '=',
  }
};

export default angular.module('editWorkoutModule', [])
  .component('editWorkoutComponent', editWorkoutComponent)
  .name;
