const Employee = require('../lib/Employee');
const employee = new Employee("Anton","01","krasnikovanton84@gmail.com");

describe("Employee class test suite", () =>{
      it('instance of the Employee class should be created', () => {
        expect(employee).toBeInstanceOf(Employee);
      });

      it('instance of the Employee class should contain "name" property with "Anton" value', () => {
        expect(employee).toHaveProperty('name');
        expect(employee).toHaveProperty('name','Anton');
      });

      it('instance of the Employee class should contain "id" property with "01" value', () => {
        expect(employee).toHaveProperty('id');
        expect(employee).toHaveProperty('id','01');
      });

      it('instance of the Employee class should contain "email" property with "krasnikovanton84@gmail.com" value', () => {
        expect(employee).toHaveProperty('email');
        expect(employee).toHaveProperty('email','krasnikovanton84@gmail.com');
      });

      it('instance of the Employee class should contain "getName()" method which return "Anton" value', () => {
        const mock_getNameMethod = jest.spyOn(employee,'getName');
        expect(employee.getName()).toBe('Anton');
        expect(mock_getNameMethod).toHaveBeenCalled();
      });

      it('instance of the Employee class should contain "getId()" method which return "01" value', () => {
        const mock_getIdMethod = jest.spyOn(employee,'getId');
        expect(employee.getId()).toBe('01');
        expect(mock_getIdMethod).toHaveBeenCalled();
      });
    
      it('instance of the Employee class should contain "getEmail()" method which return "krasnikovanton84@gmail.com" value', () => {
        const mock_getEmailMethod = jest.spyOn(employee,'getEmail');
        expect(employee.getEmail()).toBe('krasnikovanton84@gmail.com');
        expect(mock_getEmailMethod).toHaveBeenCalled();
      });

      it('instance of the Employee class should contain "getRole()" method which return "Employee" value', () => {
        const mock_getRoleMethod = jest.spyOn(employee,'getRole');
        expect(employee.getRole()).toBe('Employee');
        expect(mock_getRoleMethod).toHaveBeenCalled();
      });
});