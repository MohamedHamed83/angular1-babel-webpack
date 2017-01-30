import uirouter from 'angular-ui-router';
import home from './features/home/index';
import routing from './app.config';


angular.module('limFit', [uirouter, home, "firebase"])
  .config(routing);