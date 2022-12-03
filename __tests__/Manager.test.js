const Manager = require('../lib/Manager');
const manager = new Manager("Anton","01","krasnikovanton84@gmail.com","38A");

describe("Manager class test suite", () =>{
    it('instance of the Manager class should be created', () => {
        expect(manager).toBeInstanceOf(Manager);
    });

    it('Manager class extends Employee class', () => {
        expect(Object.getPrototypeOf(manager.constructor).name).toBe('Employee');
    });

    it('instance of the Manager class should contain "officeNumber" property with "38A" value', () => {
        expect(manager).toHaveProperty('officeNumber');
        expect(manager).toHaveProperty('officeNumber','38A');
    });

    it('getRole() method of the Manager should be overridden to return "Manager"', () => {
        expect(manager.getRole()).toBe('Manager');
    });
});