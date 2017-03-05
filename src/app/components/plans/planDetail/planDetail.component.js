'use strict';
import template from './planDetail.html';

// component controller
export class planDetailCtrl {
  constructor($plansSvc) {
    'ngInject';
    this.$plansSvc = $plansSvc;
    this.viewTypes = this.$plansSvc.viewTypes;
  }
  $onInit() {

  }
  savePlan() {
    this.onSave({
      $event: {
        plan: this.plan,
      },
    });
  }
  updatePlan() {
    this.onUpdate({
      $event: {
        plan: this.plan,
      },
    });
  }
  deletePlan() {
    this.onDelete({
      $event: {
        plan: this.plan,
      }
    })
  }
}
//component settings
export const planDetailComponent = {
  template: template,
  controllerAs: 'planDetailCtrl',
  controller: planDetailCtrl,
  bindings: {
    plan: '=',
    viewStatus: '=',
    onSave: '&',
    onUpdate: '&',
    onDelete: '&',
  }
};

export default angular.module('planDetailModule', [])
  .component('planDetailComponent', planDetailComponent)
  .name;
