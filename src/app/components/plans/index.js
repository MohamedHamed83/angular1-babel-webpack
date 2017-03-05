import {
  createPlanComponent,
  createPlanCtrl
} from './createPlan/createPlan.component';
import {
  editPlanComponent,
  editPlanCtrl
} from './editPlan/editPlan.component';
import {
  planDetailComponent,
  planDetailCtrl
} from './planDetail/planDetail.component';
import {
  plansListComponent,
  plansListController
} from './plansList/plansList.component';

export default angular.module('plansModule', [])
  .component('createPlanComponent', createPlanComponent)
  .component('editPlanComponent', editPlanComponent)
  .component('planDetailComponent', planDetailComponent)
  .component('plansListComponent', plansListComponent)
  .name;
