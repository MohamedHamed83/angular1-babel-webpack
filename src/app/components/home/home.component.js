'use strict';
import template from './home.html';
import '../../common/services/index';
require('./home.scss');

class homeController {
  constructor(plans) {
    homeController = this;
    homeController.title = 'test title';
    homeController.allPlans = plans.getPlans();
    let plansSource = Rx.Observable.fromPromise(homeController.allPlans);
    plansSource.subscribe((x) => {
        console.log('Next: %s', x);
      },
      (err) => {
        console.log('Error: %s', err);
      },
      () => {
        console.log('Completed');
      })
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

export default angular.module('home', ['services'])
  .component('homeComponent', homeComponent)
  .name;
