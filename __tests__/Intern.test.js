const Intern = require('../lib/Intern');
const intern = new Intern("Anton","01","krasnikovanton84@gmail.com","University of Washington");
const {getType} = require('jest-get-type');

describe("Intern class test suite", () =>{
    it('all input data should has String type and not empty', () => {
        expect(getType(intern.name)).toBe("string");
        expect(intern.name).not.toBe("");
        expect(getType(intern.id)).toBe("string");
        expect(intern.id).not.toBe("");
        expect(getType(intern.email)).toBe("string");
        expect(intern.email).not.toBe("");
        expect(getType(intern.school)).toBe("string");
        expect(intern.school).not.toBe("");
    });

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