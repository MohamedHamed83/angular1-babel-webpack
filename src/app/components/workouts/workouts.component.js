'use strict';
import template from './workouts.html';
import '../../common/services/index';

// component controller
class workoutsByPlanCtrl {
  constructor($workoutsVmSvc, $stateParams) {
    'ngInject';
    this.workoutsSvc = $workoutsVmSvc;
    this.$stateParams = $stateParams;
    this.searchString = '';
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
