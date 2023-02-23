
// Video 32-0 Basic ES6 Concept
// Video 32-1 Module Introduction and Basic ES6 Recap

// 1. var let const
// break up with var
// const numbers = [12, 546, 45, 98];
// let salary = 450;
// salary = 455;

// // 2. default parameters
// function calculateSalary(salary, tax, bonus){
//     const remaining = salary - salary - salary*tax;
//     const total = remaing + bonus;
//     return total;
// }

// // 3. template string
// const elementHTML = `
// <div>
//     <h3>Name: </h3>
//     <p>Address:  </p>
//     <p> Salary: ${calculateSalary(10000, 0, 0)}</p>
//     <p>Others: ${numbers}</p> 
// </div
// `

// // 4. Arrow function
// const doubleIt = x => x*2;
// const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;
// // console.log(calculateSalary); 

// // 5. spread 
// const ages = [11, 13, 15, 14, 10, 16];
// const newAges = [...ages, 22, 24, 23];

// // destructuring
// const {x, y, z, ...c} = {x: 45, y: 12, z: 33, name: 'Sakib Al Hasan', salary: 45000};
// const [a, b, ...r] = [12, 45, 21, 65, 98];

// Video 32-2 Access Value, nested object Optional chaining

const users = [
    {id: 1, name: 'abul', job: 'doctor'}
]
console.log(users);
console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id:1, name: 'babul', job: 'leader'},
        {id:2, name: 'dabul', job: 'leader'},
    ]
}
const firstJob = data.data[0].job;
console.log(data.data);
// console.log(data.data[0].job);

    const user = {
        id: 5001,
        name: 'Thomas alba edison',
        address: {
            street: {
                first: '35/A kochukhet lane',
                second: 'third floor',
                third: 'right side'
            },
            

            postOffice: 'cantonment',
            city: 'Dhaka'
        }

    }

    // const userFloor = user.address;
     const userFloor = user.address.street.second;
    // console.log(userFloor);
    // optional chaining
    // const userFloor = user.address.stret?.second;
    console.log(userFloor);

    // Video 32-3 Array map to do one line loop magic
    const numbers = [2, 8, 4, 6,3];
    const output = [];
    for(const number of numbers){
        const doubled = number *2;
        output.push(doubled);
    } 
    console.log(output);

    // function getDoubles(numbers){
    //     const output = [];
    //     for(const number of numbers){
    //         const doubled = number * 2;
    //         output.push(doubled);
    //     }
    //     return output;
    // }
    function getDoubles(numbers){
        const output = [];
        for(const number of numbers){
            const doubled = doubleIt(number);
            output.push(doubled);
        }
        return output;
    }


    function doubleItOld(num){
        return num * 2;
    }

    const doubleIt = num => num * 2;

    const makedDouble = numbers.map(doubleIt);
    const makedDoubleDirect = numbers.map(num => num * 2);
    console.log(makedDoubleDirect);
    const makedDouble2 = numbers.map(x => x *2);
    console.log(makedDouble2);
    const fiveTimes = [1,2,3,4,5].map(x=>x*5);
    console.log(fiveTimes);
    /* 
    purpose: 
    1. get an array
    2. for every elements of the array do something
    3. store the result in an array
    4. return the result array
     */
    
    const result = getDoubles(numbers);
    console.log(result);
    console.log(makedDouble);

    // Video 32-4 Map string array, array of objects map, foreach

       const numbers2 = [12, 56, 87, 44];
       const half = numbers2.map(n => n/2);
       console.log(half); 
       const third = numbers2.map(x => x/3);
       console.log(third);

       const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
       const firstLetters = friends.map(friend => friend[0]);
       console.log(firstLetters);

       const nameLengths = friends.map(friend => friend.length);
       console.log(nameLengths);

       const products = [
        {id: 1, name: 'laptop', price: 45000},
        {id: 1, name: 'mobile', price: 80000},
        {id: 1, name: 'watch', price: 35000},
        {id: 1, name: 'tablet', price: 23000},
       ]

       const expensive = products.filter(product => product.price>30000);
       console.log(expensive);

    //    const items = products.map(product => console.log(product));
       const items = products.map(product => product.name);
       const prices = products.map(p => p.price);
       console.log(prices);

    //    forEach
    // friends.forEach(friend => console.log(friends));

    // Video 32-5 Implement filter, find on an array of objects
       const numbers3 = [12, 5, 23, 45, 11,18, 9, 55, 61, 1];
       const bigNums = numbers3.filter(number => number >20);
       console.log(bigNums);
       const tiny = numbers3.filter(n => n<10);
       console.log(tiny);
       const even = numbers3.filter(num => num % 2 === 0);
       const fives = numbers3.find(num => num% 5 === 0);
       console.log(fives);
       const fivesAll = numbers3.filter(num => num % 5 ===0);
       console.log(fivesAll);
       console.log(even);

    //    Video 32-6 (optional) Explore Reduce and Dot notation
      const numbers4 = [1, 2, 3,4, 5];
    //   .reduce (accumulatorFunction, initial value)
    // accumulatorFunction use two parameters
   
    //   const total =numbers4.reduce((previous, current) => previous + current , 0); 
    const total = numbers4.reduce((previous, current) => {
        console.log(previous, current);
        return previous + current
    } , 0);
        
    // notation
    const student = {
        name: 'kolim uddin',
        age: 15,
        class: 'Ten',
        marks: {
            math: 78,
            phisics: 89,
            chemistry: 65,
        },
    }
    const marks = student.marks;
    const math = student.marks.math;
    const chemistry = student['marks']['chemistry'];
    const subject = 'math';
    const subjectMarks = student.marks[subject];
    console.log(subjectMarks);
    console.log(chemistry);
    console.log(math);
    
    // Video 32-7 (semi-advanced) Class, constructor, method, create object from class

    // object oriented programming language a class use hoi 
    // ES6 a class a bola hoi syntactic sugar
    // class Instructor{
    //     name;
    //     designation = 'web course Instructor'
    //     team = 'web team'
    //     location;
    //     constructor(name, location){
    //         this.name = name;
    //         this.location = location;
    //     }
    //     startSupportSession(time){
    //         console.log(`start the support session at ${time}`)
    //     }
    //     createQuiz(module){
    //         console.log(`please create quiz for module ${module}`)
    //     }
    // }
    // const aamir = new Instructor('aamir', 'mumbai');
    // console.log(aamir);
    // aamir.startSupportSession('9.00');
    // aamir.createQuiz(60);
    // const solaiman = new Instructor('solaiman khan', 'chittagong');
    // console.log(solaiman);

    class Vechile {
        constructor(make, model, color){
            this.make = make;
            this.model = model;
            this.color = color;
        }
        getName(){
            return this.make + " " + this.model;
        }

    }
    let car = new Vechile("Toyota", "Corolla", "black");
    console.log(car);

    // Video 32-8 (advanced) Inheritance, extends class, super, class method
    class TeamMember{
        name;
        location;
        constructor(name, location){
            this.name = name;
            this.location = location;
        }
        provideFeedback(){
            console.log(`${this.name} thank you for your feedback.`)
        }
    }

    class Instructor extends TeamMember{
        
        designation = 'web course Instructor'
        team = 'web team';
        constructor(name, location){
            super(name, location);
            
        }
        startSupportSession(time){
            console.log(`start the support session at ${time}`)
        }
        createQuiz(module){
            console.log(`please create quiz for module ${module}`)
        }
    

    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback.`)
    // }
}

    class developer extends TeamMember{
      
        designation = 'web course Instructor'
        team = 'web team'
       
        constructor(name, location, tech){
            super(name, location)
            this.tech =tech;
        }
        developFeature(feature){
            console.log(`please develop the ${feature}`)
        }
        release(version){
            console.log(`please release the ${version}`)
        }
    

    
}

class JobPlacement extends TeamMember{
    designation ='Job placement commados'
    team = 'Job placement'
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
       
    }
}

const alia = new developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);

const bepasha = new JobPlacement('Bepasha bosho', 'chittagong', 'Dhaka');

console.log(bepasha);

// Video 32-9 Module summary and Practice Problem
/* 
1. optional chaining
student.marks?.math
map, filter, find
optional): forEach, reduce(advanced)
class
inheritance, super
(must) prototype chain 
*/

// Conseptual Section
// Turnary operator:
let isStudent = student;
paragraph = (isStudent === true) ? 'he is student' : 'porashona valo lagena';
console.log(paragraph);

// spread
const arr= [2, 3, 4, 5, 4];
const [num1, num2] = arr;
console.log(num1, num2);
const [nu1, ...remain] = arr;
console.log(nu1, remain);

// const person ={
//     name: 'hero alom',
//     age: 34,
//     address: 'bari nai'
// }
// const {name} = person;
// console.log(name);
// const {address:bari, name} = person;
// console.log(bari,name);
// let {age, ...others} = person;
// console.log(age, others);

// const person2 = person;
// person2.isMale = true;
// console.log(person2);

const Person = {
    Name: 'abul',
    age: 23,
    education:{
        subject: 'bangla',
         marks: 40,
            
            
        
        
    }

}

const age = Person['age'];
console.log(age);
const property = 'Name';
const aa = Person[property];
console.log(aa);
// console.log(Person.education.subject[0].marks);
console.log(Person.education.subject);

// const add = (x,y) =>console.log(x+y);

const array = [1,2,3,4,5];
for(let n of array){
    console.log(n);
}
// array.forEach( numbers => console.log(number))
array.forEach((number,index,a) => {
    console.log(number+ ' '+index+" "+a);
})
// return lagle map use, na lagle forEach use koren.
// find single value return korne,filter array return korbe

const numbers9 = [12, 50, 55, 66]
const x = numbers9.find((n) => n >= 50)
const y= numbers9.filter((n) => n >50)
console.log(x);
console.log(y);

// problem solving

// const scic = students.filter(s => s.ave >= 50 && s.fiftyPercent === true)
// const names = scic.map(st) => st.name)
// /jamai
// const jamai = polapain.filter(pola => pola.job ==='sorkari')
// const jamai = polapain.filter(pola => (pola.job ==='sorkari' && pola.salary >=20000) || (pola.job ==='beshorkari' && pola.salary >= 40000))

// const info = {};
// info['name'] = 'mehedi';
// console.log(info);
// Persons.map(p => {
//     const id = p.id;
//     const value = p.name;

//     info[id] = value;
// })
// console.log(info);
// console.log(info, ID02);


// remove elements from 2D array

let MathScore = [
    ["John Doe", 20, 60, "A"],
    ["Jane Doe", 10, 52, "B"],
    ["Petr Chess", 5, 24, "F"],
    ["Ling Jess", 28, 43, "A"],
    ["Ben Liard", 16, 51, "B"]
  ];
  
  MathScore.forEach((score) => {
    score.pop();
    // score.shift();
    score.push(50, 60, 70, 90);
    score.unshift(2, 3, 4, 5);
  });
//   update indivisual elements 
    MathScore[0][4] = "Nizam uddin";
    // console.log(MathScore);
    console.log(MathScore);