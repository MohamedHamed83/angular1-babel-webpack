import {
  ref
} from '../config/firebaseConfig';

export function firebaseRefFactory($firebaseObject, $firebaseArray) {
  return {
    getAllPlans: () => {
      //returning a promise
      return $firebaseArray(ref.child("plans")).$loaded();
    },
    getAllWorkouts: () => {
      //returning a promise
      return $firebaseObject(ref.child("workouts/-KcG7V240o-fdV_wrH63")).$loaded();
    },
    plansRef: () => {
      return ref.child("plans");
    },
    workoutsRef: () => {
      return $firebaseObject(ref.child("workouts/-KcG7V240o-fdV_wrH63"));
    }
  };
}


export default angular.module('firebaseRef.factory', ['firebase'])
  .factory('firebaseRefFactory', firebaseRefFactory)
  .name;
