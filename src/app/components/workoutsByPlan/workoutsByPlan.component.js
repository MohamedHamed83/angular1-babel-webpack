'use strict';
import template from './workoutsByPlan.html';
import '../../common/services/index';

// component controller
class workoutsByPlanCtrl {
  constructor($workoutsVmSvc, $workoutsByPlanSvc) {
    'ngInject';
    this.workoutsSvc = $workoutsVmSvc;
    this.$workoutsByPlanSvc = $workoutsByPlanSvc;
    this.searchString = '';
  }
  $onInit() {
    this.allWorkouts = this.$workoutsByPlanSvc.getWorkoutsPerPlan(this.allWorkouts);
    this.workoutsSvc.workoutOnload()
  }
}
//component settings
let workoutsByPlanComponent = {
  template: template,
  controllerAs: 'workoutsByPlanCtrl',
  controller: workoutsByPlanCtrl,
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('workoutsByPlanModule', [])
  .component('workoutsByPlanComponent', workoutsByPlanComponent)
  .name;
