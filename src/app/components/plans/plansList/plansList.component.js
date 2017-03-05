'use strict';
import template from './plansList.html';
// component controller
export class plansListController {
  constructor($plansSvc) {
    'ngInject';
    this.plansSvc = $plansSvc;
    // plans list
    this.allPlans = this.plansSvc.getPlans()
    this.searchString = '';
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    this.plansSvc.loadUiRoute('workoutsByPlan', item.$id);
  }
  updateListItem(listItem) {
    this.plansSvc.loadUiRoute('updatePlan', listItem.$id);
  }
  deleteListItem(listItem) {
    this.plansSvc.loadUiRoute('deletePlan', listItem.$id);
  }
  $onInit() {

  }
}
//component settings
export const plansListComponent = {
  template: template,
  controllerAs: 'plansListCtrl',
  controller: plansListController
};

export default angular.module('plansListModule', [])
  .component('plansListComponent', plansListComponent)
  .name;
