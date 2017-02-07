'use strict';
import template from './home.html';
import '../../common/services/index';

class homeController {
  constructor(plans) {
    homeController = this;
    homeController.plansSvc = plans;
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
    Rx.Observable.fromEvent(homeController.plansSvc.plansRef(), 'child_added').subscribe((snap) => {
      console.log(snap.key);
    });
    Rx.Observable.fromEvent(homeController.plansSvc.plansRef(), 'child_changed').subscribe((snap) => {
      console.log(snap.key);
    });
    Rx.Observable.fromEvent(homeController.plansSvc.plansRef(), 'child_removed').subscribe((snap) => {
      console.log(snap.key);
    });
  }
  getplans() {
    return homeController.plansSvc.getPlans();
  }
  pushItem() {
    return homeController.plansSvc.addNewPlan();
  }
}
let homeComponent = {
  template: template,
  controllerAs: 'homeCtrl',
  controller: ['plans', homeController]
};

export default angular.module('home', ['services'])
  .component('homeComponent', homeComponent)
  .name;
