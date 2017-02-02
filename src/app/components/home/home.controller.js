'use strict';

export default class homeController {
  constructor(plans) {
    console.log(plans)
    this.plansSvc = plans;
    this.title = 'test title';
    this.plans = this.plansSvc.getPlans();
  }
  getplans() {
    return this.plansSvc.getPlans();
  }
}
