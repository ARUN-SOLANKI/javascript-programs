const body = document.body;
function rgbcolor(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const col = `rgb(${red},${green},${blue})`;
    return col;
}
const bg = setInterval(()=>{
    let getcol = rgbcolor()
    body.style.backgroundColor = getcol;
},1000)

body.addEventListener("mousemove", function(e) {
    let getcol = rgbcolor()
    body.style.backgroundColor = getcol;
    console.log(getcol)
        return getcol;
  });

  body.addEventListener("click", function(e) {

  });