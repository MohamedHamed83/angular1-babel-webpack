'use strict';
import template from './workouts.html';
import '../../common/services/index';

class workoutsByPlanCtrl {
  constructor(workoutsVmSvc, $stateParams) {
    this.workoutsSvc = workoutsVmSvc;
  }
  $onInit() {
    console.log(this.allWorkouts);
  }
}
let workoutsByPlanComponent = {
  template: template,
  controllerAs: 'workoutsByPlanCtrl',
  controller: ['workoutsVmSvc', '$stateParams', (workoutsVmSvc, $stateParams) => new workoutsByPlanCtrl(workoutsVmSvc, $stateParams)],
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('workoutsByPlan.component', [])
  .component('workoutsByPlanComponent', workoutsByPlanComponent)
  .name;
