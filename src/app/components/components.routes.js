'use strict';


export default function routes($stateProvider, $workoutsVmSvcProvider, $resourceProvider) {
  'ngInject';
  //components routes
  $stateProvider
    .state('loginStView', {
      url: '/login',
      component: 'loginComponent',
    })
    // workouts list view
    .state('workoutsStView', {
      url: "/workouts",
      component: 'workoutsByPlanComponent',
      resolve: {

        allWorkouts: function () {
          return $workoutsVmSvcProvider.$get().getworkouts();
        }
      },
    })
    // plans list view
    .state('plansStView', {
      url: '/',
      component: 'plansComponent',
    })
}
