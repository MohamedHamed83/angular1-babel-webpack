class workoutsByPlan {
  constructor() {
    'ngInject';
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
 * @name workoutsByPlan
 * @module ngWorkoutsByPlan
 *
 * @description Provides workouts HTTP methods for our firebase connection.
 */
  .service('workoutsByPlan', workoutsByPlan)
  .name;
