import 'firebase';
import 'angularfire';
import FirebaseModule from '../config/firebaseConfig';

//app services
import './firbaseRef.factory';
import './plans.service'
import './workouts.service';
import './workoutsByPlan.service';


/**
 *
 * @ngdoc module
 * @name services
 *
 * @requires ngPlans
 * @requires ngWorkouts
 * @requires ngFirebaseRef
 *
 * @description
 *
 * This is the main module to all the application services
 *
 **/
export default angular.module('services', ['ngPlans',
    'ngWorkouts',
    'ngFirebaseRef',
    'ngWorkoutsByPlan'
  ])
  .name;
