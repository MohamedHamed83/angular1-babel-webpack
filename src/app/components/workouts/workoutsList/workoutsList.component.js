'use strict';
import template from './workoutsList.html';

// component controller
class workoutsListCtrl {
  constructor($workoutsVmSvc) {
    'ngInject';
    this.workoutsSvc = $workoutsVmSvc;
    this.searchString = '';
  }
  $onInit() {
  }
}
//component settings
let workoutsListComponent = {
  template: template,
  controllerAs: 'workoutsListCtrl',
  controller: workoutsListCtrl,
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('workoutsListModule', [])
  .component('workoutsListComponent', workoutsListComponent)
  .name;
