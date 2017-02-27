'use strict';
import template from './workoutDetail.html';

// component controller
class workoutDetailCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.$workoutsVmSvc = $workoutsVmSvc;
    this.viewTypes = this.$workoutsVmSvc.viewTypes;
  }
  $onInit() {

  }
  saveWorkout() {
    this.onSave({
      $event: {
        workout: this.workout,
      },
    });
  }
  updateWorkout() {
    this.onUpdate({
      $event: {
        workout: this.workout,
      },
    });
  }
  deleteWorkout() {
    this.onDelete({
      $event: {
        workoutsVmSvcorkout: this.workout,
      }
    })
  }
}
//component settings
let workoutDetailComponent = {
  template: template,
  controllerAs: 'workoutDetailCtrl',
  controller: workoutDetailCtrl,
  bindings: {
    workout: '=',
    viewStatus: '=',
    onSave: '&',
    onUpdate: '&',
    onDelete: '&',
  }
};

export default angular.module('workoutDetailModule', [])
  .component('workoutDetailComponent', workoutDetailComponent)
  .name;
