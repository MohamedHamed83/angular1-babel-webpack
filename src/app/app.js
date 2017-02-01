import 'angular-ui-router';
import './components/home/index';
import routing from './app.config';
import FirebaseModule from './common/index';


angular.module('limFit', ['ui.router', 'limFit.home','firebase'])
  .config(routing);