function workoutsVmSvc(firebaseDbRefSvc) {
  return {
    getworkouts: () => {
      return firebaseDbRefSvc.getAllWorkouts().$loaded();
    },
    removePlan: (plan) => {
      return firebaseDbRefSvc.plansDbRef().$remove(plan);
    },
    getworkoutById: (workoutId) => {
      return firebaseDbRefSvc.getworkoutByIdApi(workoutId).$loaded();
    },
    workoutsRef: () => {
      return firebaseDbRefSvc.workoutsDbRef();
    }
  }
}

export default angular.module('workouts.service', [])
  .service('workoutsVmSvc', ['firebaseDbRefSvc', workoutsVmSvc])
  .name;
