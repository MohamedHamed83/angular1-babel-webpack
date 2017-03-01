  /**
   * @ngdoc service
   * @name workoutsVmSvc
   * @module workouts.service
   *
   * @description Provides workouts HTTP methods for our firebase connection.
   */
  class workoutsVmSvc {
    constructor(firebaseDbRefSvc, $state) {
      'ngInject';
      this.firebaseDbRefSvc = firebaseDbRefSvc;
      this.$state = $state;

    }
    muscleGroupsList() {
      return this.firebaseDbRefSvc.muscleGroupsArray().$loaded();
    }
    getMuscleGroups() {
      return this.firebaseDbRefSvc.muscleGroupsArray();
    }
    getMuscleGroupPerKeys(itemId) {
      return this.firebaseDbRefSvc.muscleGroupPerKeysApi(itemId).$loaded();
    }
    updateMuscleGroup(muscleGroup) {
      return muscleGroup.$save();
    }
    /**
     * @ngdoc method
     * @name $plansSvc#removePlan
     *
     * @description
     * Http Call to remove plan .
     *
     */
    deleteMuscleGroup(muscleGroup) {
      return muscleGroup.$remove();
    }
    /**
     * @ngdoc method
     * @name $plansSvc#loadRoute
     * @param {string} view name
     * @param {string} view params
     * @description
     * load selected ui route.
     */
    loadRoute(view, params) {
      if (params) {
        this.$state.go(view, {
          itemId: params
        });
      } else {
        this.$state.go(view);
      }
    }
    createNewWorkout(workout) {
      var dbRefSvc = this.firebaseDbRefSvc;
      var workoutRef = dbRefSvc.workoutsArray().$add({
        workout: workout
      })
      workoutRef.then(function (ref) {
        var refId = ref.key
        const muscleRef = dbRefSvc.workoutsPerMuscleGroupArray().child(workout.muscleGroupId);
        const workoutPerMuscle = muscleRef.child(refId);
        workoutPerMuscle.set(true);
      });
    }
    createNewMuscleGroup(muscleGroup) {
      return this.firebaseDbRefSvc.muscleGroupsArray().$add(muscleGroup);
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
      return this.firebaseDbRefSvc.muscleGroupsArray().$loaded();
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
