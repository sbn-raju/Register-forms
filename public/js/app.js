let btn = document.querySelector(".btns");
let mainForm = document.querySelector(".main-form")
let btnContainer = document.querySelector(".btn-container");
let nameField = document.querySelectorAll(".try");
btn.addEventListener("click",()=>{
    for(let names of nameField){
        if(names.value === "" || names.value==null){
            names.classList.add("glow-red");
        }
        else{
            names.classList.add("glow-green");
        }
    }
});


