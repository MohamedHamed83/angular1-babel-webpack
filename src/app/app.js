import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './features/home/index';
import routing from './app.config';
import FirebaseModule from './shared/firebaseConfig';


angular.module('limFit', ['ui.router', 'limFit.home','firebase'])
  .config(routing);