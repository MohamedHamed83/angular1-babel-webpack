'use strict';
import template from './createPlan.html';

// component controller
export class createPlanCtrl {
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
  createNewPlan(event) {
    this.$plansSvc.createNewPlan(event.plan).then(() => {
      this.$plansSvc.loadUiRoute('plansListView');
    })
  }
}
//component settings
export const createPlanComponent = {
  template: template,
  controllerAs: 'createPlanCtrl',
  controller: createPlanCtrl,
  bindings: {
    viewStatus: '='
  }
};

