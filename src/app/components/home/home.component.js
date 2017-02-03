'use strict';
import template from './home.html';
import '../../common/services/index';
require('./home.scss');

 class homeController {
  constructor(plans) {
    console.log(plans)
    this.plansSvc = plans;
    this.title = 'test title';
    this.plans = this.plansSvc.getPlans();
  }
  getplans() {
    return this.plansSvc.getPlans();
  }
}

let homeComponent = {
  template: template,
  controllerAs: 'homeCtrl',
  controller: ['plans', homeController]
};

export default angular.module('home', ['fitnessClub.services'])
  .component('homeComponent', homeComponent)
  .name;
