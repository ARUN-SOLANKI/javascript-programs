console.log("working");
fetch("https://api.covid19api.com/summary").then(
    (data) => {
        
        return data.json();
    }
).then( (actualdata) =>{
    console.log(actualdata);
    // console.log(inp , btn);
    const inp = document.querySelector("input");
    const btn = document.querySelector("button");
    const td1 = document.querySelector(".td1")
    const td2 = document.querySelector(".td2")
    const td3 = document.querySelector(".td3")
    const td4 = document.querySelector(".td4")
    inp.addEventListener("input" , ()=>{
        const inpt = inp.value;
        td1.innerHTML = actualdata.Countries[inpt].Country;
        td2.innerHTML = actualdata.Countries[inpt].TotalConfirmed;
        td3.innerHTML = actualdata.Countries[inpt].TotalDeaths;
        td4.innerHTML = actualdata.Countries[inpt].TotalRecovered;
        
    })
}).catch((error)=>{
    console.log(error)
})