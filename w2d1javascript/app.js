//
"use strict";
//1.	Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript

function max(a, b){
    if( a < b)
    return b;
    else return a;
}
//2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a, b, c){
    return Math.max(a, b, c);
}

// 3.	Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(c){
    const vowels = ["a", "e", "i", "u", "o"];
    return vowels.includes(c) ? true : false;
    
}
//console.log(isVowel("o"));

// 4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers

function sum(numbers){
    let res = 0; // apparently you need to initialize it
    for(let i = 0; i < numbers.length; i++){
        res+= numbers[i];
    }
    return res;
}
// console.log(sum([1, 2, 3, 4]));

function multiply(numbers){
    let res = 1;
    for(let i = 0; i < numbers.length; i++){
        res*= numbers[i];
    }
    return res;
}
// console.log(multiply([1, 2, 3, 4]));

// 5.	Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(word){
    let res = "";
    for(let i = word.length - 1; i >= 0; i--){
        res += word[i];
    }
    return res
}
// console.log(reverse("jag testar"));

// 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(words){
    let maxLength = 0;
    for( let i = 0; i < words.length; i++){
        if(maxLength < words[i].length)
            maxLength = words[i].length;
    }
    return maxLength;
}
//console.log(findLongestWord(["hello", "friday", "birthday"]));

// 7.	Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters.

function filterLongWords(words, length){
    let res = [];
    for( let i = 0; i < words.length; i++){
        if(words[i].length > length){
            res.push(words[i])
        }
    }
    return res;
}
//console.log(filterLongWords(["hello", "good morning", "day", "future", "peace", "true"], 4)); 

// 8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array

function computeSumOfSquares(numbers){
    return numbers.map(number => Math.pow(number, 2)).reduce((accumulator, val) => accumulator+val);
}
// console.log(computeSumOfSquares([2, 2, 2]))

// 9.	Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd.

function printOddNumbersOnly(numbers){
    numbers.filter(oddNumbers).forEach(currentValue => console.log("Priniting odd number "+currentValue));
}
function oddNumbers(number){
    return number % 2 ; 
}
//console.log(printOddNumbersOnly([2, 3, 8, 9, 1, 2, 2]))

// 10.	Write a function named, computeSumOfSquaresOfEvensOnly, 

function computeSumOfSquaresOfEvensOnly(numbers){
    return numbers.filter(evenNumbers).map(computeSquare).reduce(computeSum);
}
function computeSquare(number){
    return Math.pow(number, 2);
}
function computeSum(total, number){
    return total + number;
}
function evenNumbers(number){
    return !(number % 2) ; 
}
//console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]) )

// 11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…)
function sumFunc(numbers){
    return numbers.reduce((accumulator, value) => accumulator + value);
}
function multiplyFunc(numbers){
    return numbers.reduce((accumulator, value) => accumulator * value);
}

//12.	Implement Javascript code for a function named, findSecondBiggest

function findSecondBiggest(numbers){
    if(numbers.length > 1){
        let first= Math.max(numbers[0], numbers[1]), second = Math.min(numbers[0], numbers[1]);
        for( let element of numbers.slice(2)){
            if(element > first){
                second = first;
                first = element;
            }
            else if ( element > second){
                second = element;
            }
        }
        return second;
    }
    
}
//console.log(findSecondBiggest([19,9,11,0,12]));

// 13.	Write a function named printFibo

function printFibo(n, a, b){// 0, 1, 1
    let result = [];
    result.push(a);
    for(let i = 0; i < n-1; i++){
        let temp = b;
        b = a+b;// 1
        a = temp// 1
        result.push(a);//1, 
    }
    return result;
}
console.log("Fibonacci: ")
console.log(printFibo(10, 0, 1))

// 14.	Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:
// a.
/*
let btn = document.getElementById("btnSubmit");
btn.addEventListener("click", function(event) {
        event.preventDefault();
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let url = document.getElementById("url");
        let check = document.getElementById("check");
        console.log("email: "+email.value);
        console.log("password: "+password.value);
        console.log("url: "+url.value);
        console.log("check: "+check.value)
     })
    
// b.
let addProduct = document.getElementById("addProduct");
addProduct.addEventListener("click", function(event) {
    let productNumber = document.getElementById("productNumber");
    let quantity = document.getElementById("quantity");
    let name = document.getElementById("name");
    let unitPrice = document.getElementById("unitPrice");
    let select = document.getElementById("supplier")
    let date = document.getElementById("date");
    alert("Product Number: "+productNumber.value
         +" - Quantity: "+quantity.value
         +" - Name: "+name.value
         +" - Unit Price: "+unitPrice.value
         +" - Supplier: "+select.options[select.selectedIndex].text
         +" - Date: "+date.value
         );
})*/