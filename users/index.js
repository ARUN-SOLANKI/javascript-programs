setInterval(()=>{
    fetch("https://randomuser.me/api/").then((res)=>res.json()).then((res)=>{
       
    // element selection
        const pic = document.querySelector(".img");
        const names = document.querySelector(".name");
        const dobs = document.querySelector(".dob");
        const genders = document.querySelector(".gender");
        const phones = document.querySelector(".phone");
        const emails = document.querySelector(".email");
        const ages = document.querySelector(".age");
    // destructuring 
        const{email  ,name , gender , phone}= res.results[0];
        const {age , date} = res.results[0].dob;
        const{title , first , last} = name;
        const{large}= res.results[0].picture;
        const [dob] = date.split("T")
    // changing text
        pic.setAttribute("src" , `${large}`);
        names.innerHTML = `name : ${title}. ${first} ${last}`
        dobs.innerHTML = `dob : ${dob}`
        ages.innerHTML = `age : ${age}`
        genders.innerHTML = `gender : ${gender}`
        phones.innerHTML = `phone number : ${phone}`
        emails.innerHTML = `email : ${email}`
    })
    }, 3000);