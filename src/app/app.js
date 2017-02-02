import 'angular-ui-router';
import './components/index';
import routing from './app.config';


/**
 * This includes all of our nested modules.
 **/

angular.module('fitnessClub', ['ui.router', 'components'])
  .config(routing)
  .name
