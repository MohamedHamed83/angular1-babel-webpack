'use strict';
import template from './createPlan.html';

// component controller
class createPlanCtrl {
  constructor($plansSvc) {
    'ngInject';
    this.$plansSvc = $plansSvc;
  }
  $onInit() {
    this.plan = {
      description: '',
      url: ''
    }
  }
  createNewContact(event) {
    this.$plansSvc.createNewPlan(event.plan).then(() => {
      this.$plansSvc.loadUiRoute('plansListView');
    })
  }
}
//component settings
let createPlanComponent = {
  template: template,
  controllerAs: 'createPlanCtrl',
  controller: createPlanCtrl,
  bindings: {
    viewStatus: '='
  }
};

export default angular.module('createPlanModule', [])
  .component('createPlanComponent', createPlanComponent)
  .name;
