import ref from '../config/firebaseConfig'

export class plans {
    constructor($firebaseObject) {}

    getPlans() {
        return $firebaseObject(ref.child("plans"));
    }
}