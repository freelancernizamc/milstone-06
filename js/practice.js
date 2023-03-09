// Problem 1
/*  
একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।
Solutions:
 */

const student = {
    name: 'Nizam Uddin',
    id: 1943,
    address: {
        street: '81/a panslaish',
        city: 'chattogram',
    },
    marks: [60, 58, 55, 50, 59],
    getPropertyValue: function(pro){
        return this[pro];
    }
};
console.log(student);
console.log(student.getPropertyValue('marks'));
console.log(student.getPropertyValue('address'));

// Problem 2
/* 
একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।
Solutions
*/
const temString = `Assalamualaikum, My Name is ${student.name}, my Id is ${student.id}, My assignment marks is ${student.marks}, my address is ${student.address.street}, ${student.address.city}`;
console.log(temString);

// Problem 3
/*
শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।
Solutions  
 */
myTotalMarks = () =>{
    return 89;
}
console.log(myTotalMarks());

// Problem 4
/* 
এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।
 */

const probFour = (num) =>{
    const result = num/17
    return result;
}
console.log(probFour(51));

// Problem 5
/*  
 দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।
 Solutions
  */

 const probFive = (number1, number2) =>{
    const output = (number1 + number2)/2;
    return output;
 }
 console.log(probFive(20, 30));

//  Problem 6
/* 
একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
Solutions
 */
const probSix = (num1, num2) =>{
    const newNum1 = num1 + 7;
    const newNum2 = num2 + 7;
    const sum = newNum1 + newNum2;
    return sum;
}
console.log(probSix(10, 20));

// Problem 7
// অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
// Solutions:
const givenArray = [21, 35, 42, 49];
const newArray = givenArray.map(num => num/7);
console.log(newArray);

// Problem 8
/*
Simply use destructuring to declare a property of a JavaScript object as a variable. destructuring the array and to do that you destruct the element of the second position of the array and put it in a variable called 'balance'.
সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
Solutions:   
 */
const myAccount = {
    name: 'Nizam Uddin',
    age: 40,
    balance: 5000
}
const {balance} = myAccount;
const {age} = myAccount;
console.log(balance);
console.log(age);


const marks = [60, 55, 59, 50];
const [, secondElement] = marks;
const balance2 = secondElement
console.log(balance2);

// Problem 9
/*  
একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
*/


// function loadPost(){
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(response =>response.json())
// .then(data => displayPhotos(data))
// }

//  Fetch the photos data from JSONPlaceholder API
 fetch('https://jsonplaceholder.typicode.com/photos')
 .then(response => response.json())
 .then(data => {
    const photos = data.slice(0, 30);
   // Create a Bootstrap card for each photo
   data.forEach(photo => {
     const card = document.createElement('div');
     card.className = 'col-md-4 mb-4';
     card.innerHTML = `
       <div class="card">
         <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
         <div class="card-body">
           <h5 class="card-title">${photo.title}</h5>
          
           <button id="details" class="btn" data-bs-toggle="modal" data-bs-target="#details">Show Details</button>
         </div>
       </div>
     `;
     // Append the card to the row
     const row = document.querySelector('.row');
     row.appendChild(card);
   });
 })
 .catch(error => console.error(error));



// Fetch the data from the JSONPlaceholder API
// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(data => {
//     // Select the container element where the cards will be added
//     const container = document.querySelector('#container');

//     // Select the detail section element
//     const detail = document.querySelector('#detail');

//     // Loop through the data and create a card for each photo
//     data.forEach(photo => {
//       // Create the card element
//       const card = document.createElement('div');
//       card.classList.add('card');

//       // Create the image element and set its attributes
//       const image = document.createElement('img');
//       image.classList.add('card-img-top');
//       image.src = photo.url;
//       image.alt = photo.title;

//       // Create the card body element and set its content
//       const body = document.createElement('div');
//       body.classList.add('card-body');
//       body.innerHTML = `<h5 class="card-title">${photo.title}</h5>`;

//       // Add an event listener to the card that displays the detail section
       document.getElementById('details').addEventListener('click', () => {
        // Fetch the data for the clicked photo
        fetch(`https://jsonplaceholder.typicode.com/photos/${photo.url}`)
          .then(response => response.json())
          .then(data => {
            // Set the content of the detail section
            detail.innerHTML = `
              <div>
                <img src="${data.url}" alt="${data.title}">
                <img src="${data.thumbnailUrl}" alt="${data.title}">
                <h5>${data.title}</h5>
              
              </div>
            `;
          })
          .catch(error => console.error(error));

        // Display the detail section
        detail.style.display = 'block';
        })

      // Add the image and card body to the card
  //     card.appendChild(image);
  //     card.appendChild(body);

  //     // Add the card to the container
  //     container.appendChild(card);
  //   });
  // })
  // .catch(error => console.error(error));
