let cvbtn = document.getElementById("cvbtn");
let submit = document.getElementById("submit");

cvbtn.addEventListener("click", function(){
    alert("Downloaded Successfully")
})


submit.addEventListener("click", function(){
   
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(email.value == "" && password.value == ""){
        alert("Please fill the appropriate details")
    }
    else{
        alert("Logged In Succesfully")
    }

})

burger = document.querySelector('.burger')
navlist = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')
burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

    
})
