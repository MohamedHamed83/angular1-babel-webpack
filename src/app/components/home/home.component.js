'use strict';

import template from './home.html';
import homeController from './home.controller'

let homeComponent = {
  template: template,
  controllerAs: 'homeController',
  controller: ['plans','workouts', homeController]
};

export default homeComponent;