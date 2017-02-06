import {
  firebaseRefFactory
} from './firbaseRef.factory'


class plans {
  constructor(firebaseRefFactory) {
    this.plansArr = firebaseRefFactory;
  }

  getPlans() {
    return this.plansArr.plansRef();
  }
}

export default angular.module('plans.service', [])
  .service('plans', plans)
  .name;
