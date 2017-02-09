class plans {
  constructor(firebaseDbRefSvc, $state) {
    plans = this;
    plans.firebaseDbRefSvc = firebaseDbRefSvc;
    plans.$state = $state;
  }

  getPlans() {
    return plans.firebaseDbRefSvc.getAllPlans();
  }
  getworkouts() {
    return plans.firebaseDbRefSvc.getAllWorkouts();
  }
  addNewPlan() {
    plans.firebaseDbRefSvc.plansDbRef().push({
      description: 'test New Plan'
    });
  }
  removePlan(plan) {
    plans.firebaseDbRefSvc.plansDbRef().$remove(plan);
  }
  getPlanById(planId) {
    return plans.firebaseDbRefSvc.getPlanByIdApi(planId).$loaded();
  }
  plansRef() {
    return plans.firebaseDbRefSvc.plansDbRef();
  }
  workoutsRef() {
    return plans.firebaseDbRefSvc.workoutsDbRef();
  }
  workoutsView(view, params) {
    if (params) {
      plans.$state.go(view, {
        planId: params
      });
    } else {
      plans.$state.go(view);
    }

  }
}

export default angular.module('plans.service', [])
  .service('plans', ['firebaseDbRefSvc', '$state', (firebaseDbRefSvc, $state) => new plans(firebaseDbRefSvc, $state)])
  .name;
