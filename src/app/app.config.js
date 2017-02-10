'use strict';


export function routing($urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {
  'ngInject';
  // app settings
  cfpLoadingBarProvider.includeSpinner = false;
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
}
