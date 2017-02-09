'use strict';

routes.$inject = ['$stateProvider', 'workoutsVmSvcProvider'];

export default function routes($stateProvider, workoutsVmSvcProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'loginComponent',
    }).state('workouts', {
      url: "/workouts",
      component: 'workoutsByPlanComponent',
      resolve: {
        allWorkouts: function () {
          return workoutsVmSvcProvider.$get().getworkouts();
        }
      },
    })
    .state('plans', {
      url: '/',
      component: 'plansComponent',
    })
}
