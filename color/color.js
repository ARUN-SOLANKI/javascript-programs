const colour = document.querySelector("#color");
const d = document.querySelector(".date");
let newdate = new Date();
let year = newdate.getFullYear();
let month = newdate.getMonth();
let day = newdate.getDay();
let hour = newdate.getHours();
let min = newdate.getMinutes();
let sec = newdate.getSeconds();
let msec = newdate.getMilliseconds();
console.log(d.localtimestring)
function dd(){
    d.innerHTML = `${day} / ${month} /${year}  ${hour} : ${min} : ${sec} : ${msec}`;
    setTimeout(dd, 1000);
}
dd();
colour.addEventListener("input",(e)=>{
    document.body.style.backgroundColor = e.target.value;
})