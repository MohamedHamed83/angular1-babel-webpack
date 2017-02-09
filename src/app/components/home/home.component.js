'use strict';
import template from './home.html';
import '../../common/services/index';

class homeController {
  constructor(plans) {
    homeController = this;
    homeController.plansSvc = plans;
    homeController.allPlans = homeController.plansSvc.getPlans()

    homeController.projectHeader = 'welcome to Fitness Club';
    homeController.projectFooter = 'Fitness Club';
    homeController.navbarLinkes = [{
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
    return homeController.plansSvc.getPlans();
  }
}
let homeComponent = {
  template: template,
  controllerAs: 'homeCtrl',
  controller: ['plans', homeController]
};

export default angular.module('home.component', ['services'])
  .component('homeComponent', homeComponent)
  .name;
