'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('login', {
      url: '/',
      component: 'loginComponent',
    })
    .state('home', {
      url: '/home',
      component: 'homeComponent',
    });
}
