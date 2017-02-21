'use strict';
import template from './createPlan.html';

// component controller
class createPlanCtrl {
  constructor($plansSvc) {
    'ngInject';
    this.$plansSvc = $plansSvc;
  }
  $onInit() {
    console.log(this)
    this.plan = {
      description: '',
      url: ''
    }
  }
  createNewContact(event) {
    this.$plansSvc.CreateNewPlan(event.contact).then(function () {
      this.$plansSvc.reloadView('plansStView');
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
