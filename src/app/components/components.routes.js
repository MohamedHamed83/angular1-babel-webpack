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
        allWorkouts: function ($workoutsByPlanSvc, $stateParams) {
          return $workoutsByPlanSvc.getWorkoutsKeysPerPlan($stateParams.planId);
        }
      },
    })
    .state('workoutsStView', {
      url: "/workouts",
      component: 'workoutsComponent',
      resolve: {
        allWorkouts: function ($workoutsVmSvc) {
          return $workoutsVmSvc.getworkouts();
        }
      },
    })
    // plans list view
    .state('plansStView', {
      url: '/',
      component: 'plansComponent',
    })
}
