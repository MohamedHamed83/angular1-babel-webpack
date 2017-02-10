import './home.component';

describe('home', () => {
  beforeEach(() => {
    angular.mock.module('home.component');
  });

  describe('home.Controller', () => {
    let $componentController;
    let controller;
    const mockProjectHeader = 'welcome to Fitness Club';
    const mockProjectFooter = 'Fitness Club';
    const mockNavbarLinkes = [{
        text: "plans",
        uiSref: "plansStView"
      },
      {
        text: "workouts",
        uiSref:'workoutsStView',
        status: ""
      }
    ]
    const mockSelect = angular.noop;

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('homeComponent');
    }));

    it('should bind the correct header', () => {
      expect(controller.projectHeader).toEqual(mockProjectHeader);
    });
    it('should bind the correct footer', () => {
      expect(controller.projectFooter).toEqual(mockProjectFooter);
    });
    it('should bind the correct navbar array', () => {
      expect(controller.navbarLinkes).toEqual(mockNavbarLinkes);
    });
  });
});
