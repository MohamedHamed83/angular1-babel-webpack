import uirouter from 'angular-ui-router';
import 'firebase/auth';
import 'firebase/database';

import routing from './components.routes';


// stateful  components
import './home/home.component'
import './plans/plans.component'
// stateless components
import './header/header.component';
import './footer/footer.component';
import './login/login.component';
import './navbar/navbar.component';
import './listview/listview.component';


export default angular.module('components', ['home.component', 'login.component', 'plans.component',
    'ngHeader.component', 'ngFooter.component', 'ngNavbar.component', 'nglistview.component'
  ])
  .config(routing)
  .name;
