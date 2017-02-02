import 'firebase';
import  'angularfire';
import FirebaseModule from '../config/firebaseConfig';

import plans from './plans.service'
import workouts from './workouts.service';


export default angular.module('services.limFit', ['firebase'])
    .service('plans',  plans)
    .service('workouts', workouts)
    .name;