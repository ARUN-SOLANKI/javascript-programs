const celcius = document.querySelector(".celcius");
const ferr = document.querySelector(".ferr");
const main = document.querySelector(".main");
function ctof(){
    const cvalue = celcius.value;
    const fer = (cvalue * 9/5 )+ 32;
    return fer;
}
function ftoc(){
    const fvalue = ferr.value;
    const cal = (fvalue - 32 )* 5/9;
    return cal;
}
main.addEventListener("input" , (e)=>{
    if(e.target === celcius){
    ferr.value = ctof();
    }
    if(e.target === ferr){
        celcius.value = ftoc();
        }
})

