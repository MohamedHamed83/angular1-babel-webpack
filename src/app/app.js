import 'angular-ui-router';
import 'angular-loading-bar';

//module to allow using components in ui router
import './common/config/route-to-component';
//application components module
import './components/index';

//app route settings
import {
  routing
} from './app.config';


/**
 * This includes all of our nested modules.
 **/

angular.module('fitnessClub', ['ui.router', 'ui.router.components', 'angular-loading-bar', 'components'])
  .config(routing)
  .name
