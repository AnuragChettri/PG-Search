
const menuBtn=document.querySelector(".menu-btn");
const navbar=document.getElementById("small-navbar");
const viewBtn=document.getElementById("view-btn");


viewBtn.addEventListener("click",function(){
    alert("This features is not available right now ! Stay Tune ");
    console("hello world !");
})

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

