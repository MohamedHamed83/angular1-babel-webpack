'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('login', {
      url: '/login',
      component: 'loginComponent',
    })
    .state('home', {
      url: '/',
      component: 'homeComponent',
    });
}
