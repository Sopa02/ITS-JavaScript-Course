// Exam prep materials: gmetrix.net
// elearning.unideb.hu/mod/attendance/view.php?id=311575

function infos(){
    let name = prompt("What is your name?");
    let age = prompt("How old are you?");
    let height = prompt("How tall are you in cm?");
    let pet = prompt("What is the name of your pet?");
    alert("Thank you for the information!");
    console.log({
        "name": name,
        "age": age,
        "height": height,
        "pet": pet
    });
}

// test();
function test(){
    let a = "3";
    let b = "8";
    let c = a;
    a = b;
    b = c;

    console.log("a is " + a + " and b is " + b);
}

function area(){
    let width = prompt("Enter the width of the rectangle:");
    let height = prompt("Enter the height of the rectangle:");
    let area = width * height;
    alert("The area of the rectangle is " + area);
}

function perimiter(){
    let width = prompt("Enter the width of the rectangle:");
    let height = prompt("Enter the height of the rectangle:");
    let perimiter = 2 * (width + height);
    alert("The perimiter of the rectangle is " + perimiter);
}
// calculator();
function calculator(){
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let operator = prompt("Enter the operator (+, -, *, /):");
    let result;
    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if(num2 == 0){
                alert("You can't divide by 0!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator!");
            return;
    }
    alert("The result is " + result);
}

// oneLineCalculator();
function oneLineCalculator(){
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let operator = prompt("Enter the operator:");
    let result = eval(Number(num1) + operator + Number(num2)); // eval() is a security risk
                                                                //Amit beírsz, azt kódként végrehajtja
                    // pl. 12 "+" 3 -> 12 + 3 -> 15
                    // A Number() szükséges számmá alakítani a stringet
    alert("The result is " + result); 
}

function whileExample(){
    let count = 0;
    while (count < 5) { // a feltétel a ciklus elején kerül kiértékelésre
        console.log("Count: " + count);
        count++;
    }
}

function doWhileExample(){
    let count = 0;
    do {
        console.log("Count: " + count);
        count++;
    } while (count < 5); // a feltétel csak a ciklus végén kerül kiértékelésre
}

function forExample(){  // a for ciklus a while ciklus egy rövidebb változata
    for(let count = 0; count < 5; count++){ // a count változó csak a cikluson belül érhető el
        console.log("Count: " + count);
        // count++ vs ++count -> a ++count előbb növeli a változó értékét, mint ahogy azt "kiírná"
        // count++ -> először "kiírja" a változó értékét, majd növeli azt
    }
}

function breakExample(){
    /*  a break utasítás 
    megszakítja a ciklust mielőtt elérné a pontot,
    ahol a feltétel hamis lesz  */
    for(let i = 0; i < 10; i++){    
        if(i === 5){ // ha i értéke 5, akkor a ciklus megszakad, nem jut el a logolásig
            break;
        }
        console.log("i: " + i); // 0, 1, 2, 3, 4
    }
}

function isLeapYear(){
    let year = prompt("Enter a year:");
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        alert("It's a leap year!");
    }else{
        alert("It's not a leap year!");
    }
}

// Write a fun to print all numbers between 1 and 100 which is divisible
// by given numer Z
// task1();
function task1(){
    let temp = prompt("Enter a number:");
    temp = Number(temp);
    let x = 1;
    while(temp*x <= 100){
        console.log(temp*x + ", ");
        x++;
    }
}

// Concat example (string1 + string2)
let s1 = "This is the first string";
let s2 = ", and this is the second string";
console.log(s1.concat(s2, "."));
// "This is the first string, and this is the second string."

// trim example (removes whitespace from both ends)
s1 = "   This is the first string   ";
console.log(s1.trim());
// "This is the first string"

// replace example (old, new)
s1 = "This is the first string";
console.log(s1.replace("first", "second"));
// "This is the second string"

// substring example (start, end(optional))
s1 = "This is the first string";
console.log(s1.substring(8, 13));
// "the f"

// indexOf example (searchValue, fromIndex(optional))
s1 = "This is the first string";    // ThIS is the first string
console.log(s1.indexOf("is"));
// 2

// lastIndexOf example (searchValue, fromIndex(optional))
s1 = "This is the first string";    // This IS the first string
console.log(s1.lastIndexOf("is"));
// 5

// includes example (searchValue, fromIndex(optional))
s1 = "This is the first string";
console.log(s1.includes("first"));
// true

// Write a code that extracts username and domain name
function extractFromEmail(){
    let email = prompt("Enter your email address:");
    let usernamme = email.substring(0, email.indexOf("@"));
    let domain = email.substring(email.indexOf("@") + 1);
    alert("Username: " + usernamme + "\nDomain: " + domain);
}



// write a function to reverse a number

function reverseNumber(num){
    let reversed = 0;
    while(num > 0){
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
        console.log(reversed);
        console.log(num);
    }
    return reversed;
}
console.log(reverseNumber(1234));

// easier solution
let x = 1234;
// split string into array, reverse array, 
// join array into string, then back to number
x = Number(x.toString().split('').reverse().join(''));
console.log(x);

// Example task

