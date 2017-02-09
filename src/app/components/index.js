import uirouter from 'angular-ui-router';
import 'firebase/auth';
import 'firebase/database';
import '../common/services/index';
import routing from './components.routes';



// stateless components
import './header/header.component';
import './footer/footer.component';
import './login/login.component';
import './navbar/navbar.component';
import './listview/listview.component';
import './listItem/listItem.component';
import './searchBar/searchBar.component';
// stateful  components
import './home/home.component'
import './plans/plans.component'
import './workouts/workouts.component';


export default angular.module('components', ['services','ngSearchBar.component', 'home.component', 'login.component', 'plans.component',
    'ngHeader.component', 'ngFooter.component', 'ngNavbar.component', 'nglistItem.component', 'nglistview.component', 'workoutsByPlan.component'
  ])
  .config(routing)
  .name;
