'use strict';
import template from './plans.html';

class plansController {
  constructor(plans) {
    'ngInject';
    this.plansSvc = plans;
    this.allPlans = this.plansSvc.getPlans()
  }
  getSelectedListItem(item) {
    this.plansSvc.workoutsView('workoutsStView', item.$id);
  }
}
let plansComponent = {
  template: template,
  controllerAs: 'plansCtrl',
  controller: plansController
};

export default angular.module('plans.component', [])
  .component('plansComponent', plansComponent)
  .name;
