'use strict';

import template from './home.html';
import homeController from './home.controller'

let homeComponent = {
  template: template,
  controllerAs: 'homeCtrl',
  controller: ['plans', homeController]
};

export default homeComponent;
