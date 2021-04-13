const Manager = require("../libary/Manager");

test("Able to set Manager's name by the constructor", () => {
    const testValue = "someName";
    const newEmployee = new Manager(testValue, 6900, "Ericmalpass@gmail.com", 6900)
    expect(newEmployee.name).toBe(testValue)
});