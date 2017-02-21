'use strict';


export default function routes($stateProvider) {
  'ngInject';
  //components routes
  $stateProvider
    .state('loginStView', {
      url: '/login',
      component: 'loginComponent',
    })
    // workouts by plan list view
    .state('workoutsByPlanView', {
      url: "/workouts/:planId",
      component: 'workoutsByPlanComponent',
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
    // plans list view
    .state('plansListView', {
      url: '/',
      component: 'plansComponent',
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

}
