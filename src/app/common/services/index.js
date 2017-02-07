import 'firebase';
import 'angularfire';
import FirebaseModule from '../config/firebaseConfig';
import firebaseRefFactory from './firbaseRef.factory'
import plans from './plans.service'
import workouts from './workouts.service';


export default angular.module('services', ['firebase'])
  .factory('firebaseRefFactory', firebaseRefFactory)
  .service('plans', plans)
  .service('workouts', workouts)
  .name;
