//firebase modules
import 'firebase/auth';
import 'firebase/database';

//services module
import '../common/services/index';
//components routing
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
import './workoutsByPlan/workoutsByPlan.component';
import './workouts/workouts.component';
import './createPlan/createPlan.component';
import './createWorkout/createWorkout.component';
import './editPlan/editPlan.component';
import './editWorkout/editWorkout.component';

//application components module
export default angular.module('components', ['services','ngSearchBarModule', 'homeModule', 'loginModule', 'plansModule',
    'ngHeaderModule', 'ngFooterModule', 'ngNavbarModule', 'nglistItemModule', 'nglistviewModule', 'workoutsByPlanModule',
    'workoutsModule','createWorkoutModule', 'editWorkoutModule', 'createPlanModule',  'editPlanModule'
  ])
  .config(routing)
  .name;
