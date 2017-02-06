import {
  ref
} from '../config/firebaseConfig';

export function firebaseRefFactory($firebaseObject) {
  return {
    plansRef: () => {
      return $firebaseObject(ref.child("plans")).$loaded();
    }
  };
}


export default angular.module('firebaseRef.factory', ['firebase'])
  .factory('firebaseRefFactory', firebaseRefFactory)
  .name;
