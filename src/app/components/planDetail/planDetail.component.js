'use strict';
import template from './planDetail.html';

// component controller
class planDetailCtrl {
  constructor($plansSvc) {
    'ngInject';
    this.$plansSvc = $plansSvc;
  }
  $onInit() {
    console.log(this.$plansSvc.viewStatus)
  }
  savePlan() {
    this.onSave({
      $event: {
        plan: this.plan,
      },
    });
  }
}
//component settings
let planDetailComponent = {
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
