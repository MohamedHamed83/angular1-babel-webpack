'use strict';
import template from './home.html';
import '../../common/services/index';

class homeController {
  constructor(plans) {
    'ngInject';
    this.projectHeader = 'welcome to Fitness Club';
    this.projectFooter = 'Fitness Club';
    this.navbarLinkes = [{
        text: "plans",
        uiSref: "plansStView"
      },
      {
        text: "workouts",
        uiSref:'workoutsStView',
        status: ""
      }
    ]
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
