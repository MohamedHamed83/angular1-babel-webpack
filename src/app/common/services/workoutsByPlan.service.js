class workoutsByPlan {
  constructor(planId) {
    workoutsByPlan = this;
  }

}

export default angular.module('workoutsByPlan.service', [])
  .service('workoutsByPlan', [(planId) => new workoutsByPlan(planId)])
  .name;
