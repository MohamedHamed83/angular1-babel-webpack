  /**
   * @ngdoc service
   * @name workoutsVmSvc
   * @module workouts.service
   *
   * @description Provides workouts HTTP methods for our firebase connection.
   */
class workoutsVmSvc {
  constructor(firebaseDbRefSvc) {
    'ngInject';
    this.firebaseDbRefSvc = firebaseDbRefSvc;
  }
  getworkouts() {
    return this.firebaseDbRefSvc.getAllWorkouts().$loaded();
  }
  getworkoutById(workoutId) {
    return this.firebaseDbRefSvc.getworkoutByIdApi(workoutId).$loaded();
  }
  workoutsRef() {
    return this.firebaseDbRefSvc.workoutsDbRef();
  }
}

/**
 * @ngdoc module
 * @name ngWorkouts
 * @module ngWorkouts
 *
 * @description Provides workouts HTTP methods for our firebase connection.
 */
export default angular.module('ngWorkouts', [])
/**
 * @ngdoc service
 * @name workoutsVmSvc
 * @module ngWorkouts
 *
 * @description Provides workouts HTTP methods for our firebase connection.
 */
  .service('workoutsVmSvc', workoutsVmSvc)
  .name;
