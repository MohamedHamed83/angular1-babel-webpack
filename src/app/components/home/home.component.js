'use strict';
import template from './home.html';
import '../../common/services/index';

class homeController {
  constructor(plans, workouts) {
    homeController = this;
    homeController.plansSvc = plans;
    homeController.workoutsSvc = workouts;
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
  getSelectedListItem(item) {
    this.allPlans = [];
    Rx.Observable.fromPromise(homeController.workoutsSvc.getworkouts())
      .subscribe((workouts) => {
        homeController.allPlans = _.filter(workouts, (workout) => {
          if (workout.planId === item.$id) {
            this.allPlans.push(workout);
          }
        })
      });
    return this.allPlans;
  }
}
let homeComponent = {
  template: template,
  controllerAs: 'homeCtrl',
  controller: ['plans', 'workouts', homeController]
};

export default angular.module('home.component', ['services'])
  .component('homeComponent', homeComponent)
  .name;
