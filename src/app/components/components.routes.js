'use strict';


export default function routes($stateProvider, workoutsVmSvcProvider) {
  'ngInject';
  $stateProvider
    .state('loginStView', {
      url: '/login',
      component: 'loginComponent',
    }).state('workoutsStView', {
      url: "/workouts",
      component: 'workoutsByPlanComponent',
      resolve: {
        allWorkouts: function () {
          return workoutsVmSvcProvider.$get().getworkouts();
        }
      },
    })
    .state('plansStView', {
      url: '/',
      component: 'plansComponent',
    })
}
