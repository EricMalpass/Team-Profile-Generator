const Employee = require("../libary/employee");

test("Able to set Employee's name by the constructor", () => {
    const testValue = "testperson";
    const newEmployee = new Employee(testValue)
    expect(newEmployee.name).toBe(testValue)
});