let names = ["John", "Jane", "Jack", "Jill", "James"];
let buysLunch = names[Math.floor(Math.random() * names.length)];
console.log(buysLunch + " is going to buy lunch today!");

// How to choose a random element of an array
// array[Math.floor(Math.random() * array.length)]

// var vs let vs const
// var -> function scope
// let -> block scope
// const -> block scope, can't be reassigned
// use const by default, let if you need to reassign the variable
// don't use var
// const names may be all uppercase

// Array access using loops
let numbers = [1, 2, 3, 4, 5];


for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
// 1, 2, 3, 4, 5

// Array access using forEach
numbers.forEach(function(number){
    console.log(number);
});
// 1, 2, 3, 4, 5

// Array access using for...of
for(let number of numbers){
    console.log(number);
}
// 0, 1, 2, 3, 4

// in javascript, arrays can consist of different types, like:
let mixed = [1, "two", 3, "four", 5];
console.log(mixed);
// [1, "two", 3, "four", 5]

// Array task: create an array with 10 integers and find these:
// sum
// average
// min and max

function arrayTask(){
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    let min = Math.max(...array);
    let max = Math.min(...array);
    for(let element of array){
        element = Number(element);
        sum+=element;
    }
    let average = sum / array.length;
    console.log("Sum: " + sum);
    console.log("Average: " + average);
    console.log("Min: " + min);
    console.log("Max: " + max);
}
arrayTask();
// Ha of helyett in-t használok, akkor az elemek indexét kapom meg,
// nem az elemeket magukat. Azaz itt 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// GENERATED WITH GITHUB COPILOT ------------------------------
// array methods: push, pop, shift, unshift, splice, slice, indexOf, includes, concat, join, reverse, sort, filter, map, reduce
// Declaring an array: let array = [1, 2, 3, 4, 5];
// Declaring an empty array: let array = [];
// push -> add element to the end of the array 
    // magyarul: hozzáad egy elemet a tömb végéhez
// pop -> remove element from the end of the array 
    // magyarul: eltávolít egy elemet a tömb végéről
// shift -> remove element from the beginning of the array 
    // magyarul: eltávolít egy elemet a tömb elejéről
// unshift -> add element to the beginning of the array 
    // magyarul: hozzáad egy elemet a tömb elejéhez
// splice -> add or remove elements from the array 
    // magyarul: hozzáad vagy eltávolít elemeket a tömbhöz
// slice -> copy part of the array 
    // magyarul: lemásol egy tömb részt
// indexOf -> find the index of an element 
    // magyarul: megkeresi egy elem indexét
// includes -> check if an element is in the array 
    // magyarul: megvizsgálja, hogy egy elem benne van-e a tömbben
// concat -> merge two or more arrays 
    // magyarul: összefűz két vagy több tömböt
// join -> create a string from an array 
    // magyarul: stringet készít egy tömbből
// reverse -> reverse the order of the elements in the array 
    // magyarul: megfordítja a tömb elemeinek sorrendjét
// sort -> sort the elements in the array 
    // magyarul: rendezni a tömb elemeit
// filter -> create a new array with elements that pass the test 
    // magyarul: új tömböt hoz létre azokkal az elemekkel, amelyek átmennek a teszten
// map -> create a new array by performing a function on each element 
    // magyarul: új tömböt hoz létre a függvény végrehajtásával minden elemen
// reduce -> reduce the array to a single value 
    // magyarul: csökkenti a tömböt egyetlen értékre
// GENERATED WITH GITHUB COPILOT ------------------------------

// push example
let fruits = ["apple", "banana", "orange"];
fruits.push("pear");
console.log(fruits);
// ["apple", "banana", "orange", "pear"]

// pop example
fruits = ["apple", "banana", "orange"];
fruits.pop();
console.log(fruits);
// ["apple", "banana"]

// shift example
fruits = ["apple", "banana", "orange"];
fruits.shift();
console.log(fruits);
// ["banana", "orange"]

// unshift example
fruits = ["apple", "banana", "orange"];
fruits.unshift("pear");
console.log(fruits);
// ["pear", "apple", "banana", "orange"]

// splice example
fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "pear");
console.log(fruits);
// ["apple", "pear", "orange"]

// splice remove example
fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1);
console.log(fruits);
// ["apple", "orange"]

// slice example
fruits = ["apple", "banana", "orange"];
let sliced = fruits.slice(1, 2);
console.log(sliced);
// ["banana"]

// etc...



let input = prompt("Enter a values sperated by commas:");
let array = input.split(",");
document.write("<p>The array: [ " + array + " ]</p>");
document.write("<p>The array length: " + array.length + "</p>");
// Sum, average, max, min
let sum = 0;
let max = Math.max(...array);
let min = Math.min(...array);
for(let element of array){
    element = Number(element);
    sum += element;
}
let average = sum / array.length;
document.write("<p>The sum: " + sum + "</p>");
document.write("<p>The average: " + average + "</p>");
document.write("<p>The max: " + max + "</p>");
document.write("<p>The min: " + min + "</p>");
let reversed = array.reverse();
document.write("<p>The array reversed: [ " + reversed + " ]</p>");


// End of day 1.
