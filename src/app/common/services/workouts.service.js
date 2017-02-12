class workoutsVmSvc {
  constructor(firebaseDbRefSvc) {
    'ngInject';
    this.firebaseDbRefSvc = firebaseDbRefSvc;
  }
  getworkouts() {
    return this.firebaseDbRefSvc.getAllWorkouts().$loaded();
  }
  /**
   * Remove selected plan
   * @param  {Object} plan The plan object of the selected plan.
   * @return {Promise}  A promise to the deleted plan.
   */
  removePlan(plan) {
    return this.firebaseDbRefSvc.plansDbRef().$remove(plan);
  }
  /**
   * Get workouts by id
   * @param  {string} workoutId The id of the selected workout
   * @return {Promise}  A promise to the returned workout.
   */
  getworkoutById(workoutId) {
    return this.firebaseDbRefSvc.getworkoutByIdApi(workoutId).$loaded();
  }
  /**
   * workout ref api
   * @return Api to workouts db path .
   */
  workoutsRef() {
    return this.firebaseDbRefSvc.workoutsDbRef();
  }
}
/**
 * @ngdoc service
 * @name workoutsVmSvc
 * @module workouts.service
 *
 * @description Provides workouts HTTP methods for our firebase connection.
 */
export default angular.module('workouts.service', [])
  .service('workoutsVmSvc', workoutsVmSvc)
  .name;
