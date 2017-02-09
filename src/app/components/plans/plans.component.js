'use strict';
import template from './plans.html';

class plansController {
  constructor(plans) {
    plansController = this;
    plansController.plansSvc = plans;
    plansController.allPlans = plansController.plansSvc.getPlans()
  }
  getSelectedListItem(item) {
    plansController.plansSvc.workoutsView('workouts', item.$id);
  }
}
let plansComponent = {
  template: template,
  controllerAs: 'plansCtrl',
  controller: ['plans', plansController]
};

export default angular.module('plans.component', [])
  .component('plansComponent', plansComponent)
  .name;
