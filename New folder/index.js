const main_btn = document.querySelector(".main_btn")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn_parent = document.querySelector(".btn_parent")
const parent = document.querySelector(".parent")
const main = document.querySelector(".main")

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomInt(1, 6));

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;


btn1.addEventListener("click" , function(){
    console.log(this)
    this.style.backgroundColor = randomColor();
})

btn_parent.addEventListener("click",function(){
    console.log(this)
    this.style.backgroundColor = randomColor();
})
parent.addEventListener("click",function(){
    console.log(this)
    this.style.backgroundColor = randomColor();
})
main.addEventListener("click",function(){
    console.log(this)
    this.style.backgroundColor = randomColor();
})