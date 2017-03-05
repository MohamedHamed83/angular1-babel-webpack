import {
  createMuscleGroupCtrl,
  createMuscleGroupComponent
} from './createMuscleGroup/createMuscleGroup.component';
import {
  editMuscleGroupCtrl,
  editMuscleGroupComponent
} from './editMuscleGroup/editMuscleGroup.component';
import {
  muscleGroupDetailCtrl,
  muscleGroupDetailComponent
} from './muscleGroupDetail/muscleGroupDetail.component';
import {
  muscleGroupListController,
  muscleGroupListComponent
} from './muscleGroupList/muscleGroupList.component';

export default angular.module('muscleGroupModule', [])
  .component('createMuscleGroupComponent', createMuscleGroupComponent)
  .component('editMuscleGroupComponent', editMuscleGroupComponent)
  .component('muscleGroupDetailComponent', muscleGroupDetailComponent)
  .component('muscleGroupListComponent', muscleGroupListComponent)
  .name;
