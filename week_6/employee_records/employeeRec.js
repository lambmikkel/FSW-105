const employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function () {
        console.log(`Name: ${this.name}, Job: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
    };
}

let Mikkel = new Employee('Mikkel Lamb', 'Sys Ad', 75000, 'Full-Time');

let Jerome = new Employee('Jerome King', 'Developer', 120000, 'Full-Time');

let Elvis = new Employee('Elvis Shaw', 'Firefighter', 80000, 'Full-Time');

employees.push(Mikkel, Jerome, Elvis);

console.log(`LambWare ${employees}`);

Jerome.status = 'Part-Time';

Mikkel.printEmployeeForm();
Jerome.printEmployeeForm();
Elvis.printEmployeeForm();

