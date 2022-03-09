// define count obj that has add() reset()
// 6.
const count = (function() {
    let counter = 0;
    add = function(){
        counter += 1;
    };
    reset = function(){
        counter = 0;
    };
    getCounter = function(){
        return counter;
    };

    return {
        add: add,
        reset: reset,
        getCounter: getCounter
    }
})();
count.add();count.add();count.add()
console.log(count.getCounter());

//7. 
/** Free variable in question 6 is "counter"
 * Free variable is the one which is not defined in the local scope
 * or passed as argument.
 *  */ 

// 8.
var make_adder = function(val){
    let counter = 0;
    return function(){
        counter += val;
        return counter
    }  
};
// differebce adding () at the nend
add5 = make_adder(5);
add5();add5();add5();
add7 = make_adder(7);
add7();add7();add7();

//9. IIEF, module factor.

// 10.
const Employee = (function(){
    let name ;
    let age ;
    let salary;
    getName = function(){
        return name;
    };
    getAge = function(){
        return age;
    };
    getSalary = function(){
        return salary;
    };
    setName = function(n){
        name = n;
    };
    setAge = function(a){
        age = a
    };
    setSalary = function(s){
        salary = s;
    };
    increaseSalary = function(percentage){
        salary += salary*percentage; 
        return getSalary();
    }
    incrementAge = function(){
        age+= 1;
        return getAge()
    }
    return {
        setName : setName,
        setAge : setAge,
        setSalary : setSalary,
        increaseSalary: increaseSalary,
        incrementAge : incrementAge
    }
})();

/// 11.
Employee.address = ""
Employee.getAdress = function(){
    return this.address;
}
Employee.setAdress = function(add){
    this.address = add;
}