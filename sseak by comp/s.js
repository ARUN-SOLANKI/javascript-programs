const textarea = document.querySelector(".textarea");
const select = document.querySelector(".select");
const btn = document.querySelector(".submit_button");
const btn2 = document.querySelector("#btn2");
let synth = speechSynthesis;
console.log(btn2)

function welcome(text){
    text = "hello arun"
    let uter = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(uter);

}
welcome()

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Microsoft Ravi - English (India)" ? "selected" : "";
        let option = `<option value="${voice.name}"> ${voice.name} , (${voice.lag}) </option>`
        select.insertAdjacentHTML("beforeend" , option);
    }
}
synth.addEventListener("voiceschanged" , voices);

function textToSpeech(text){
    
    let uter = new SpeechSynthesisUtterance(text);

    for(let voice of synth.getVoices()){
        if(voice.name === select.value){
            uter.voice = voice;
        }
    }
    speechSynthesis.speak(uter);

}

// click and fetch data 

// btn2.addEventListener("click", ()=>{
//         getspeech();
// });

btn.addEventListener("click", e =>{
        e.preventDefault();
        speak();
        getspeech();
});

function display(str){
    let para = document.querySelector(".defi");
    para.innerHTML = `DEFINAION : ${str}`;
}

function redirect(text){
        
        window.location.assign(`https://www.dictionary.com/browse/${text}`)
}


function getspeech(){
    var SpeechRecognition = window.webkitSpeechRecognition;
    var recognitation = new SpeechRecognition();

    recognitation.onstart = function(){
        console.log("We are listening. Try speaking into the microphone.");
        btn2.innerHTML = "speak now"
    }
    recognitation.onspeechend = function(){
        btn2.innerHTML = "click to speak"
        recognitation.stop();
    }
    recognitation.onresult = function(event){
        textarea.value = event.results[0][0].transcript;
    }
    
    recognitation.start();
}

function speak(){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${textarea.value}`).then((res) =>{
            return res.json();
    }).then((data)=>{
            let redata =  data[0].meanings[0].definitions[0].definition
            if(redata){
            textToSpeech(redata);
            display(redata);
            }else{
                textToSpeech("defination in not found");
                redirect(redata);
            }
        });
}
