'use strict';
import template from './muscleGroupDetail.html';

// component controller
export class muscleGroupDetailCtrl {
  constructor($plansSvc) {
    'ngInject';
    this.$plansSvc = $plansSvc;
    this.viewTypes = this.$plansSvc.viewTypes;
  }
  $onInit() {

  }
  saveMuscleGroup() {
    this.onSave({
      $event: {
        muscleGroup: this.muscleGroup,
      },
    });
  }
  updateMuscleGroup() {
    this.onUpdate({
      $event: {
        muscleGroup: this.muscleGroup,
      },
    });
  }
  deleteMuscleGroup() {
    this.onDelete({
      $event: {
        muscleGroup: this.muscleGroup,
      }
    })
  }
}
//component settings
export const muscleGroupDetailComponent = {
  template: template,
  controllerAs: 'muscleGroupDetailCtrl',
  controller: muscleGroupDetailCtrl,
  bindings: {
    muscleGroup: '=',
    viewStatus: '=',
    onSave: '&',
    onUpdate: '&',
    onDelete: '&',
  }
};
