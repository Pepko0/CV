const buttonChangeColor = document.querySelector(".js-button");
const body = document.querySelector(".body");

buttonChangeColor.addEventListener("click", () => {
    body.classList.toggle("body__dark")
});