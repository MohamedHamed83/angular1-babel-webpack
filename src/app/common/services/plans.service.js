class plans {
  constructor(firebaseDbRefSvc) {
    this.firebaseDbRefSvc = firebaseDbRefSvc;
  }

  getPlans() {
    return this.firebaseDbRefSvc.getAllPlans();
  }
  getworkouts() {
    return this.firebaseDbRefSvc.getAllWorkouts();
  }
  addNewPlan() {
    this.firebaseDbRefSvc.plansDbRef().push({
      description: 'test New Plan'
    });
  }
  removePlan(plan) {
    this.firebaseDbRefSvc.plansDbRef().$remove(plan);
  }
  getPlanById(planId){
     return this.firebaseDbRefSvc.getPlanByIdApi(planId).$loaded();
  }
  plansRef() {
    return this.firebaseDbRefSvc.plansDbRef();
  }
  workoutsRef() {
    return this.firebaseDbRefSvc.workoutsDbRef();
  }
}

export default angular.module('plans.service', [])
  .service('plans', ['firebaseDbRefSvc', (firebaseDbRefSvc) => new plans(firebaseDbRefSvc)])
  .name;
