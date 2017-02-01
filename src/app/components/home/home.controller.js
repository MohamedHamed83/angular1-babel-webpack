import { ref } from '../../common/index';

export default class homeController {
  constructor($firebaseArray) {
    let homeController = this;
    homeController.title = 'test title';
    homeController.main = 'test2';

    let planRef = ref.child("plans");
    homeController.plans = $firebaseArray(ref);
    console.log(homeController.plans)
  }
}