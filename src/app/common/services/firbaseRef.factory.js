import {
  ref
} from '../config/firebaseConfig';

class firebaseDbRef {
  constructor($firebaseObject, $firebaseArray) {
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray = $firebaseArray;
  }
  plansRef() {
    return this.$firebaseArray(ref.child("plans"));
  }
  getAllWorkouts() {
    return this.$firebaseArray(ref.child("workouts"));
  }
  getWorkoutByIdApi(workoutId) {
    return this.$firebaseObject(ref.child(`workouts/${workoutId}`)).$loaded();
  }
  plansDbRef() {
    return ref.child("plans");
  }
  workoutsDbRef() {
    return this.$firebaseObject(ref.child("workouts"));
  }
  workoutsKeysPerPlanApi(planId) {
    return this.$firebaseArray(ref.child(`workoutsKeysPerPlan/${planId}`));
  }
  planPerKeysApi(planId) {
    return this.$firebaseObject(ref.child(`plans/${planId}`));
  }
}


export default angular.module('ngFirebaseRef', ['firebase'])
  .factory('firebaseDbRefSvc', ['$firebaseObject', '$firebaseArray', ($firebaseObject, $firebaseArray) => new firebaseDbRef($firebaseObject, $firebaseArray)])
  .name;
