import 'firebase';
import 'angularfire';
import FirebaseModule from '../config/firebaseConfig';

//app services
import './firbaseRef.factory';
import './plans.service'
import './workouts.service';
import './workoutsByPlan.service';

export default angular.module('services', ['plans.service',
    'workouts.service',
    'firebaseRef.factory'
  ])
  .name;
