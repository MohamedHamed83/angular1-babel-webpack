'use strict';

export function routing($urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {
  'ngInject';
  cfpLoadingBarProvider.includeSpinner = false;
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
}
