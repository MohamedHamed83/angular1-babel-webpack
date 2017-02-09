function plans(firebaseDbRefSvc, $state) {
  return {
    getPlans: () => {
      return firebaseDbRefSvc.getAllPlans();
    },
    getworkouts: () => {
      return firebaseDbRefSvc.getAllWorkouts();
    },
    addNewPlan: () => {
      firebaseDbRefSvc.plansDbRef().push({
        description: 'test New Plan'
      });
    },
    removePlan: (plan) => {
      firebaseDbRefSvc.plansDbRef().$remove(plan);
    },
    getPlanById: (planId) => {
      return firebaseDbRefSvc.getPlanByIdApi(planId).$loaded();
    },
    plansRef: () => {
      return firebaseDbRefSvc.plansDbRef();
    },
    workoutsRef: () => {
      return firebaseDbRefSvc.workoutsDbRef();
    },
    workoutsView: (view, params) => {
      if (params) {
        $state.go(view, {
          planId: params
        });
      } else {
        $state.go(view);
      }

    }
  }

}

export default angular.module('plans.service', [])
  .service('plans', ['firebaseDbRefSvc', '$state', plans])
  .name;
