

{
    const welcome = () => {
        console.log("Hey Guys! :p");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const otherName = document.querySelector(".otherName");
        body.classList.toggle("body__dark");
        if(body.classList.contains("body__dark") ? otherName.innerText = "jasny" : otherName.innerText = "ciemny");
    }

    const init = () => {
        const buttonChangeColor = document.querySelector(".js-button");
        buttonChangeColor.addEventListener("click", toggleBackground);
    
        welcome();
    }
    
    init()
}