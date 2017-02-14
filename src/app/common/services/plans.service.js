class plans {
  constructor(firebaseDbRefSvc, $state) {
    'ngInject';
    this.firebaseDbRefSvc = firebaseDbRefSvc;
    this.$state = $state
  }
  getPlans() {
    return this.firebaseDbRefSvc.getAllPlans();
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
  reloadView(view, params) {
    if (params) {
      this.$state.go(view, {
        planId: params
      });
    } else {
      this.$state.go(view);
    }

  }

}


/**
 * @ngdoc module
 * @requires ui.router, ui.router.components, angular-loading-bar and components
 * @name ngPlans
 * @module ngPlans
 * @description this module Provides plans service which is responsable of plans web api
 * And plans data transformation
 */
export default angular.module('ngPlans', [])
  /**
   * @ngdoc service
   * @name plans
   * @module ngPlans
   *
   * @description Provides plans HTTP methods for our firebase connection.
   */
  .service('plans', plans)
  .name;
