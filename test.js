//1. Interactive To-Do List

//Create a simple to-do list application that allows users to add,
 //remove, and mark tasks as complete. Firstly, start with a basic HTML structure.
  //Then, use JavaScript to handle user interactions and update the list dynamically. Next, focus on implementing features like adding new tasks, checking off completed tasks, and deleting tasks. Additionally, enhance the project by incorporating features such as storing tasks in the
 //browser's local storage, enabling task prioritization, or adding due dates.


const input = document.querySelector('#input')
const btn = document.querySelector('#btn');

const todos = document.querySelector('#todos');
const save = document.querySelector('#save');

btn.addEventListener('click',function(){
let li = document.createElement('li')

li.innerHTML = input.value
todos.appendChild(li)

li.addEventListener('click',function(){

    li.remove()
})
})

save.addEventListener('click',function(){

    let p = document.createElement('p');
    p.innerHTML = input.value;

 })

 const bt = document.querySelector('bt')

 //setTimeout(() => {
   // document.body.style.backgroundColor = 'red' 

 //},1000);

 //setTimeout(() => {
  //  document.body.style.backgroundColor ='pink'
//},1000 );


const delaydColor = (color,time)=>{

return new Promise((yes,no)=>{
setTimeout(()=>{
document.body.style.backgroundColor = color
yes()
},time)


})

}

async function rain(){
await delaydColor('red',2000)
await delaydColor('pink',2000)
await delaydColor('green',2000)
await delaydColor('orange',2000)

}
rain()

