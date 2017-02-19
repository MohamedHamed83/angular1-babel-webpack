'use strict';
import template from './workouts.html';
import '../../common/services/index';

// component controller
class workoutsCtrl {
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
let workoutsComponent = {
  template: template,
  controllerAs: 'workoutsCtrl',
  controller: workoutsCtrl,
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('workoutsModule', [])
  .component('workoutsComponent', workoutsComponent)
  .name;
