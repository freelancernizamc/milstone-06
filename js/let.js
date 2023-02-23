let money = 25;
money = 35;
console.log(money);

const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
// console.log(bird);
const message = bird  + ' potash potash';
console.log(message);

const numbers = [12, 89, 65, 45];
// reassign is not allowed
// numbers = [77, 66, 55, 22, 99];
numbers.push(123);
numbers[1] = 99;
console.log(numbers);

const student = {
    name: 'mofiz',
    address:'Rongpur'
}
// student = {name: 'Mofazzol'}
student.name ='Mofazzol';
console.log(student);

for(let i = 0; i < numbers.length; i++){
const number = numbers[i];
//  sum = sum + number;
console.log(number);

}
// console.log(number);
// Vodeo 31-3 Function default parameter for not provided values

function add(first, second){
    const total = first + second;
    if(second === undefined){
        second = 0;
    }
    return total;
}

// const result = add(11, 10);
const result = add(20, 0)
console.log(result);

function add(first = 0, second = 0){
    const total = first + second;
    return total;
}
const result2 = add(10);
console.log(result2);


function fullName(first, last = 'chowdhury'){
    const name = first + ' ' + last;
    return name
}
const name = fullName('Gelam');
console.log(name);

// Video 31-4 Template string, multiple line string, dynamic string

const person = 'Adam Sandler';
const person2 = "Ben white";
const person3 =` Donald Trump`;

const multiLine = 'First Line test \n' + 
'Second line of code \n' +
'Third line of code';
console.log(multiLine);

const newMultiLine = `First line of text
second line od code
thied line of string
`
console.log(newMultiLine);


const a = 20;
const b = 30;
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a+b);
// console.log(summary);
const newSummary = `sum of ${a} and ${b} is: ${a+b}`;
console.log(newSummary);

// Video 31-5 Arrow function, multiple parameter, function body

function add(first, second){
    const total = first + second;
    return total;
}
// function expression

// const add1 = function add(first, second){
//     const total = first + second;
//     return total;
// }

// function expression with annonymous function
const add1 = function(first, second){
    const total = first + second;
    return total;
}

function add(first, second){
    const total = first + second;
    return total;
} 

function add4(first, second){
    return first + second;
}

const add5 = function(first, second){
    return first + second;

}

// arrow function
const add6 = (first, second) => first + second;

const result3 = add(20, 30);
console.log(result3);

// Video 31-6 More Arrow functions and big arrow function

const add7 = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const result5 = multiply(7, 8);
// console.log(result5);

const addAll = (a, b, c, d, e,f) => a + b+ c +d + e + f;
//  no parameter arrow function
const getPie = () => 3.14;

// one parameter
const doubleIt = (num) => num * 5;
// multi line arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult/2;
    return result;
}
// arrow function no parameter
// const myName = () => console.log('Jhon');
// // no parunthesis used
// const square = a =>a*a;
// // parunthesis used
// const add8 = (a,b) => a + b;

// Video 31-7 Spread operator, array max, copy arrays

const max = Math.max(12, 85, 999, 79);
// console.log(max);
const numbers2 = [12, 85, 999, 78];
const largest = Math.max(numbers2);

// 
const numbers3 = [...numbers2];
numbers2.push(67);
numbers3.push(888);
console.log(numbers2);
console.log(numbers3);
 const numbers4 = [...numbers2, 9999];
 const numbers5 = [...numbers3, 777];
 console.log(numbers4);

//  Video 31-8 (advanced) Object and Array Destructuring

const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '017176588899',
    price: 4000
}
// 

const {phone} = fish;

console.log(phone);
// console.log(color);
// console.log(price);
console.log(phone);
console.log(phone);

const {age} = {name: 'Almas', age: 56, profession: 'makeup artist'}
console.log(age);
const {address} = fish;
console.log(address);

// array destructuring
const [first, another] = [44, 99, 88, 456];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
    return ['Alim', 'Halim'];
}
const [baba, chacha] = getNames();
console.log(chacha, baba);

// Video 31-9 Module Summary and Practice Problems

// Problem 1
// Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

const multiplyp = (a, b, c) => a * b * c;
const resultp = multiplyp(4, 5, 6);
console.log(resultp);

// Problem 2 : Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const threeLines = `I am a web developer.
I Love to code.
I love to eat biryani
`
console.log(threeLines);

// Problem 3:Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

const solution3 = (para1, para2 = 20) => para1 + para2;
console.log(solution3(10));

// Problem 4
/*  
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
*/
const friends = ['hasan', 'robel', 'shahed', 'shagor'];

const myFriends = (friends) => {
    friends.forEach((friend) => {
      console.log(`My friend is, ${friend}!`);
    });
  };
  myFriends(friends);

//   Problem 5
/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
*/
const nums = [2, 3, 4];

const averageOfSquares = (arr) => {
    const sumOfSquares = nums.map((num) => num * num).reduce((acc, val) => acc + val, 0);

    console.log(sumOfSquares);
    const avg = (sumOfSquares / arr.length).toFixed(2);
    return avg;
   
  };

const avg = averageOfSquares(nums);
console.log(avg);

// Problem 5
/* 
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
*/

    const prob1= [12, 23, 12];
    const prob2 = [4, 5, 3];

const findMax = (arr1, arr2) => {
    const combinedArr = [...arr1, ...arr2];
    const maxNum = Math.max(...combinedArr);
   
    return maxNum;
  };
  const maxNum = findMax(prob1, prob2);
  
  console.log(maxNum);

  const findMin = (arr1, arr2) => {
    const combinedArr = [...arr1, ...arr2];
    const minNum = Math.min(...combinedArr);
    return minNum;
  }
  const minNum = findMin(prob1, prob2);
  console.log(minNum);
    
 
  

    const numbers9 = [3, 4,5,6];
    const number0 = [5,4,7];
    
    // function getDoubles(numbers9){
    //     const output = {};
    //     for(const number of numbers9){
    //     sconst doubled = doubleIt(number);
    //     output.push(doubled);
    //     }
    //     return output;
    //     }

    //     // function doubleIt(number){
    //     // //     return number *2;
    //     // }
         const doubleIt2 = num => num*2;
    //     const result8 = getDoubles(numbers9);
            
    const makeDouble = numbers2.map(doubleIt);
    console.log(makeDouble);
    const makeDoubleDirect = numbers9.map(num => num*2)
    console.log(makeDoubleDirect);
    const makeDouble3 = number0.map(x=> x*2);
    console.log(makeDouble3);

    const fiveTimes = [1, 2,3, 4,5].map(x=>x *5);
    console.log(fiveTimes);

    const mod32 = [12, 56, 87, 44];
    const half= mod32.map( n => n/2)
    const thirds = mod32.map(x => x/3);
    console.log(half);
    console.log(thirds);



    