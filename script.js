const harmburger = document.querySelector(".harmburger");
const navMenu = document.querySelector(".nav-menu");

harmburger.addEventListener("click",() => {
    harmburger.classList.toggle("active")
    navMenu.classList.toggle("active")

})

 document.querySelectorAll("list").forEach(n =>n.addEventListener("click",() =>{
    harmburger.classList.remove("active")
    navMenu.classList.remove("active")

 }))