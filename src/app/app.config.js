'use strict';

export function routing($urlRouterProvider, $locationProvider, cfpLoadingBarProvider, toastrConfig) {
  'ngInject';
  angular.extend(toastrConfig, {
    timeOut: 500,
    positionClass: 'toast-bottom-right',
     progressBar: true
  });
  cfpLoadingBarProvider.includeSpinner = false;
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
}
