'use strict';

import './home.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import homeComponent from './home.component';

export default angular.module('app.home', [uirouter])
  .config(routing)
  .component('homeComponent', homeComponent)
  .name;