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
        text: 'muscle groups',
        uiSref: 'muscleGroupsListView'
      }, {
        text: 'Plans',
        uiSref: 'plansListView'
      },
      {
        text: 'All Workouts',
        uiSref: 'allWorkoutsView',
      }
    ];
  }
}
//component settings
let homeComponent = {
  template: template,
  controllerAs: 'homeCtrl',
  controller: homeController
};

export default angular.module('homeModule', ['services'])
  .component('homeComponent', homeComponent)
  .name;
