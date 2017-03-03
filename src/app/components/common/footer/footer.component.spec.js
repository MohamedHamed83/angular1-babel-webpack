import './footer.component';

describe('Footer Component', () => {
  beforeEach(() => {
    angular.mock.module('ngFooterModule');
  });

  describe('Footer.Controller', () => {
    let $componentController;
    let controller;
    const mockProjectName =  'Fitness Club';
    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('footerComponent', {
        '$scope': {}
      }, {
        projectName: mockProjectName
      });
    }));

    it('should show the correct footer', () => {
      expect(controller.projectName).toEqual(mockProjectName);
    });
  });
});
