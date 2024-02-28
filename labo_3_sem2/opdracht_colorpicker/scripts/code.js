const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {
    let valRed = document.getElementById("valRed");
    let valGreen = document.getElementById("valGreen");
    let valBlue = document.getElementById("valBlue");


    let colorSwatch=document.getElementsByClassName("swatch");
    let sliders = document.getElementsByClassName("slider");

    let rood = sliders[0].value;
    let groen = sliders[1].value;
    let blauw = sliders[2].value;

    valRed.innerHTML = rood;
    valGreen.innerHTML = groen;
    valBlue.innerHTML = blauw;

    colorSwatch[0].style.backgroundColor = "rgb(" + rood + "," + groen + "," + blauw + ")";
}

window.addEventListener("load", setup);