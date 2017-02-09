'use strict';
import template from './login.component.html';

 class loginController {
  constructor() {
    'ngInject';
  }
}

let loginComponent = {
  template: template,
  controllerAs: 'logInCtrl',
  controller: loginController
};

export default angular.module('login.component', [])
  .component('loginComponent', loginComponent)
  .name;
