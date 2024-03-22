const setup = () => {
    const list = document.querySelectorAll("li");
    const head = document.querySelector("head");
    head.innerHTML += "<style>.listitem {background-color: red;}</style>";

    for (let i = 0; i < list.length; i++) {
        list[i].classList.add("listitem");
    }

    let image = document.createElement("img");
    image.setAttribute("src", "./img/mbappé.jpg");
    document.body.appendChild(image);
}

window.addEventListener("load", setup);
