'use strict';
import template from './login.component.html';

// component controller
 class loginController {
  constructor() {
    'ngInject';
  }
}
//component settings
let loginComponent = {
  template: template,
  controllerAs: 'logInCtrl',
  controller: loginController
};

export default angular.module('login.component', [])
  .component('loginComponent', loginComponent)
  .name;
