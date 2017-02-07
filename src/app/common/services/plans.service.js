export class plans {
  constructor(firebaseRefFactory) {
    this.firebaseRefFactory = firebaseRefFactory;
  }

  getPlans() {
    return this.firebaseRefFactory.getAllPlans();
  }
  getworkouts() {
    return this.firebaseRefFactory.getAllWorkouts();
  }
  addNewPlan() {
    this.firebaseRefFactory.plansRef().push({
      description: 'test New Plan'
    });
  }
  plansRef() {
    return this.firebaseRefFactory.plansDbRef();
  }
  workoutsRef() {
    return this.firebaseRefFactory.workoutsDbRef();
  }
}
plans.$inject = ['firebaseRefFactory'];
