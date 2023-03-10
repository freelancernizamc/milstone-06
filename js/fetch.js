// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())        //,json is not similar but close to JSON.parse
//       .then(json => console.log(json))


      
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData(){
    const url= 'https://jsonplaceholder.typicode.com/posts/1/comments';
    fetch(url)
   .then(response => response.json())
   .then(data => displayData(data))
}

function displayData(comments){
    const container = document.getElementById('display-container'); 
    for (const comment of comments){
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>name: ${comment.name}</h3>
    <p>email: ${comment.email}</p>
    


`;
container.appendChild(div);
}
}


// Video 33-4 Load more data, more APIs, send data to function

function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data);
}

// Video 33-5 Dynamically display loaded data on your website

function loadPosts2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayPosts2(data))
}

function displayPosts2(users){
    const ul = document.getElementById('posts-list');
   
    // console.log(data);
    for(const user of users){
        
        li.classList.add('post')
        const li = document.createElement('li');
        console.log(users.title);
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
// loadPosts2();

// Video 33-6 Load posts and display on the website with CSS

// function loadPost2(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => displayPosts2(posts))

// }

/*
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or InnerHTML
4. appendChild
*/


// function displayPosts2(posts){
//     const postContainer = document.getElementById('posts-container');
//     for(const post of posts){
//         const postDiv = document.createElement('div');
//         console.log(post);
//         postDiv.classList.add('post')
        
//         postDiv.innerHTML = `
//         <h4>User-${post.userId}</h4>
//         <h5>Post: ${post.title}</h5>
//         <p>Post Description: ${post.body}</p>
//         `;
       
//         postContainer.appendChild(postDiv);

//     }

// }

// 