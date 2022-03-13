const arr = fetch("https://random-word-api.herokuapp.com/word?number=1").then(resp => resp.json()).then((data)=> {
    return data;
})

arr.then((rest)=>{
    const body = document.querySelector("body");
    const main_div = document.querySelector(".main_div");
    const def_span = document.querySelector(".def_span");
    const len = rest[0].length;
    console.log(rest[0]);

    for(let i =0 ; i < rest[0].length; i++){
        const newspan = document.createElement('span');
        const newspaninnerHTML = ` _ `
        newspan.innerHTML = newspaninnerHTML;
        main_div.append(newspan);
    }
    let win = [];
    body.addEventListener("keydown" , (e)=>{
        let span_arr = main_div.children;
        let strg = "";
        let count = 0;
            chars = e.key;
            for(let i=0 ; i < len ; i++){
                if(chars == rest[0][i]){
                    span_arr[i].innerHTML = rest[0][i];
                        win[i] = rest[0][i];
                }if(chars !== rest[0][i]){
                    count = count + 1;
                }
            }
            for(let i = 0 ; i < rest[0].length ; i++){
                   strg = strg + win[i];  
            }
            if(strg == rest[0]){
                const h1 = document.querySelector("h1");
                h1.innerHTML = `you wins with ${count} wrong keys`;
            }

    })
})