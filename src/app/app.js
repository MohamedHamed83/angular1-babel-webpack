import 'angular-ui-router';
import ngAnimate from 'angular-animate';
import 'angular-loading-bar';
//module to allow using components in ui router
import './common/config/route-to-component';
//application components module
import './components/index';
import 'angular-resource';
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

angular.module('fitnessClub', ['ui.router','ngResource', 'ui.router.components', 'angular-loading-bar', 'components', ngAnimate])
  .config(routing)
  .name
