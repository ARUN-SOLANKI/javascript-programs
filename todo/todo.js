const todoForm = document.querySelector(".todo-form");
const todolist = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-form input[type = 'text']");
const head = document.querySelector(".head-btn");
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const text = todoInput.value;
    const newli = document.createElement('li');
    const newliinnerHTML = `<span class="text">${text}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
    newli.innerHTML = newliinnerHTML;
    todolist.append(newli);
    todoInput.value="";
})
todolist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const donelist = e.target.parentNode.previousElementSibling;
        donelist.style.textDecoration = "line-through"
    }
    if(e.target.classList.contains("remove")){
        const removelist = e.target.parentNode.parentNode;
        removelist.remove();
    }

});
function rgbcolor(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const col = `rgb(${red},${green},${blue})`;
    return col;
}
head.addEventListener("click", (e)=>{
    const randomcolor = rgbcolor();
    document.body.style.backgroundColor = randomcolor;
});
