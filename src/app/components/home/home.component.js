'use strict';

import template from './home.html';
import homeController from './home.controller'

let homeComponent = {
  template: template,
  controllerAs: 'homeController',
  controller: ['$firebaseArray', homeController]
};

export default homeComponent;