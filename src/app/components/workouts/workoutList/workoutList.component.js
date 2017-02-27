'use strict';
import template from './workoutList.html';

// component controller
class workoutListCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.workoutsVmSvc = $workoutsVmSvc;
    this.searchString = '';
  }
  $onInit() {
  }
}
//component settings
let workoutListComponent = {
  template: template,
  controllerAs: 'workoutListCtrl',
  controller: workoutListCtrl,
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('workoutListModule', [])
  .component('workoutListComponent', workoutListComponent)
  .name;
