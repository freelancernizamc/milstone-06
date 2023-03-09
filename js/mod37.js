// Video 37-1 Module Overview, Primitive and non-primitive data type
// int a =5;
// string b = 'alim halim khalim';
// JavaScript is dynamin type Language;
// Primitive
const a = 5;
const b = 'Samshu kopai na ekhon ar';
const d = true;
// non primitive
const ages = [45, 65, 48];

const student = {id: 23, class: 7};
// console.log(typeof a, typeof b, typeof ages, typeof d, typeof student);

// let x = 5;
// let y = x;
// console.log(x, y);
// y = 7;
// console.log(x, y);

let p = {job: 'web developer'};
let q = p;
q = {job: 'backend end'};
q.job = 'front end developer';
console.log(p, q);

// Video 37-2 Null Vs Undefined, different ways you will get undefined
// let first;
// // console.log(first);
// function second(a, b){
//     const total =a+b;
// }
// const result = second();

// function third(a, b, c, d){
//     const total = a+b+c+d;
//     console.log(a,b,c,d);
// }
// third(2, 5);
// console.log(result);

function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(2, 5);           //If we give negative value result is undefined
console.log(total);

const fifth = {id: 2, name: 'ponchom', age: 40}
console.log(fifth.age, fifth.salary);
const sixth = [4, 89, 87, 56, 54];
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[200]);
console.log(sixth);
const eighth = undefined;
const ninth = null;
const data = {results: [], updated: null}
// console.log(typeof undefined);
console.log(typeof null);

// Video 37-3 Different Truthy and Falsy values in JavaScript
const x = ' ';
if(x){
    console.log('value of x is truthy');
}
else{
console.log('value of x is falsy');
}

// optional , check falsy
const y = '';
if(!y){
    console.log('value is falsy')
}
// check truthy
if(!!x){
    console.log('value is truthy');
}

// Video 37-4 double equal (==) vs triple equal (===), implicit conversion

const  first = [];
const second = [];
if(first === second){
    console.log('values are equal')
}
else{
    console.log('values are not equal')
}
// type coercion
// type conversion
// type casting
// always use ===
// equal comparision does't work for non-primitive
// Search javascript compare two objects
// Video 37-5 Block scope global scope simple understanding of Hoisting
function add(a, b){
    const total = a+b;
    console.log(a, b);
    if(b>5){
        const sum = 25 + a+b;
    }
    else{
        const sum = 5 + a + b;
        var current = sum;           // var doing hoisting
    }
    console.log(current);
    return total;
}

add(5, 3);

for(var i = 0; i<5; i++){
    console.log(i);
}
// console.log('outside', i);

function prints(){
    console.log('insie print', 5);
}
prints();

// Video 37-6 (advanced) Closure, encapsulation, private variable
function kitchen(){
    let roast =0;
    return function(){
        roast++;
        return roast;
    }
}
const firstServer = kitchen();
console.log(firstServer);
// Search clouser in javascript

// Video 37-7 (optional) Callback function and pass different functions
function greeting(greetingHandler, name){
    // console.log(person);
    greetingHandler(name);
}

// const numbers = [44, 45,67];
function greetingHandler(name){
    console.log('Good morning', name);
}
greeting(greetingHandler, 'Tom hangs');
greeting(greetingHandler, 'Tom cruise');

function greetEvening(name){
    console.log('good evening', name)
}
greeting(greetEvening, 'Tom Solaiman');

// Video 37-8 (advanced) function arguments pass by reference pass by value

function sum(a, b, c){
    console.log(arguments);   //array like objects
    const args = [...arguments];
    console.log(args);
    const result = a + b +c;
    return result;
}
const total2 = sum(45, 89, 98, 56);
console.log(total2);

// primitive type are pass by value

let num1 = 5;
let num2 = 7;

function multiply(a, b){
    const result = a*b;
    return result;
}

const output = multiply(num1, num2);
console.log(output);

// object and array are pass by referrance

let student1 = {name: 'jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'mim';
}
console.log(student1);
makeMovie(student1, student2);
console.log(student1, student2);

// Video 37-9 Module summary and Practice Problems
