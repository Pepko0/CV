const buttonChangeColor = document.querySelector(".js-button");
const body = document.querySelector(".body");
const otherName = document.querySelector(".otherName")


buttonChangeColor.addEventListener("click", () => {
    body.classList.toggle("body__dark");

    if(body.classList.contains("body__dark") ? otherName.innerText = "Przełącz na jasny motyw" : otherName.innerText = "Przełącz na ciemny motyw");
});