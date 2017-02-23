'use strict';
import template from './plansList.html';
// component controller
class plansListController {
  constructor($plansSvc) {
    'ngInject';
    this.plansSvc = $plansSvc;
    // plans list
    this.allPlans = this.plansSvc.getPlans()
    this.searchString = '';
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    this.plansSvc.loadUiRoute('workoutsByPlanView', item.$id);
  }
  $onInit(){

  }
}
//component settings
let plansListComponent = {
  template: template,
  controllerAs: 'plansListCtrl',
  controller: plansListController
};

export default angular.module('plansListModule', [])
  .component('plansListComponent', plansListComponent)
  .name;
