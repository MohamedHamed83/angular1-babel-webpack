'use strict';
import template from './home.html';
import '../../common/services/index';
// component controller
class homeController {
  constructor() {
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
//component settings
let homeComponent = {
  template: template,
  controllerAs: 'homeCtrl',
  controller: homeController
};

export default angular.module('home.component', ['services'])
  .component('homeComponent', homeComponent)
  .name;
