'use strict';
import template from './plans.html';
import '../../common/services/index';

class plansController {
  constructor(plans) {
    plansController = this;
    plansController.plansSvc = plans;
    plansController.allPlans = plansController.plansSvc.getPlans()
  }
  getSelectedListItem(item) {
    this.allPlans = [];
    Rx.Observable.fromPromise(homeController.workoutsSvc.getworkouts())
      .subscribe((workouts) => {
        homeController.allPlans = _.filter(workouts, (workout) => {
          if (workout.planId === item.$id) {
            this.allPlans.push(workout);
          }
        })
      });
    return this.allPlans;
  }
}
let plansComponent = {
  template: template,
  controllerAs: 'plansCtrl',
  controller: ['plans', plansController]
};

export default angular.module('plans.component', ['services'])
  .component('plansComponent', plansComponent)
  .name;
