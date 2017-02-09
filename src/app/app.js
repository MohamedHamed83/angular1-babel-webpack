import 'angular-ui-router';
import 'angular-loading-bar';
import './common/config/route-to-component';
import './components/index';
import {routing, runApp}  from './app.config';


/**
 * This includes all of our nested modules.
 **/

angular.module('fitnessClub', ['ui.router','ui.router.components','angular-loading-bar', 'components'])
  .config(routing)
  .name
