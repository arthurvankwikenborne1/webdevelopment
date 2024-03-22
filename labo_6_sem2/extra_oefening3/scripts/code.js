const setup = () => {
    const btnSubmit = document.querySelector("#btnSubmit");
    btnSubmit.addEventListener("click",voegPElementToe)
}

const voegPElementToe = () =>{
    let p = document.createElement("p");
    const div = document.querySelector("#myDIV");
    p.innerText = "random text";
    div.appendChild(p);
}

window.addEventListener("load", setup);