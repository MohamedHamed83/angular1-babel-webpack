  /**
   * @ngdoc service
   * @name workoutsVmSvc
   * @module workouts.service
   *
   * @description Provides workouts HTTP methods for our firebase connection.
   */
  class workoutsVmSvc {
    constructor(firebaseDbRefSvc, toastr) {
      'ngInject';
      this.firebaseDbRefSvc = firebaseDbRefSvc;
      this.toastr = toastr
    }
    /**
     * @ngdoc method
     * @name $workoutsVmSvc#workoutOnload
     *
     * @description
     * Returns confirmation message.
     *
     * @returns workout view confirmation message.
     */
    workoutOnload() {
      this.toastr.info('Loading workouts view');
    }
    /**
     * @ngdoc method
     * @name $workoutsVmSvc#getworkouts
     *
     * @description
     * Returns list of plans.
     *
     * @returns {Array} list of workouts.
     */
    getworkouts() {
      return this.firebaseDbRefSvc.getAllWorkouts().$loaded();
    }
    /**
     * @ngdoc method
     * @name $workoutsVmSvc#getworkoutById
     * @param {string} workout Id
     * @description
     * Get selected workout by Id .
     *
     */
    getworkoutById(workoutId) {
      return this.firebaseDbRefSvc.getworkoutByIdApi(workoutId).$loaded();
    }
    /**
     * @ngdoc method
     * @name $workoutsVmSvc#workoutsRef
     * @description
     * Db refrance to workouts array.
     */
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
     * @name $workoutsVmSvc
     * @module ngWorkouts
     *
     * @description Provides workouts HTTP methods for our firebase connection.
     */
    .service('$workoutsVmSvc', workoutsVmSvc)
    .name;
