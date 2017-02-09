class plans {
  constructor(firebaseDbRefSvc, $state) {
    'ngInject';
    this.firebaseDbRefSvc = firebaseDbRefSvc;
    this.$state = $state
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
    return this.firebaseDbRefSvc.plansDbRef().$remove(plan);
  }
  getPlanById(planId) {
    return this.firebaseDbRefSvc.getPlanByIdApi(planId).$loaded();
  }
  plansRef() {
    return this.firebaseDbRefSvc.plansDbRef();
  }
  workoutsRef() {
    return this.firebaseDbRefSvc.workoutsDbRef();
  }
  workoutsView(view, params) {
    if (params) {
      this.$state.go(view, {
        planId: params
      });
    } else {
      this.$state.go(view);
    }

  }

}

export default angular.module('plans.service', [])
  .service('plans', plans)
  .name;
