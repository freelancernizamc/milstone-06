// Video 31-1 Recap of DOM Manipulation and event handler

document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        // console.log(friend);
        friend.style.backgroundColor = 'lightblue';
    }
});


document.getElementById('center-third').addEventListener('click', function(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})

document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Something new added</p>
    `
    friendContainer.appendChild(friend);
})


// Video 31-2 ES6 Intro difference between var, Let and const
// breaking with var
// no more use of var
// let : letit to reassign
// const: do not allow it to reassign
