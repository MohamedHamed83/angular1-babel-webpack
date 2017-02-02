import {ref, FirebaseModule} from '../config/firebaseConfig';

class plans {
  constructor($firebaseArray) {
    this.plansArr = $firebaseArray(ref.child("plans"));
  }

  getPlans() {
    return this.plansArr;
  }
}


export default angular.module('services.plans', [])
  .service('plans', plans)
  .name;
