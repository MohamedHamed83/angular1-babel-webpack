class workouts {
  constructor(firebaseDbRefSvc) {
    this.firebaseDbRefSvc = firebaseDbRefSvc;
  }
  getworkouts() {
    return this.firebaseDbRefSvc.getAllWorkouts().$loaded();
  }
  removePlan(plan) {
    this.firebaseDbRefSvc.plansDbRef().$remove(plan);
  }
   getworkoutById(workoutId){
     return this.firebaseDbRefSvc.getworkoutByIdApi(workoutId).$loaded();
  }
  workoutsRef() {
    return this.firebaseDbRefSvc.workoutsDbRef();
  }
}

export default angular.module('workouts.service',[])
  .service('workouts', ['firebaseDbRefSvc', (firebaseDbRefSvc) => new workouts(firebaseDbRefSvc)])
  .name;
