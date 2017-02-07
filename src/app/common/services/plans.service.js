import {
  firebaseRefFactory
} from './firbaseRef.factory'


class plans {
  constructor(firebaseRefFactory) {
    this.plansArr = firebaseRefFactory;
  }

  getPlans() {
    return this.plansArr.getAllPlans();
  };
  getworkouts() {
    return this.plansArr.getAllWorkouts();
  };
  addNewPlan(){
    this.plansArr.plansRef().push({description:'test New Plan'});
  };
}

export default angular.module('plans.service', [])
  .service('plans', plans)
  .name;
