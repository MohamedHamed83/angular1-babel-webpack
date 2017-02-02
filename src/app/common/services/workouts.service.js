import {ref, FirebaseModule} from '../config/firebaseConfig';

class workouts {
    constructor() {
    }

    getWorkouts() {
        return ["push up", "Tuck Jump", "Inchworm", "Prone Walkout"]
    }
}

export default angular.module('services.workouts',[])
  .service('workouts', workouts)
  .name;


