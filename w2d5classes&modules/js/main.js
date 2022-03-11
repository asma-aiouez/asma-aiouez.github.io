/**
 * main.js
 */

import { Employee } from "./model/employee.js";
import { Person } from "./model/person.js";

export {Person} from "./model/person.js";

const persons = [
    new Person("Anna Smith", new Date(1998,11,15)),
    new Person("Bob Jone", new Date(1945,10,16)),
    new Person("Carlos Slim Helu", new Date(1976,8,24))
]
persons.forEach(p => console.log(p.toString()));

const employee = new Employee("Jim Hanson", null, 245990.00, null);
console.log(employee.doJob("Software Engineer"));