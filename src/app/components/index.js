import uirouter from 'angular-ui-router';
import 'firebase/auth';
import 'firebase/database';
import './home/index'
import routing from './components.routes';

export default angular.module('components', ['components.home'])
  .config(routing)
  .name;
