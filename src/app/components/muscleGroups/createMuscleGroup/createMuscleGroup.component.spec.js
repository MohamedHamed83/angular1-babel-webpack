import './createMuscleGroup.component';
import '../../../common/services/workouts.service';
describe('muscle groups', () => {
  beforeEach(() => {
    angular.mock.module('createMuscleGroupModule');
  });

  describe('createMuscleGroupComponent', () => {
    let $componentController;
    let controller;
    let workoutsVmSvc;
    let $rootScope;
    let $q;

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      workoutsVmSvc = $injector.get('$workoutsVmSvc');
      $rootScope = $injector.get('$rootScope');
      $q = $injector.get('$q');

      controller = $componentController('createMuscleGroupCtrl', {
        $scope: {},
        $workoutsVmSvc: workoutsVmSvc
      });
    }));

    it('should create a muscle group', () => {
      const event = {
        muscleGroup: {
          groupName: 'test muscle',
          imageUrl: 'test-muscle.jpg'
        }
      };
      let promise;

      spyOn(workoutsVmSvc, 'createNewMuscleGroup').and.callFake(() => $q.when({
        key: 1
      }));

      promise = controller.createNewMuscleGroup(event);

      promise.then(() => {
        expect($workoutsVmSvc.createNewMuscleGroup).toHaveBeenCalled();
      });

      $rootScope.$digest();
    });
  });
});
