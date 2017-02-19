'use strict';
import template from './createPlan.html';

// component controller
class createPlanCtrl {
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
let createPlanComponent = {
  template: template,
  controllerAs: 'createPlanCtrl',
  controller: createPlanCtrl,
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('createPlanModule', [])
  .component('createPlanComponent', createPlanComponent)
  .name;
