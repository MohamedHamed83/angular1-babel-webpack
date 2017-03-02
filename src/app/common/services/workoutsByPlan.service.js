class workoutsByPlan {
  constructor(firebaseDbRefSvc) {
    'ngInject';
    this.firebaseDbRefSvc = firebaseDbRefSvc;
  }
  /**
   * @ngdoc method
   * @name $workoutsByPlanSvc#getWorkoutsById
   * @description
   * Db refrance to workouts by plan Id.
   */
  getWorkoutsById(planId, allWorkouts) {
    var selectedWorkouts = [];
    _.forEach(allWorkouts, function (workout) {
      if (planId === workout.planId) {
        selectedWorkouts.push(workout);
      }
    });
    return selectedWorkouts;
  }
  getWorkoutsKeysPerPlan(planId) {
    return this.firebaseDbRefSvc.workoutsKeysPerPlanApi(planId).$loaded();
  }
  workoutsKeysPerMuscleGroup(groupId) {
    return this.firebaseDbRefSvc.workoutsKeysPerMuscleGroupApi(groupId).$loaded();
  }
  getWorkoutsPerPlan(allWorkouts) {
    let selectedWorkouts = [];
    var workoutsByPlan = this;
    _.forEach(allWorkouts, function (workout) {
      workoutsByPlan.firebaseDbRefSvc.getWorkoutByPlanIdApi(workout.$id).then(function (res) {
        selectedWorkouts.push(res);
      });
    });
    return selectedWorkouts
  }
}
/**
 * @ngdoc module
 * @name ngWorkoutsByPlan
 * @module ngWorkoutsByPlan
 *
 * @description Provides workouts HTTP methods for our firebase connection.
 */
export default angular.module('ngWorkoutsByPlan', [])
  /**
   * @ngdoc service
   * @name $workoutsByPlanSvc
   * @module ngWorkoutsByPlan
   *
   * @description Provides workouts HTTP methods for our firebase connection.
   */
  .service('$workoutsByPlanSvc', workoutsByPlan)
  .name;
