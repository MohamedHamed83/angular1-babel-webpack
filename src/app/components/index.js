import uirouter from 'angular-ui-router';
import 'firebase/auth';
import 'firebase/database';
import './home/home.component'
import routing from './components.routes';

// stateless components
import './header/header.component';
import './footer/footer.component';
import './login/login.component';
import './navbar/navbar.component';
import './listview/listview.component';


export default angular.module('components', ['home', 'login', 'ngHeader', 'ngFooter','ngNavbar','nglistview'])
  .config(routing)
  .name;
