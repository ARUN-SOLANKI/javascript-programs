const arr = [
    {
        name : "arun",
        email : "arunsolanki301@gmail.com",
        password : "As@5252"
    },
    {
        name : "akshit",
        email : "akshitsolanki301@gmail.com",
        password : "Ask5252"
    },
    {
        name : "anshika",
        email : "anshikasolanki301@gmail.com",
        password : "Asa@5252"
    },
    {
        name : "abhi",
        email : "abhisolanki301@gmail.com",
        password : "As@5252"
    },
    {
        name : "parik",
        email : "pariksolanki301@gmail.com",
        password : "ps@5252"
    },
];
const formset =  document.querySelector("#formset");
const name1 =  document.querySelector("#name");
const email1 =  document.querySelector("#email");
const password1 =  document.querySelector("#password");
const body1 = document.querySelector("body")
console.log(formset ,name1 , email1 , password1);
formset.addEventListener("submit" , (e)=>{
    e.preventDefault();
    name2 = name1.value;
    email2 = email1.value;
    password2 = password1.value;
    for(let i=0; i<arr.length - 1 ; i++){
        if(name2 == arr[i].name && email2 == arr[i].email && password2 == arr[i].password){
            body1.style.backgroundColor = "red";
        }else{
            body1.style.backgroundColor = "green";

        }
    }
})

