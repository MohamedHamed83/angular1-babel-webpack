class workoutsVmSvc {
  constructor(firebaseDbRefSvc) {
    'ngInject';
    this.firebaseDbRefSvc = firebaseDbRefSvc;
  }
  getworkouts() {
    return this.firebaseDbRefSvc.getAllWorkouts().$loaded();
  }
  removePlan(plan) {
    return this.firebaseDbRefSvc.plansDbRef().$remove(plan);
  }
  getworkoutById(workoutId) {
    return this.firebaseDbRefSvc.getworkoutByIdApi(workoutId).$loaded();
  }
  workoutsRef() {
    return this.firebaseDbRefSvc.workoutsDbRef();
  }
}

export default angular.module('workouts.service', [])
  .service('workoutsVmSvc', workoutsVmSvc)
  .name;
