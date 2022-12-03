const Engineer = require('../lib/Engineer');

const engineer = new Engineer("Anton","01","krasnikov@gmail.com","kas500")

describe("Engineer class test suite", () =>{
    it('instance of the Engineer class should be created', () => {
        expect(engineer).toBeInstanceOf(Engineer);
    });

    it('Engineer class extends Employee class', () => {
        expect(Object.getPrototypeOf(engineer.constructor).name).toBe('Employee');
    });

    it('instance of the Engineer class should contain "github" property with "kas500" value', () => {
        expect(engineer).toHaveProperty('github');
        expect(engineer).toHaveProperty('github','kas500');
    });

    it('instance of the Engineer class should contain "getGithub()" method which return "kas500" value', () => {
        const mock_getNameMethod = jest.spyOn(engineer,'getGithub');
        expect(engineer.getGithub()).toBe('kas500');
        expect(mock_getNameMethod).toHaveBeenCalled();
      });

    it('getRole() method of the Engineer should be overridden to return "Engineer"', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
});