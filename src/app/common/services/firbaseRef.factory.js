import {
  ref
} from '../config/firebaseConfig';

class firebaseDbRef {
  constructor($firebaseObject, $firebaseArray) {
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray = $firebaseArray;
  }
  getAllPlans() {
    //returning a promise
    return this.$firebaseArray(ref.child("plans"));
  }
  getAllWorkouts() {
    //returning a promise
    return this.$firebaseArray(ref.child("workouts"));
  }
  getPlanByIdApi(PlanId){
    return this.$firebaseObject(ref.child(`workouts/${PlanId}`));
  }
  plansDbRef() {
    return ref.child("plans");
  }
  workoutsDbRef() {
    return this.$firebaseObject(ref.child("workouts/-KcG7V240o-fdV_wrH63"));
  }
}


export default angular.module('ngFirebaseRef', ['firebase'])
  .factory('firebaseDbRefSvc',['$firebaseObject','$firebaseArray',($firebaseObject, $firebaseArray)=> new firebaseDbRef($firebaseObject, $firebaseArray)] )
  .name;
