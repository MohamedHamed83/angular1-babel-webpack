'use strict';
import template from './editPlan.html';

// component controller
class editPlanCtrl {
  constructor($plansSvc) {
    'ngInject';
    this.$plansSvc = $plansSvc;
  }
  $onInit() {

  }
  updateContact(event) {
    this.$plansSvc.updatePlan(event.plan).then(() => {
      this.$plansSvc.loadUiRoute('plansListView');
    });
  }
  deletePlan(event) {
    this.$plansSvc.deletePlan(event.plan).then(() => {
      this.$plansSvc.loadUiRoute('plansListView');
    });
  }
}
//component settings
let editPlanComponent = {
  template: template,
  controllerAs: 'editPlanCtrl',
  controller: editPlanCtrl,
  bindings: {
    viewStatus: '<',
    plan: '<',
  }
};

export default angular.module('editPlanModule', [])
  .component('editPlanComponent', editPlanComponent)
  .name;
