'use strict';
import template from './workoutList.html';

// component controller
class workoutListCtrl {
  constructor($workoutsVmSvc, $workoutsByPlanSvc) {
    'ngInject';
    this.$workoutsVmSvc = $workoutsVmSvc;
    this.$workoutsByPlanSvc = $workoutsByPlanSvc;
    this.searchString = '';
  }
  $onInit() {
    console.log(this.viewType);
    if (this.viewType === 'workoutsByMuscle') {
      this.allWorkouts = this.$workoutsVmSvc.getWorkoutsPerKey(this.allWorkouts);
    } else if (this.viewType === 'workoutsByPlan') {
      this.allWorkouts = this.$workoutsByPlanSvc.getWorkoutsPerPlan(this.allWorkouts);
    }
  }
}
//component settings
let workoutListComponent = {
  template: template,
  controllerAs: 'workoutListCtrl',
  controller: workoutListCtrl,
  bindings: {
    viewType: '=',
    allWorkouts: '='
  }
};

export default angular.module('workoutListModule', [])
  .component('workoutListComponent', workoutListComponent)
  .name;
