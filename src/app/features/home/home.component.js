'use strict';

import template from './home.html';
import homeController from './home.controller'
let firebase = require('firebase/app');

let homeComponent = {
  template: template,
  controllerAs: 'homeController',
  controller:  homeController
};

export default homeComponent;