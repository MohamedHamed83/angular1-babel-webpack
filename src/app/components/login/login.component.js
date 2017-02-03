'use strict';
import template from './login.component.html';
require('./login.scss');

 class loginController {
  constructor() {

  }
}

let loginComponent = {
  template: template,
  controllerAs: 'logInCtrl',
  controller: [loginController]
};

export default angular.module('login', [])
  .component('loginComponent', loginComponent)
  .name;
