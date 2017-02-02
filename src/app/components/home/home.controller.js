export default class homeController {
  constructor(plans, workouts) {
    let homeController = this;
    homeController.title = 'test title';
    homeController.plans = plans.getPlans();
    homeController.workouts = workouts.getWorkOuts();
    console.log(plans);
  }
}