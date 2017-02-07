import {
  ref,
  FirebaseModule
} from '../config/firebaseConfig';

export class workouts {
  constructor() {}

  getWorkouts() {
    return ["push up", "Tuck Jump", "Inchworm", "Prone Walkout"]
  }
}

