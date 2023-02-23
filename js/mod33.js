// console.log('connected');
// Video 33-1 How does internet work, HTTP Vs HTTPs and What is an API
 const user = {id: 1, name: 'Gorib Aamir', job: 'actor'}
// console.log(user);
// Video 33-2 Intro to JSON, JSON Structure, parse, stringify

// JavaScript Object Notation (JSON)
// 
const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revinue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);

// Video 33-3 JSON placeholder, GET data, display data on UI
