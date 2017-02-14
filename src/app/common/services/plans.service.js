class plans {
  constructor(firebaseDbRefSvc, $state, toastr) {
    'ngInject';
    this.firebaseDbRefSvc = firebaseDbRefSvc;
    this.$state = $state;
    this.toastr = toastr;
  }

  /**
   * @ngdoc method
   * @name $plansSvc#plansOnload
   *
   * @description
   * Returns confirmation message.
   *
   * @returns  plans view confirmation message.
   */
  plansOnload() {
    this.toastr.info('Loading plans view');
  }
  /**
   * @ngdoc method
   * @name $plansSvc#getPlans
   *
   * @description
   * Returns list of plans.
   *
   * @returns {Array} list of plans.
   */
  getPlans() {
    return this.firebaseDbRefSvc.getAllPlans();
  }
  /**
   * @ngdoc method
   * @name $plansSvc#addNewPlan
   *
   * @description
   * Http Call to add plan .
   *
   */
  addNewPlan() {
    this.firebaseDbRefSvc.plansDbRef().push({
      description: 'test New Plan'
    });
  }

  /**
   * @ngdoc method
   * @name $plansSvc#removePlan
   *
   * @description
   * Http Call to remove plan .
   *
   */
  removePlan(plan) {
    return this.firebaseDbRefSvc.plansDbRef().$remove(plan);
  }
  /**
   * @ngdoc method
   * @name $plansSvc#getPlanById
   * @param {string} plan Id
   * @description
   * Get selected play by Id .
   *
   */
  getPlanById(planId) {
    return this.firebaseDbRefSvc.getPlanByIdApi(planId).$loaded();
  }
  /**
   * @ngdoc method
   * @name $plansSvc#plansRef
   * @description
   * Db refrance to plans array.
   */
  plansRef() {
    return this.firebaseDbRefSvc.plansDbRef();
  }
  /**
   * @ngdoc method
   * @name $plansSvc#reloadView
   * @param {string} view name
   * @param {string} view params
   * @description
   * load selected ui route.
   */
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
 * @name ngPlans
 * @module ngPlans
 * @description this module Provides plans service which is responsable of plans web api
 * And plans data transformation
 */
export default angular.module('ngPlans', [])
  /**
   * @ngdoc service
   * @name $plansSvc
   * @module ngPlans
   *
   * @description Provides plans HTTP methods for our firebase connection.
   */
  .service('$plansSvc', plans)
  .name;
