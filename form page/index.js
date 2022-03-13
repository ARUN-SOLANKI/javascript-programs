const name1 = document.querySelector(".name")
const email1 = document.querySelector(".email")
const password1 = document.querySelector(".password")
const mobile1 = document.querySelector(".mobile")
const sign_up = document.querySelector(".button")
const sign_up_h1 = document.querySelector(".sign_up")
console.log( name1 , email1 , password1, mobile1 , sign_up_h1)

// ------------------------ sign up start--------------------------------
sign_up.addEventListener("click" , (e)=>{
    e.preventDefault();
        if(name1 == "" && email1 == "" && password1=="" && mobile1 == ""){
            sign_up_h1.innerHTML = "please fill all the inputs"
        }else{
            localStorage.setItem("name" , name1.value)
            localStorage.setItem("email" , email1.value)
            localStorage.setItem("password" , password1.value)
            localStorage.setItem("mobile" , mobile1.value)
            
            name1.value = "";
            email1.value = "";
            password1.value = "";
            mobile1.value = "";
            
            sign_up_h1.innerHTML = "you registered sucsessfully"
        }
        
        setTimeout(()=>{
            sign_up_h1.style.display = "none";
        }, 5000)
    })
    // ------------------------ sign up end--------------------------------

const log_in = document.querySelector(".button1")
const email2 = document.querySelector(".email1")
const password2 = document.querySelector(".password1")
const login_h1 = document.querySelector(".log_in")
console.log( email2 , password2, login_h1)
 
// ------------------------ log in start--------------------------------
let flag = false;
function getpast(flag){
    if(!flag){
        log_in.addEventListener("click" , (e)=>{

            e.preventDefault();
            getemail = localStorage.getItem("email")
            getpass = localStorage.getItem("password")
            if(email2.value == "" && password2.value == ""){
                login_h1.innerHTML = "please fill all fields"
                email2.value = "";
                password2.value = "";
            }
            else if(email2.value == getemail && password2.value == getpass){
                login_h1.innerHTML = "sucssefully log in"
                email2.value = "";
                password2.value = "";
            }
            else{
                login_h1.innerHTML = "wrong input please check"
                email2.value = "";
                password2.value = "";
            }
            setTimeout(()=>{
                login_h1.style.display = "none";
            }, 5000)
        
        })
    }
}
getpast(flag);