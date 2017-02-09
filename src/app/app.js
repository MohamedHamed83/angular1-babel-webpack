import 'angular-ui-router';
import './common/config/route-to-component';
import './components/index';
import routing from './app.config';


/**
 * This includes all of our nested modules.
 **/

angular.module('fitnessClub', ['ui.router','ui.router.components', 'components'])
  .config(routing)
  .name
