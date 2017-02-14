import 'angular-ui-router';
import 'angular-animate';
import 'angular-loading-bar';
import 'angular-toastr';
require('angular-toastr/dist/angular-toastr.css')
//module to allow using components in ui router
import './common/config/route-to-component';
//application components module
import './components/index';

//app route settings
import {
  routing
} from './app.config';


/**
 * @ngdoc module
 * @requires ui.router, ui.router.components, angular-loading-bar and components
 * @name fitnessClub
 * @module fitnessClub
 * @description This is the main module for application
 */

angular.module('fitnessClub', ['ui.router', 'ui.router.components', 'angular-loading-bar', 'ngAnimate', 'toastr', 'components'])
  .config(routing)
  .name
