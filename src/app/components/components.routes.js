'use strict';


export default function routes($stateProvider) {
  'ngInject';
  //components routes
  $stateProvider
    .state('loginStView', {
      url: '/login',
      component: 'loginComponent',
    })
    // workouts routes
    .state('workoutsListView', {
      url: "/workouts/:planId",
      component: 'workoutsListViewComponent',
      params: {
        planId: null
      },
      resolve: {
        allWorkouts: ($workoutsByPlanSvc, $stateParams) => {
          return $workoutsByPlanSvc.getWorkoutsKeysPerPlan($stateParams.planId);
        }
      },
    })
    .state('workoutsStView', {
      url: "/workouts",
      component: 'workoutsComponent',
      resolve: {
        allWorkouts: ($workoutsVmSvc) => {
          return $workoutsVmSvc.getworkouts();
        }
      },
    })
    // plans routes
    .state('plansListView', {
      url: '/plans',
      component: 'plansListComponent',
    })
    .state('createPlan', {
      url: '/create-plan',
      component: 'createPlanComponent',
      resolve: {
        viewStatus: ($plansSvc) => $plansSvc.plansViewTypes.newPlan,
      }
    })
    .state('updatePlan', {
      url: '/update-plan/:planId',
      component: 'editPlanComponent',
      resolve: {
        viewStatus: ($plansSvc) => $plansSvc.plansViewTypes.updatePlan,
        plan: ($plansSvc, $stateParams) => {
          const key = $stateParams.planId;
          return $plansSvc.getPlanPerKeys(key);
        }
      }
    })
    .state('deletePlan', {
      url: '/delete-plan/:planId',
      component: 'editPlanComponent',
      resolve: {
        viewStatus: ($plansSvc) => $plansSvc.plansViewTypes.deletePlan,
        plan: ($plansSvc, $stateParams) => {
          const key = $stateParams.planId;
          return $plansSvc.getPlanPerKeys(key);
        }
      }
    })

    // muscle groups routes
    .state('muscleGroupsListView', {
      url: '/',
      component: 'muscleGroupListComponent',
    })
    .state('createMuscleGroups', {
      url: '/create-muscle-groups',
      component: 'createMuscleGroupComponent',
      resolve: {
        viewStatus: ($plansSvc) => $plansSvc.viewTypes.newItem,
      }
    })
    .state('updateMuscleGroups', {
      url: '/update-muscle-groups/:planId',
      component: 'editMuscleGroupComponent',
      resolve: {
        viewStatus: ($plansSvc) => $plansSvc.viewTypes.updateItem,
        plan: ($plansSvc, $stateParams) => {
          const key = $stateParams.planId;
          return $plansSvc.getPlanPerKeys(key);
        }
      }
    })
    .state('deleteMuscleGroups', {
      url: '/delete-muscle-groups/:planId',
      component: 'editMuscleGroupComponent',
      resolve: {
        viewStatus: ($plansSvc) => $plansSvc.viewTypes.deleteItem,
        plan: ($plansSvc, $stateParams) => {
          const key = $stateParams.planId;
          return $plansSvc.getPlanPerKeys(key);
        }
      }
    })
}
