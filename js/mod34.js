// Video 34-1 Basic API recap with kanye west


const loadQuote = () =>{
    // console.log('quotes loading')
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
    .catch(error => {
        console.log(error);
    })
}

const loadQuote2 = async() =>{
   try{
    const res = await fetch('https://api.kanye.rest/');
    const data = await res.json();
    displayQuote(data);
   }
   catch(error){
    console.log(error);
   }
}

const displayQuote = quote =>{
    // console.log(quote);
    const blockQuote = document.getElementById('quote');
    console.log(quote);
    blockQuote.innerHTML = quote.quote;
}

loadQuote();

// Video 34-2 Handle Random user with nested API data

const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

// const displayUser = user =>{
//     const genderTag = document.getElementById('gender')
//     const locationTag = document.getElementById('location')
//     genderTag.innerHTML = user.results[0].gender;
//     locationTag.innerHTML = user.results[0].location;
    
//     const name = user.results[0].name.first + ' ' + user.results[0].name.last;
    
//     document.getElementById('name').innerHTML = name;
//     console.log(user.results[0].name);
// }

// loadUser();

const displayUser = (user) => {
    const genderTag = document.getElementById('gender');
    const locationTag = document.getElementById('location');
    const imageTag = document.getElementById('user-image');
    const phoneTag = document.getElementById('phone');
  
    genderTag.innerHTML = user.results[0].gender;
    locationTag.innerHTML = user.results[0].location.city + ', ' + user.results[0].location.country;
    phoneTag.innerHTML = user.results[0].phone;
    imageTag.innerHTML = `<img src="${user.results[0].picture.large}"/>`
    console.log(user);
    
    
    const name = user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;
    console.log(user.results[0].name);
  }
loadUser();  