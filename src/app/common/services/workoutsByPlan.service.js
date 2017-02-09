class workoutsByPlan {
  constructor() {
    'ngInject';
  }

}

export default angular.module('workoutsByPlan.service', [])
  .service('workoutsByPlan', workoutsByPlan)
  .name;
