'use strict';
import template from './workoutsListView.html';


// component controller
class workoutsListViewCtrl {
  constructor($workoutsVmSvc, $workoutsByPlanSvc) {
    'ngInject';
    this.workoutsSvc = $workoutsVmSvc;
    this.$workoutsByPlanSvc = $workoutsByPlanSvc;
    this.searchString = '';
  }
  $onInit() {
    this.allWorkouts = this.$workoutsByPlanSvc.getWorkoutsPerPlan(this.allWorkouts);
  }
}
//component settings
let workoutsListViewComponent = {
  template: template,
  controllerAs: 'workoutsListViewCtrl',
  controller: workoutsListViewCtrl,
  bindings: {
    allWorkouts: '='
  }
};

export default angular.module('workoutsListViewModule', [])
  .component('workoutsListViewComponent', workoutsListViewComponent)
  .name;
