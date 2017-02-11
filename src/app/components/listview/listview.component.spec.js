import './listview.component'

describe('listview Component', () => {
  beforeEach(() => {
    angular.mock.module('nglistview.component');
  });

  describe('listview: Controller', () => {
    let $componentController;
    let controller;
    const mockAllItems = {
      "-KcG7V240o-fdV_wrH62": {
        "description": "12-week fat- loss plan",
        "url": "Fat-Loss-plan"
      },
      "-KcG7V3MlmCPjA-0F7Gh": {
        "description": "This high-flying plan is designed to add 4 to 10 inches to your vertical",
        "url": "The Vertical-Jump-plan"
      }
    };
    const mockSelectedItem = {
      "-KcG7V240o-fdV_wrH62": {
        "description": "12-week fat- loss plan",
        "url": "Fat-Loss-plan"
      }
    };
    const mockAppSearchString = '';
    const mockSetSelectedItem = angular.noop;

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('listviewComponent', {
        '$scope': {}
      }, {
        allItems: mockAllItems,
        appSearchString: mockAppSearchString,
        setSelectedItem: mockSetSelectedItem
      });
    }));

    it('should show the correct plans', () => {
      expect(controller.allItems).toEqual(mockAllItems);
    });

  });
});
