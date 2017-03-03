import './home.component';

describe('home', () => {
  beforeEach(() => {
    angular.mock.module('homeModule');
  });

  describe('home.Controller', () => {
    let $componentController;
    let controller;
    const mockProjectHeader = 'welcome to Fitness Club';
    const mockProjectFooter = 'Fitness Club';
    const mockNavbarLinkes =  [{
        text: "muscle groups",
        uiSref: "muscleGroupsListView"
      }, {
        text: "Plans",
        uiSref: "plansListView"
      },
      {
        text: "All Workouts",
        uiSref: 'allWorkoutsView',
      }
    ]

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('homeComponent');
    }));

    it('should bind to the correct header', () => {
      expect(controller.projectHeader).toEqual(mockProjectHeader);
    });
    it('should bind to the correct footer', () => {
      expect(controller.projectFooter).toEqual(mockProjectFooter);
    });
    it('should bind to the correct navbar array', () => {
      expect(controller.navbarLinkes).toEqual(mockNavbarLinkes);
    });
  });
});
