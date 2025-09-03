let todos = [];
async function getdata() {
    let result = await fetch('https://jsonplaceholder.typicode.com/todos');
    todos = await result.json();
    console.log(todos);
    renderlist();  
}
function renderlist(){
    let data = "";
    for (let i = 0; i < todos.length; i++){
        data +="<ul>";
        data +="<li>"+todos[i].userId+"</li>";
        data +="<li>"+todos[i].id+"</li>";
        data +="<li>"+todos[i].title+"</li>";
        data +="</ul>";
    }
    document.querySelector('#todoList').innerHTML=data;
}
function addNewTitle(){
    let newTitle=document.getElementById('newTitle').value; 
    let newUserId = 10; 
    let newId = todos.length + 1; 
    todos.push({
        userId: newUserId,
        id: newId,
        title: newTitle,
    });
    renderlist();
    document.getElementById('newTitle').value = "";
}
getdata();


