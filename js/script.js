const buttonChangeColor = document.querySelector(".js-button");
const body = document.querySelector(".body");
const otherName = document.querySelector(".otherName");
const slider = document.querySelector(".switch");
const span = document.querySelector(".span");

buttonChangeColor.addEventListener("click", () => {
    body.classList.toggle("body__dark");

    if(body.classList.contains("body__dark") ? otherName.innerText = "jasny" : otherName.innerText = "ciemny");
    if(body.classList.contains("body__dark") ? span.classList.add("span--dark")) : span.classList.remove("span--dark");

});

