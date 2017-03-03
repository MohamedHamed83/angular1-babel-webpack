import './header.component';

describe('Header Component', () => {
  beforeEach(() => {
    angular.mock.module('ngHeaderModule');
  });

  describe('Header.Controller', () => {
    let $componentController;
    let controller;
    const mockHeaderTitle = 'welcome to Fitness Club';
    const mockNavbarLinkes = [{
        text: "plans",
        uiSref: "plansStView"
      },
      {
        text: "workouts",
        uiSref: 'allWorkoutsView',
        status: ""
      }
    ]

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('headerComponent', {
        '$scope': {}
      }, {
        headerTitle: mockHeaderTitle,
        navbarLinkes: mockNavbarLinkes
      });
    }));

    it('should show the correct header', () => {
      expect(controller.headerTitle).toEqual(mockHeaderTitle);
    });
    it('should bind the correct navbar array', () => {
      expect(controller.navbarLinkes).toEqual(mockNavbarLinkes);
    });
  });
});
