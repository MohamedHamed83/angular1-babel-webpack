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
//thumbnail view components
import './common/thumbnailView/thumbnailView.component';
import './common/thumbnailItem/thumbnailItem.component';
//listview components
import './common/listview/listview.component';
import './common/listItem/listItem.component';
//search bar component
import './common/searchBar/searchBar.component';
// stateful  components
import './home/home.component'
//Muscle Group componente
import './muscleGroups/muscleGroupList/muscleGroupList.component';
import './muscleGroups/muscleGroupDetail/muscleGroupDetail.component';
import './muscleGroups/createMuscleGroup/createMuscleGroup.component';
import './muscleGroups/editMuscleGroup/editMuscleGroup.component';

//plans componente
import './plans/plansList/plansList.component';
import './plans/createPlan/createPlan.component';
import './plans/planDetail/planDetail.component';
import './plans/editPlan/editPlan.component';

//workout componente
import './workouts/workoutList/workoutList.component';
import './workouts/workoutDetail/workoutDetail.component';
import './workouts/editWorkout/editWorkout.component';
import './workouts/createWorkout/createWorkout.component';

//application components module
export default angular.module('components', ['services',
    'ngSearchBarModule', 'homeModule', 'loginModule', 'plansListModule',
    'ngHeaderModule', 'ngFooterModule', 'ngNavbarModule', 'nglistItemModule',
    'nglistviewModule', 'createPlanModule',
    'editPlanModule', 'planDetailModule', 'muscleGroupListModule',
    'createMuscleGroupModule', 'muscleGroupDetailModule', 'editMuscleGroupModule',
    'ngThumbnailItemModule', 'ngthumbnailViewModule','workoutListModule', 'workoutDetailModule',
    'editWorkoutModule', 'createWorkoutModule'
  ])
  .config(routing)
  .name;
