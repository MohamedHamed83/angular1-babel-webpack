import uirouter from 'angular-ui-router';
import 'firebase/auth';
import 'firebase/database';

import limFitService from '../common/services/index';
require('./home/home.scss')
import routing from './home/home.routes';
import homeComponent from './home/home.component';



export default angular.module('limFit.home', [uirouter, limFitService])
  .config(routing)
  .component('homeComponent', homeComponent)
  .name;