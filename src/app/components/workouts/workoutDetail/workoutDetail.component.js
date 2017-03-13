'use strict';
import template from './workoutDetail.html';

// component controller
export class workoutDetailCtrl {
  constructor($plansSvc) {
    'ngInject';
    this.$plansSvc = $plansSvc;
    this.viewTypes = this.$plansSvc.viewTypes;
  }
  $onInit() {

  }
  getSelectedMuscle(event) {
    var $target = $(event.currentTarget);

    $target.closest('.btn-group')
      .find('[data-bind="muscleGroupName"]').text($target.text())
      .end()
      .children('.dropdown-toggle').dropdown('toggle');
    this.workout.muscleGroupId = $target.children()[0].id;
    return false;
  }
  saveWorkout() {
    this.onSave({
      $event: {
        workout: this.workout,
      },
    });
  }
  updateWorkout() {
    this.onUpdate({
      $event: {
        workout: this.workout,
      },
    });
  }
  deleteWorkout() {
    this.onDelete({
      $event: {
        workoutsVmSvcorkout: this.workout,
      }
    });
  }
}
//component settings
export const workoutDetailComponent = {
  template: template,
  controllerAs: 'workoutDetailCtrl',
  controller: workoutDetailCtrl,
  bindings: {
    workout: '=',
    viewStatus: '=',
    muscleGroups: '=',
    onSave: '&',
    onUpdate: '&',
    onDelete: '&'
  }
};
