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
  muscleGroupPerKeysApi(itemId) {
    return this.$firebaseObject(ref.child(`muscleGroups/${itemId}`));
  }
  muscleGroupsArray() {
    return this.$firebaseArray(ref.child("muscleGroups"));
  }
  getAllWorkouts() {
    return this.$firebaseArray(ref.child("workoutsList"));
  }
  workoutsArray() {
    return this.$firebaseArray(ref.child("workoutsList"));
  }
  workoutsPerMuscleGroupArray() {
    return ref.child("workoutsKeysPerMuscleGroup");
  }
  getWorkoutByIdApi(workoutId) {
    return this.$firebaseObject(ref.child(`workoutsList/${workoutId}`)).$loaded();
  }
  getWorkoutByPlanIdApi(workoutId) {
    return this.$firebaseObject(ref.child(`workouts/${workoutId}`)).$loaded();
  }
  muscleGroupRef() {
    return ref.child("muscleGroups");
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
  workoutsKeysPerMuscleGroupApi(itemId) {
    return this.$firebaseArray(ref.child(`workoutsKeysPerMuscleGroup/${itemId}`));
  }
  planPerKeysApi(planId) {
    return this.$firebaseObject(ref.child(`plans/${planId}`));
  }
}


export default angular.module('ngFirebaseRef', ['firebase'])
  .factory('firebaseDbRefSvc', ['$firebaseObject', '$firebaseArray', ($firebaseObject, $firebaseArray) => new firebaseDbRef($firebaseObject, $firebaseArray)])
  .name;
