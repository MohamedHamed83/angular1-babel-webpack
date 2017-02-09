'use strict';
import template from './home.html';
import '../../common/services/index';

class homeController {
  constructor(plans) {
    'ngInject';
    this.plansSvc = plans;
    this.allPlans = this.plansSvc.getPlans()

    this.projectHeader = 'welcome to Fitness Club';
    this.projectFooter = 'Fitness Club';
    this.navbarLinkes = [{
        text: "plans",
        status: "active"
      },
      {
        text: "workouts",
        status: ""
      }
    ]
  }
  getplans() {
    return this.plansSvc.getPlans();
  }
}
let homeComponent = {
  template: template,
  controllerAs: 'homeCtrl',
  controller: homeController
};

export default angular.module('home.component', ['services'])
  .component('homeComponent', homeComponent)
  .name;
