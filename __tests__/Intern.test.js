const Intern = require('../lib/Intern');
const intern = new Intern("Anton","01","krasnikovanton84@gmail.com","University of Washington");

describe("Intern class test suite", () =>{
    it('instance of the Intern class should be created', () => {
        expect(intern).toBeInstanceOf(Intern);
    });

    it('Intern class extends Employee class', () => {
        expect(Object.getPrototypeOf(intern.constructor).name).toBe('Employee');
    });

    it('instance of the Intern class should contain "school" property with "University of Washington" value', () => {
        expect(intern).toHaveProperty('school');
        expect(intern).toHaveProperty('school','University of Washington');
    });

    it('getRole() method of the Intern should be overridden to return "Intern"', () => {
        expect(intern.getRole()).toBe('Intern');
    });
});