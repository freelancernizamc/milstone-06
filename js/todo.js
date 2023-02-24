function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}


function displayTodos(todos){
// console.log(todos);
const todoContainer = document.getElementById('todo-container');

for(const todo of todos){
const todoDiv = document.createElement('div');
todoDiv.innerHTML = `
    <h3>title: ${todo.title}</h3>
    <p>User: ${todo.userId}</p>
    <p>Is completed: ${todo.completed === true ? 'complete': 'not complete'}</p>


`;
todoContainer.appendChild(todoDiv);

}
}
loadTodos();