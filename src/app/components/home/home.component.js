'use strict';
import template from './home.html';
import '../../common/services/index';

class homeController {
  constructor(plans) {
    homeController = this;
    homeController.projectHeader = 'welcome to Fitness Club';
    homeController.projectFooter = 'Fitness Club';
    homeController.plansSvc = plans;
    homeController.navbarLinkes = [{
        text: "plans",
        status: "active"
      },
      {
        text: "workouts",
        status: ""
      }
    ]
    homeController.title = 'test title';
    homeController.getworkouts = plans.getworkouts();
    let workoutsSubscription = Rx.Observable.fromPromise(homeController.getworkouts);

    workoutsSubscription.subscribe((x) => {
        console.log(x);
      },
      (err) => {
        console.log('Error: %s', err);
      },
      () => {
        console.log('Completed');
      })
    homeController.allPlans = plans.getPlans();
    let plansSubscription = Rx.Observable.fromPromise(homeController.allPlans);
    plansSubscription.subscribe((x) => {
        console.log(x);
      },
      (err) => {
        console.log('Error: %s', err);
      },
      () => {
        console.log('Completed');
      })
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
