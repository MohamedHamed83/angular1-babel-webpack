import 'firebase';
import 'angularfire';
import FirebaseModule from '../config/firebaseConfig';
import './firbaseRef.factory';
import './plans.service'
import './workouts.service';

export default angular.module('services', ['plans.service',
    'workouts.service',
    'firebaseRef.factory'
  ])
  .name;
