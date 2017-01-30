'use strict';

import template from './home.html';
let firebase = require('firebase/app');

class homeController {
  constructor($firebaseArray) {
    let homeController = this;
    homeController.title = 'test title';
    let ref = firebase.database().ref().child("plans");
    homeController.plans = [];
    homeController.plans =  $firebaseArray(ref);
  }
}
let homeComponent = {
  template: template,
  controllerAs: 'homeController',
  controller:  homeController
};

export default homeComponent;