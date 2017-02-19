'use strict';
import template from './editPlan.html';

// component controller
class editPlanCtrl {
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
let editPlanComponent = {
  template: template,
  controllerAs: 'editPlanCtrl',
  controller: editPlanCtrl,
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('editPlanModule', [])
  .component('editPlanComponent', editPlanComponent)
  .name;
