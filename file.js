
const body = document.body;
const btn = document.querySelector(".btn");
const text = document.querySelector(".color-text span");
const main = document.querySelector(".main");
// console.log(window)

function rgbgenerator(){
    const red = Math.floor(Math.random() * 256);
    const green =Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const apear = Math.random();
    const randomColor = `rgb(${red}, ${green}, ${blue}, ${apear})`;
    return randomColor;
}

btn.addEventListener("click", (e)=>{
    const randomgen = rgbgenerator();
    body.style.backgroundColor=randomgen; 
    main.style.backgroundColor=randomgen;
    text.textContent = randomgen;
})