'use strict';
import template from './plans.html';
// component controller
class plansController {
  constructor(plans) {
    'ngInject';
    this.plansSvc = plans;
    // plans list
    this.allPlans = this.plansSvc.getPlans()
    this.searchString = '';
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    this.plansSvc.reloadView('workoutsStView', item.$id);
  }
}
//component settings
let plansComponent = {
  template: template,
  controllerAs: 'plansCtrl',
  controller: plansController
};

export default angular.module('plansModule', [])
  .component('plansComponent', plansComponent)
  .name;
