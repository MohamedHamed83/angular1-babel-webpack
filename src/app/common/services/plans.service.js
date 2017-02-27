class plans {

  constructor(firebaseDbRefSvc, $state) {
    'ngInject';
    this.firebaseDbRefSvc = firebaseDbRefSvc;
    this.$state = $state;
    this.viewTypes = this.selectedViewType;
  }
  getPlanPerKeys(planId) {
    return this.firebaseDbRefSvc.planPerKeysApi(planId).$loaded();
  }
  selectedViewType = {
    newItem: 'new',
    updateItem: 'update',
    deleteItem: 'delete',
    itemDetail: 'detail'
  }
  /**
   * @ngdoc method
   * @name $plansSvc#createNewPlan
   *
   * @description
   * Http Call to add plan .
   *
   */
  createNewPlan(plan) {
    return this.firebaseDbRefSvc.plansRef().$add(plan);
  }
  updatePlan(plan) {
    return plan.$save();
  }
  /**
   * @ngdoc method
   * @name $plansSvc#removePlan
   *
   * @description
   * Http Call to remove plan .
   *
   */
  deletePlan(plan) {
    return plan.$remove();
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
    return this.firebaseDbRefSvc.plansRef();
  }

  /**
   * @ngdoc method
   * @name $plansSvc#removePlan
   *
   * @description
   * Http Call to remove plan .
   *
   */
  deletePlan(plan) {
    return plan.$remove();
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
   * @name $plansSvc#loadUiRoute
   * @param {string} view name
   * @param {string} view params
   * @description
   * load selected ui route.
   */
  loadUiRoute(view, params) {
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
