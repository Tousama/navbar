const menuHeaderDom = document.querySelector(".menu-header");
const menuItemDom = document.querySelectorAll(".menu-item");

menuHeaderDom.addEventListener("click",()=>{
    menuItemDom.forEach((item)=>{
        item.classList.toggle("inactive");
    })
});


console.log("Her şey yolunda!!!");