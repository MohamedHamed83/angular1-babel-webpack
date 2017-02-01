'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'firebase/auth';
import 'firebase/database';
require('./home.scss')
import routing from './home.routes';
import homeComponent from './home.component';

export default angular.module('limFit.home', [uirouter])
  .config(routing)
  .component('homeComponent', homeComponent)
  .name;