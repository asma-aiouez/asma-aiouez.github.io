"use strict"

const person = {
    name: "",
    dateOfBirth: null,
    getName : function(){
        return this.name;
    },
    setName : function(n){
        this.name = n;
    }
}

person.toString = function(){
    return "This person's name is "+this.name
            +"\n"+this.name+" was born on "+this.dateOfBirth.getFullYear()+"-"+(this.dateOfBirth.getMonth()+1)+"-"+this.dateOfBirth.getDate();
}

const john = Object.create(person, {
    name: {
        value: "John",
    },
    dateOfBirth: {
        value: new Date(1998, 11, 10),
    },
})

console.log(john.toString());

// ==========================

const employee = Object.create(person, {
    salary : {
        value : 0.0,
        writable: true
    },
    hireDate: {
        value: new Date(),
    }
})

employee.getSalary = function(){
    return this.salary;
}
employee.setSalary = function(s){
    this.salary = s;
}
employee.doJob = function(title){
    let salaryFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.getSalary());
    console.log(this.getName()+" is a "+title+" who earns "+salaryFormat)
}

let anna = Object.create(employee)

anna.name = "Anna"
anna.setSalary(249995.50)
anna.doJob("Programmer");

// ==================

function Person(n, d){
    this.name = n;
    this.dateOfBirth = d;
}

Person.prototype.toString = function(){
    return "{Name: "+this.name+", DateOfBirth: "+this.dateOfBirth.getFullYear()+"-"+(this.dateOfBirth.getMonth()+1)+"-"+this.dateOfBirth.getDate()+"}";
}
// this.dateOfBirth.getFullYear()+"-"+this.dateOfBirth.getMonth()+"-"+this.dateOfBirth.getDay()
const peter = new Person("Peter", new Date("November 10, 1985"))
console.log(peter.toString())