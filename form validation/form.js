const userName = document.querySelector(".username");
const password = document.querySelector(".pass");
let flag = 1;
// console.log(userName , password);
function validate(){

    if(userName.value == ""){
        document.querySelector(".usererror").innerHTML ="user name is not correct"
        flag = 0;
    }
    else if(userName.value.length < 3){
        document.querySelector(".usererror").innerHTML ="user name shoud b greaterthan 2" 
        flag = 0;
    }else{
        document.querySelector(".usererror").innerHTML ="";
        flag = 1;
    }
    if(password.value == ""){
        document.querySelector(".passerror").innerHTML ="user name is not correct"
        flag = 0;
    }else {
        document.querySelector(".passerror").innerHTML ="";
        if(userName.value == ""){
            flag = 0;
        }
        else if(userName.value.length < 3){
            flag = 0;
        }
        else{
            flag = 1;
        }
    }
    if(flag){
        console.log("submit");
        return true;
    }else{
        console.log(" not submit");
        return false;
    }
}
