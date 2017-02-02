import 'firebase';
import 'angularfire';
import FirebaseModule from '../config/firebaseConfig';

import './plans.service'
import './workouts.service';


export default angular.module('fitnessClub.services', ['firebase', 'services.plans', 'services.workouts'])
  .name;
