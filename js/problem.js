// Problem 1
/* 
You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/
// Solution:
const oddNumbers = [1, 3, 5, 7, 9];
const output = [];
const evenNumbers = oddNumbers.map(number =>number+1);
console.log(evenNumbers);

// loop
for(const number of oddNumbers){
    const evenNumbers = number + 1;
    output.push(evenNumbers);
} 
console.log(output);

// Problem 2
/* 
You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
Solution:
*/
const givenNumber = [33, 50, 79, 78, 90, 101, 30];

const divisibleByTen = givenNumber.filter(num => num % 10 === 0);

console.log(divisibleByTen); 

// Problem 3
/* 
Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
Solutions
*/
const divisibleByTen2 = givenNumber.find(num => num % 10 === 0);
console.log(divisibleByTen2);
// Compare the output of question 2 & q.3: In question 3 filter gives all the elements which is divisible by 10, in q.3 find gives the first element of the array which is divisible by 10.

// Problem-4
/* 
You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
Solutions:

By using for loop
*/

const givenArr = [1, 9, 17, 22];
let sum = 0;
for(i = 0; i< givenArr.length; i++){
    sum+= givenArr[i];
}
console.log(sum);

// By using array.reduce method
const sum2 = givenArr.reduce((total, currentValue) => total + currentValue);
console.log(sum2);

let arr2 = [40, 50, 60];
const sum3 = arr2.reduce((all, currentValue) => all + currentValue);
console.log(sum3);

// Problem 05
/*  
const people =[
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];
Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.

Solutions:
*/
const people =[
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];

let sOfAge = 0;
for(i = 0; i< people.length; i++){
    sOfAge += people[i].age;
}
console.log(sOfAge);

// using array.reduce method

const sumOfAge = people.reduce((total, person) =>{
     return total + person.age;
    }, 0);
console.log(sumOfAge);

// Problem 06

const student = {
    Name: 'Fridie',
    age: 26
}
const{age} = student;
// console.log(student.age);
console.log(age);

// Problem 07:

let data = {
    location: [
        {
        latitude: '34.5, 37.8',
        longitude: '98.77, 58.7',
        city: 'Hyderabad',
        country: 'India',
        }
    ]
}

// const city = data['location'][0]['city'];
// const city = data.location[0].city;
// console.log(city);


// Problem 08

const member = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

//   console the value of email
console.log(member.email);
// console.log(member.address);
console.log(member['address']);
// console.log(member.address.city);
const city = member.address.city;
const lat = member.address.geo.lat;
const companyName = member.company.name;
console.log(city);
console.log(lat);
console.log(companyName);

// Create a string message with template literals
// Declare a variable and an object
const name = "Md Nizam";
const person = {
  firstName: "Arefa",
  lastName: "Tuni"
};

// Create a string with template literals
const message = `Hello, my name is ${name}. I Love you, ${person.firstName} ${person.lastName}.`;

// Log the message to the console
console.log(message);

// Problem : একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।

const divideByF = num => {
    return num/5;
}
console.log(divideByF(20));

/*  
Problem:
তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো
*/

const resultAdd = (number1, number2) => {
    const sum = (number1 + 2) + (number2 + 2);
    const result = sum * 2;
    return result;
}
console.log(resultAdd(20, 10));

/*
Problem:
 এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।
*/
const threePara = (num1, num2, num3) => {
    const multiplay = (num1*num2*num3);
    return multiplay;
}
console.log(threePara(4,5,8));

// Problem 
/*  
এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
Solutions
*/
const twoPara = (num1, num2) => {
    const sum1 = num1 + 2;
    const sum2 = num2 +2;
    const finalResult = sum1 * sum2;
    return finalResult;
}
console.log(twoPara(4, 5));

// Problem
/* 
অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
Solution:
 */
const marks = [30, 40, 50, 60, 70];
const totalMarks = marks.map(element => element * 5);
console.log(totalMarks);

// Problem:
/* 
[ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো
Solution:
 */
const pNumber = [2, 5, 6, 7, 9, 6, 19];
const oddNumber = pNumber.filter(num => num % 2);
console.log(oddNumber);

// Problem:
/*
একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।
*/
    const myShopping = [
    { name: 'Shirt', price: 2000 },
    { name: 'Panjabi', price: 5000 },
    { name: 'Watch', price: 10000 }
  ];
  const myPrice = myShopping.find(myShopping => myShopping.price === 5000);
  console.log(myPrice);

