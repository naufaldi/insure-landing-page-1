const hamburger = document.querySelector(".hamburger");
const hamClose = document.querySelector(".hamburger--close");
const nav = document.querySelector(".header--nav--menu");
const bg = document.querySelector(".show--background");
const body = document.querySelector("#body");

hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("show");
    hamburger.style.display = "none";
    hamClose.style.display = "block";
    bg.style.display = "block";
    body.classList.add("overflow-hidden");
})

hamClose.addEventListener("click", ()=>{
    nav.classList.toggle("show");
    hamburger.style.display = "block";
    hamClose.style.display = "none";
    bg.style.display = "none";
    body.classList.remove("overflow-hidden");
})