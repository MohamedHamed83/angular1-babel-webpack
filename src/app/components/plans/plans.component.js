'use strict';
import template from './plans.html';
// component controller
class plansController {
  constructor($plansSvc) {
    'ngInject';
    this.plansSvc = $plansSvc;
    // plans list
    this.allPlans = this.plansSvc.getPlans()
    this.searchString = '';
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    this.plansSvc.reloadView('workoutsStView', item.$id);
  }
  $onInit(){
    this.plansSvc.plansOnload();
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
