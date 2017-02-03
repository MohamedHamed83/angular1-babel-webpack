import uirouter from 'angular-ui-router';
import 'firebase/auth';
import 'firebase/database';
import './home/home.component'
import routing from './components.routes';

// stateless components
import './login/login.component'



export default angular.module('components', ['home','login'])
  .config(routing)
  .name;
