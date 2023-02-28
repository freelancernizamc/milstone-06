// create object using object literals
// const player ={};
// player.name = 'small Nirob';
// player.speciality = 'batsman';
// player.bat = function(){
//     console.log('swing your bat');
// }
// // console.log(player);
// player.bat();

// const student ={
//     name: 'pandey',
//     job: 'khai andey',
//     ball: function(){
//         // console.log('throw the ball')
//     },
//     salary: 100000
// }

// object constructor
// const person = new Object();
// console.log(person);
// 3. object create method
// const item = object.create(null);
// const atel = object.create(student)
// console.log(atel.name);

// 4. class
// class person{
//     name = 'abul';
//     adress = 'sodor ghat';
//     constructor(age){
//         this.age = age;
//     }
// }

// const person1 = new person(56);
// console.log(person1);

// Video 36-2 Object method access and set property values

const student= {
    name: 'kodom Ali',
    money: 5000,
    stydy: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
         return this.name  + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }

}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining = student.treatDey(900, 100);
console.log(remaining);
const dolaRemaining = student.treatDey(500, 50);
console.log(dolaRemaining);

// Video 36-3 Keys, values, entries, delete, seal, freeze

const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);  // two dimensional array
// const twoDimension = [
//     [ 'color', 'yellow' ],
//     [ 'price', 50 ],
//     [ 'isCleaned', true ],
//     [ 'capacity', 1 ]
//   ]
console.log(bottle);
// Object.seal(bottle);  
// Object.freeze(bottle);   // seal korley delete kora jabe na
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);

// Video 36-4 Loop through an object using for in, for of, object entries
const numbers = [12, 54, 65, 3, 54];
for(const number of numbers){
    console.log(number);
}
// for of can not be used on object 
const bottle2 = {color: 'yellow', price: 60, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys2 = Object.keys(bottle2);
console.log(keys2);

// 3 ways to read object properties
// bottlt.color
// bottle['color]
// bottle[key]
for(const key of keys2){
    console.log(bottle2[key]);
}

// for in loop use on object
for(const key in bottle2){
    const value = (key, bottle2[key]);
    console.log(key, value);
}

// advanced
const pair = Object.entries(bottle2);
console.log(pair);
for(const [key, value] of Object.entries(bottle2)){
    console.log(key, value);
}

// Video 36-5 (advanced) Compare objects, referential integrity

// const first = {a: 2};
// const second = {a: 2};
// const third = second;
// if(third === second){
//     console.log('they are same')
// }
// else{
//     console.log('different')
// }

// do not use this method to compare object or array
const first = {a: 5, b: 2, c:5, e:1};
const second = {a: 5, c:5, b:2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString);
// if(firstString === secondString){
//     console.log('same')
// }
// else{
//     console.log('different')
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        // return true;
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
const isSame = compareObject(first, second);
console.log(isSame);


// 36-6 (optional) Borrow method from object and use it on another object

const kodomAli = {
    name: 'kodom Ali',
    money: 5000,
    stydy: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
         return this.name  + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }

}
const result = kodomAli.exam();

const badamAli = {
    name: 'kacha badam',
    money: 8000
}
// console.log(result);
const result2 = kodomAli.exam.call(badamAli);
// console.log(result2);
const badamMoney = kodomAli.treatDey.call(badamAli, 400, 40);
console.log(badamMoney);
const badamMoney2 = kodomAli.treatDey.apply(badamAli, [1000, 100]);
console.log(badamMoney2);

const badamAliTreat = kodomAli.treatDey.bind(badamAli);
const remaining2 = badamAliTreat(1000, 100);
console.log(remaining);

// Video 36-7 (super advanced) Understand this keyword in JavaScript
// window.console.log(this);
kodomAli.exam();
const badamAli2 = {
    name: 'kacha badam',
    money: 8000
}
badamAli2.exam = kodomAli.exam;
badamAli2.exam();

function clickHandler(){
    console.log('inside click handler', this);

}

document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})

// Video 36-8 Module summary and checklist
