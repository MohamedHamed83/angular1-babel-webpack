'use strict';


export default function routes($stateProvider) {
  'ngInject';
  //components routes
  $stateProvider
    .state('loginStView', {
      url: '/login',
      component: 'loginComponent',
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
    .state('updateMuscleGroup', {
      url: '/update-muscle-groups/:itemId',
      component: 'editMuscleGroupComponent',
      resolve: {
        viewStatus: ($plansSvc) => $plansSvc.viewTypes.updateItem,
        muscleGroup: ($workoutsVmSvc, $stateParams) => {
          const key = $stateParams.itemId;
          return $workoutsVmSvc.getMuscleGroupPerKeys(key);
        }
      }
    })
    .state('deleteMuscleGroup', {
      url: '/delete-muscle-groups/:itemId',
      component: 'editMuscleGroupComponent',
      resolve: {
        viewStatus: ($plansSvc) => $plansSvc.viewTypes.deleteItem,
        muscleGroup: ($workoutsVmSvc, $stateParams) => {
          const key = $stateParams.itemId;
          return $workoutsVmSvc.getMuscleGroupPerKeys(key);
        }
      }
    })
    // workouts routes
    .state('workoutsByPlan', {
      url: '/workouts-by-plan/:planId',
      component: 'workoutListComponent',
      params: {
        planId: null
      },
      resolve: {
        viewType: () => {
          return 'workoutsByPlan';
        },
        allWorkouts: ($workoutsByPlanSvc, $stateParams) => {
          return $workoutsByPlanSvc.getWorkoutsKeysPerPlan($stateParams.planId);
        }
      },
    })
    .state('workoutsByMuscle', {
      url: '/workouts-by-muscle-group/:itemId',
      component: 'workoutListComponent',
      params: {
        planId: null
      },
      resolve: {
        viewType: () => {
          return 'workoutsByMuscle';
        },
        allWorkouts: ($workoutsByPlanSvc, $stateParams) => {
          return $workoutsByPlanSvc.workoutsKeysPerMuscleGroup($stateParams.itemId);
        }
      },
    })
    .state('allWorkoutsView', {
      url: '/workouts',
      component: 'workoutListComponent',
      resolve: {
        viewType: () => {
          return 'allWorkoutsView';
        },
        allWorkouts: ($workoutsVmSvc) => {
          return $workoutsVmSvc.getworkouts();
        }
      },
    })
    .state('createWorkout', {
      url: '/create-workout',
      component: 'createWorkoutComponent',
      resolve: {
        viewStatus: ($plansSvc) => $plansSvc.viewTypes.newItem,
        muscleGroups: ($workoutsVmSvc) => {
          return $workoutsVmSvc.muscleGroupsList();
        }
      },
    });
}
