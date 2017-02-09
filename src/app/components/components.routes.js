'use strict';


export default function routes($stateProvider, workoutsVmSvcProvider) {
  'ngInject';
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
