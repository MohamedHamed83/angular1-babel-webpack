'use strict';

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
}
