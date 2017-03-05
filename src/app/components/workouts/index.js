import {
  createWorkoutComponent,
  createWorkoutCtrl
} from './createWorkout/createWorkout.component';
import {
  editWorkoutComponent,
  editWorkoutCtrl
} from './editWorkout/editWorkout.component';
import {
  workoutDetailComponent,
  workoutDetailCtrl
} from './workoutDetail/workoutDetail.component';
import {
  workoutListComponent,
  workoutListCtrl
} from './workoutList/workoutList.component';

export default angular.module('workoutsModule', [])
  .component('createWorkoutComponent', createWorkoutComponent)
  .component('editWorkoutComponent', editWorkoutComponent)
  .component('workoutDetailComponent', workoutDetailComponent)
  .component('workoutListComponent', workoutListComponent)
  .name;
