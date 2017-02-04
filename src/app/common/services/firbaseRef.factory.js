import {
  ref
} from '../config/firebaseConfig';

export function firebaseRefFactory($firebaseArray) {
  return {
    plansRef: () => {
      return $firebaseArray(ref.child("plans"));
    }
  };
}


export default angular.module('services.firebaseRef',[])
  .factory('firebaseRefFactory', firebaseRefFactory)
  .name;
