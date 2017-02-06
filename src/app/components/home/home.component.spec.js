import homeController from './home.controller';

let $componentController;

describe('Component: homeController', () => {
    beforeEach(module(''))
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }))
    beforeEach(() => {
        component = new homeController($firebaseArray);
    })
    it('should expose the title', () => {
        expect(component.title).toBeDefined();
        expect(component.title).toBe('test title');
    })
})
