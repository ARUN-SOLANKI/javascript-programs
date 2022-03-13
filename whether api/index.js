const inp = document.querySelector("input");
const image = document.querySelector("img");
const btn = document.querySelector("button")
const rain_h1 = document.querySelector(".rain_h1")
const city = document.querySelector(".city")
const tempa = document.querySelector("#tempra")
const huma = document.querySelector("#huma")
const winda = document.querySelector(".winda")
const dates = document.querySelector(".dtaedun");
const times = document.querySelector(".timeedun");
const getdatein = new Date().toLocaleDateString();
const gettime = new Date().toLocaleTimeString();

const nowimg = (status) =>{
    if(status == "Smoke"){
        image.setAttribute("src" , "sun (1).png");
    }if(status == "Clear"){
        image.setAttribute("src" ,"sun (2).png");
    }if(status == "Haze"){
        image.setAttribute("src" , "cloudy (1).png");
    }
    if(status == "Clouds"){
        image.setAttribute("src" , "cloudy.png");
    }
    if(status == "Rain"){
        image.setAttribute("src" , "rain.png");
    }
    if(status == "Mist"){
        image.setAttribute("src" , "mist.png");
    }
}

function getdata(cityname){
let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=361e815b8f53a0dc496c8c6c0c6a524a`;
fetch(url).then((res)=>res.json()).then((res=>{
        const {temp , humidity} = res.main;
        const name = res.name;
        const {speed} = res.wind;
        const {main:condi} = res.weather[0];
        nowimg(condi);
        city.innerHTML = `${name}`
        tempa.textContent = `${Math.round(temp -273)}`
        huma.innerHTML = `${humidity}`
        winda.innerHTML = `${speed}`
        dates.innerHTML = `${getdatein}`
        times.innerHTML = `${gettime}`
        rain_h1.innerHTML = `${condi}`

    btn.addEventListener("click",()=>{ 
        let getcityname = inp.value;
        getdata(getcityname)
        inp.value="";

    })
}));
}
getdata("delhi");