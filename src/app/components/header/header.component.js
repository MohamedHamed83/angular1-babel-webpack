'use strict';
import template from './header.html';

class headerController {
  constructor() {
    let headerCtrl = this;
    headerCtrl.navbarLinkes = [{
        text: "plans",
        status: "active"
      },
      {
        text: "workouts",
        status: ""
      }
    ]
  }
}

let headerComponent = {
  template: template,
  controllerAs: 'headerCtrl',
  controller: [headerController],
  bindings: {
    headerTitle: '='
  }
};

export default angular.module('ngHeader', [])
  .component('headerComponent', headerComponent)
  .name;