//   Problem:
// সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
const myData = { name: 'Nizam Uddin', age: 30, city: 'Chittagong' };

const myName = myData['name'];
// const myName = myData.name;
const myAge = myData.age

console.log(myName); // output: 'Nizam Uddin'
console.log(myAge);

// Problem
//  [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
// const array = [1, 2, 3, 4, 5, 6];

// const three = [...array(2)];

// console.log(three);
const myArray = [1, 2, 3, 4, 5];

const [, , three] = myArray;

console.log(three); // output: 3

// Problem
//  তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।

const sumThree = ((x, y, z = 7) => {
    const sum = (x + y + z);
    return sum;
})
  
   
    console.log(sumThree(5, 5));

// Problem একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const student2 = {
    id:  'WEB7-1905',
    Name: 'Nizam Uddin',
    marks: [60, 59, 55, 58, 60],
    address:{
        vill: 'Fathepur',
        ps: 'Gatickchari',
        city: 'chittagong'
    },
}


// উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। Find average .

const myTotalMarks = student2.marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = myTotalMarks / student2.marks.length;
// console.log(student2.addres?.ps);
console.log(student2.address);
console.log(student2.address.city);
console.log(student2.marks);
console.log(averageMarks);


// forEach:

var array = [1,2,3];
array.forEach(function(i){
  console.log(i);
});

// filter:

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

// find

const givenNumber2= [33, 50, 79, 78, 90, 101, 30];

const divisibleByTen3 = givenNumber.find(num => num % 10 === 0);

console.log(divisibleByTen3);

//Conseptual section
// let, const , var variable
var Nam = 'Nizam';
Nam = 'Md Nizam Uddin';
console.log(Nam);

let job= 'developer';
job = 'web developer'; 
console.log(job);

const prof = 'Freelancer';
// prof = 'Freelancer Nizam';
console.log(prof);

// scope: 1. global scope, 2. local scope and 3. block scope
// block scope
{
let roll = 12
console.log(roll);
}
// console.log(roll); can't access here
// local scope 
function add(){
    let a = 5;
}
let Name = 'Nizam';
const isMale = true;

// template string
// const sentence = 'Amar name\n'+Name + '\n Age:' + 40;
const sentence =`AmarName ${Name}
Age: 30`;
console.log(sentence);

  const isStudent = false;
// let paragraph = '';
// // without if else ==> turnary block
// (isStudent === true) ? console.log('he is student') : console.log('not student');

paragraph = (isStudent=== true) ? 'he is student' : 'porashona valolagena';
console.log(paragraph);

// when we use (== & ===), == ckeck only value === check value and type of variable
const number = [2, 4, 5, 6,7, 8];
const num = [9, 43, 23];
// spread operator

number.push(1);
console.log(Math.min(...number));
const arr3 = [...number, ...num];
console.log(arr3);
num.push(100);
console.log(num);
// const first = arr3[2];
// console.log(first);
const [first,second,third, ...other] = arr3;
// console.log(first, second);
console.log(other);

const public= {
    nam: 'Hero alom',
    age2: 34,
    phone: '028566798',
    address: 'bari nai',
    p: [1, 2, 3, 4]
}
// const {nam,age2,phone:mobile,p} = public;
// console.log(nam,age,mobile,p);
let {address,...others} = public;
console.log(others);
const public2 = {...public};
public2.isMale = true;
console.log(public2);
const {p} = public;
const [number0] =p;
console.log(number0);

const person3 = {
    name:'abul',
    age: 23,
    contact: {
        phone: '018177652773',
        email: 'abul@gmail.com',
    },
    education: {
        schoolName: "anderkilla high school",
        subjects: [
            {name: 'bangla', marks: 45 },
            {name: 'english', marks: 65},
            {name: 'math', marks: 75}
        ]

        }
        
    }

    // const age3 = person3.age;
    // const age3 = person3['age'];
    // const property = 'age';
    const property = 'name'
    const aa = person3[property];
    console.log(aa);
    console.log(person3.education);
    console.log(person3.education.subjects[1].marks);
    console.log(person3.education.subjects[2].name);

    const petOwner = {
        name: 'jolonto kholil',
        contact: {
            phone: '028823',
            email: 'ajsgs@jskkdj.com',

        },
        pet: {
            name: 'loflie',
            info: {
                color: 'black',
                weight: '1.2kg',
            },
        },
    };

    console.log(petOwner.pet.name);
