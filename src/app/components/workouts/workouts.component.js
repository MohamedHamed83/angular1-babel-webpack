'use strict';
import template from './workouts.html';
import '../../common/services/index';

class workoutsByPlanCtrl {
  constructor(workoutsVmSvc, $stateParams) {
    'ngInject';
    this.workoutsSvc = workoutsVmSvc;
    this.$stateParams = $stateParams;
    this.searchString = '';
  }

}
let workoutsByPlanComponent = {
  template: template,
  controllerAs: 'workoutsByPlanCtrl',
  controller: workoutsByPlanCtrl,
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('workoutsByPlan.component', [])
  .component('workoutsByPlanComponent', workoutsByPlanComponent)
  .name;
