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

  /**
   * Remove selected plan
   * @param  {Object} plan The plan object of the selected plan.
   * @return {Promise}  A promise to the deleted plan.
   */
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
 * @name plans.service
 * @module plans.service
 * @description this module Provides plans service which is responsable of plans web api
 * And plans data transformation
 */
export default angular.module('plans.service', [])
  /**
   * @ngdoc service
   * @name plans
   * @module plans.service
   *
   * @description Provides plans HTTP methods for our firebase connection.
   */
  .service('plans', plans)
  .name;
