//firebase modules
import 'firebase/auth';
import 'firebase/database';

//services module
import '../common/services/index';
//components routing
import routing from './components.routes';
// stateless components
import './common/header/header.component';
import './common/footer/footer.component';
import './login/login.component';
import './common/navbar/navbar.component';
import './common/listview/listview.component';
import './common/listItem/listItem.component';
import './common/searchBar/searchBar.component';
import './plans/planDetail/planDetail.component';
// stateful  components
import './home/home.component'
import './plans/plansList/plansList.component'
import './plans/createPlan/createPlan.component';
import './plans/editPlan/editPlan.component';
import './workouts/createWorkout/createWorkout.component';
import './workouts/workoutsByPlan/workoutsByPlan.component';
import './workouts/workoutsList/workoutsList.component';
import './workouts/editWorkout/editWorkout.component';

//application components module
export default angular.module('components', ['services', 'ngSearchBarModule', 'homeModule', 'loginModule', 'plansListModule',
    'ngHeaderModule', 'ngFooterModule', 'ngNavbarModule', 'nglistItemModule', 'nglistviewModule', 'workoutsByPlanModule',
    'workoutsListModule', 'createWorkoutModule', 'editWorkoutModule', 'createPlanModule', 'editPlanModule', 'planDetailModule'
  ])
  .config(routing)
  .name;
