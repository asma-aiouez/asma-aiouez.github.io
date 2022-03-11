/**
 * employee.js
 */
import { Person } from "./person.js";

export class Employee extends Person{
    constructor(name, dateOfBirth, salary, hireDate){
        super(name, dateOfBirth);
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getSalary() {
        return this.salary;
    }
    getHireDate() {
        return this.hireDate;
    }
    doJob(title){
        let salaryFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.getSalary());
        return `${this.name} is a ${title} who earns $${salaryFormat}`;
    }

}
