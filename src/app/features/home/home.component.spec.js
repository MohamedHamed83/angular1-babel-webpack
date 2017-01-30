import homeController from './home.controller';

let component;

describe('Component: homeController', () => {
    beforeEach(() => {
        component = new homeController();
    })
    it('should expose the title', () => {
        expect(component.title).toBeDefined();
        expect(component.title).toBe('test title');
    })
})