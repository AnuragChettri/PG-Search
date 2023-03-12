
const menuBtn=document.querySelector(".menu-btn");
const navbar=document.getElementById("small-navbar");


menuBtn.addEventListener("click",function(){
    if(navbar.classList.contains("show-list"))
    {
        navbar.classList.remove("show-list");
    }
    else
    {
        navbar.classList.add("show-list");
    }
})