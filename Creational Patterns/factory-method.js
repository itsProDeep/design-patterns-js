function createDev(name) {
    this.name = name,
        this.type = "Developer"
}

function createTester(name) {
    this.name = name,
        this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new createDev(name)
                break;

            case 2:
                return new createTester(name)
                break;

        }
    }

}

const employeeFactory = new EmployeeFactory();

const employees = [];
employees.push(employeeFactory.create("Pradeep", 1));
employees.push(employeeFactory.create("Rashi", 2));
console.log(employees);

// Note: We cannot use Arrow functions as constructors as calling them with new will throw error
//Arrow functions don't have their own bindings to 'this', 'arguement' or 'super, and should not be usedm as methods