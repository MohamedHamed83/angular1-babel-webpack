'use strict';

import template from './home.html';


class homeController {
  constructor($firebaseArray) {
    let homeController = this;
    homeController.title = 'test title 1';
    // let ref = firebase.database().ref().child("plans");
    // homeController.plans = [];
    // homeController.plans =  $firebaseArray(ref);
    // console.log(homeController.plans)
  }
}
let homeComponent = {
  template: template,
  controllerAs: 'homeController',
  controller:  homeController
};

export default homeComponent;