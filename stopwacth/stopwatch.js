var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var timer = false;

function start(){
    timer = true;
    stopwatch();
}
function stop(){
    timer = false
}
function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;

        document.querySelector(".hr").innerHTML = "00";
        document.querySelector(".min").innerHTML = "00";
        document.querySelector(".msec").innerHTML = "00";
        document.querySelector(".sec").innerHTML = "00";
}


function stopwatch(){
    if(timer == true){
        msec = msec+1;
        if(msec == 100){
            msec = 0;
            sec = sec+1;
        }
        if(sec == 60){
            min = min+1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if(hr == 24){
            hr = 0;
            min = 0;
            sec = 0;
        }
        var hrstring = hr;
        var minstring = min;
        var secstring = sec;
        var msecstring = msec;
        if(hr<10){
            hrstring = "0" + hr;
        }
        if(min<10){
            minstring = "0" + min;
        }
        if(sec<10){
            secstring = "0" + sec;
        }
        if(msec<10){
            msecstring = "0" + msec;
        }
        document.querySelector(".hr").innerHTML = hrstring;
        document.querySelector(".min").innerHTML = minstring;
        document.querySelector(".msec").innerHTML = msecstring;
        document.querySelector(".sec").innerHTML = secstring;
    setTimeout("stopwatch()", 10);
    }
}